import { describe, expect, test } from "@odoo/hoot";
import {
    MockServer,
    defineModels,
    fields,
    getService,
    makeMockEnv,
    makeMockServer,
    mountView,
    models,
} from "@web/../tests/web_test_helpers";

class Oui extends models.Model {
    name = fields.Char();

    _records = [
        {
            id: 1,
            name: "John Doe",
        },
    ];
}

defineModels([Oui]);

test("model name can be implicitly extracted from its constructor name", async () => {
    const [AnonymousClass, Foo, ResCurrency, ResPartner] = defineModels([
        class extends models.Model {},
        class Foo extends models.Model {},
        class ResCurrency extends models.Model {
            _name = "project.task"; //
        },
        class ResPartner extends models.Model {},
    ]);

    await makeMockServer();

    expect(MockServer.env["anonymous"]).toBeInstanceOf(AnonymousClass);
    expect(MockServer.env["foo"]).toBeInstanceOf(Foo);
    expect(MockServer.env["project.task"]).toBeInstanceOf(ResCurrency);
    expect(MockServer.env["res.partner"]).toBeInstanceOf(ResPartner);

    expect(() => MockServer.env["res.currency"]).toThrow(
        "could not get model from server environment"
    );
});

test("model should be defined on the mock server", async () => {
    await makeMockEnv();

    await expect(getService("orm").searchRead("oui", [], ["id", "name"])).resolves.toEqual([
        {
            id: 1,
            name: "John Doe",
        },
    ]);
});

import { defineServerRecords, disableMockServer } from "@web/../tests/_framework/mock_server/mock_server";
const data = {
    ["res.partner"]: 
        {
            name: "coucou",
        },
    
};
const data2 = {
    ["res.partner"]: 
        {
            name: "ça va",
        },
    
};

let payload = {
    'jsonrpc': '2.0',
    'method': 'call',
    'params': {data,data2},
};

test("graph views works with actual server", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    const records = await getService("orm").searchRead("res.partner",[],[],{ 
        context: { lang: "en_US" },
    });

    expect(records.filter(x => x.name === "coucou")[0].name).toBe("coucou");
    expect(records.filter(x => x.name === "ça va")[0].name).toBe("ça va");

    disableMockServer();
    await mountView({
        type: "graph",
        resModel: "res.partner",
    });
    expect(".o_graph_view").toHaveCount(1);

    await mountView({ 
        type: "kanban",
        resModel: "res.partner",
    });
    expect(".o_kanban_view").toHaveCount(1);

    await mountView({
        type: "list",
        resModel: "res.partner",
    });
    expect(".o_list_view").toHaveCount(1);
});


describe("level 1", () => {
    Oui._fields.age = fields.Integer();
    Oui._records[0].age = 42;

    test("model can be overridden at a suite level", async () => {
        await makeMockEnv();

        await expect(
            getService("orm").searchRead("oui", [], ["id", "name", "age"])
        ).resolves.toEqual([
            {
                id: 1,
                name: "John Doe",
                age: 42,
            },
        ]);
    });

    test("model can be overridden at a test level", async () => {
        Oui._fields.surname = fields.Char();
        Oui._records[0].surname = "doedoe";

        await makeMockEnv();

        await expect(
            getService("orm").searchRead("oui", [], ["id", "name", "age", "surname"])
        ).resolves.toEqual([
            {
                id: 1,
                name: "John Doe",
                age: 42,
                surname: "doedoe",
            },
        ]);
    });

    describe("level 2", () => {
        Oui._fields.email = fields.Char();
        Oui._records[0].email = "john@doe.com";

        test("model overrides are incremental", async () => {
            await makeMockEnv();

            await expect(
                getService("orm").searchRead("oui", [], ["id", "name", "age", "email"])
            ).resolves.toEqual([
                {
                    id: 1,
                    name: "John Doe",
                    age: 42,
                    email: "john@doe.com",
                },
            ]);
        });
    });
});
