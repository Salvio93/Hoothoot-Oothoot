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
    onRpc,
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


class Partner extends models.Model {
    _name = "res.partner";

    product_id = fields.Many2one({ relation: "product" });
    color = fields.Selection({
        selection: [
            ["red", "Red"],
            ["black", "Black"],
        ],
        default: "red",
    });

    _records = [{ id: 1 }, { id: 2, product_id: 37 }];


    _views = {
        form: /* xml */ `
            <form>
                <field name="color" />
            </form>
        `,
        list: /* xml */ `
        <tree>
            <field name="color" />
        </tree>
    `,
    };

}

class Product extends models.Model {
    _rec_name = "display_name";

    _records = [
        { id: 37, display_name: "xphone" },
        { id: 41, display_name: "xpad" },
    ];
}


defineModels([Oui, Partner, Product]);



 test("model should be defined on the mock server0", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");

            expect(args[1]).toEqual({ color: false });
        });

        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });

        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server1", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server2", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server3", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server4", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server5", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server6", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server7", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server8", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server9", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server10", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server11", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server12", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server13", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server14", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server15", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server16", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server17", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server18", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server19", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server20", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server21", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server22", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server23", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server24", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server25", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server26", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server27", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server28", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server29", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server30", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server31", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server32", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server33", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server34", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server35", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server36", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server37", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server38", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server39", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server40", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server41", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server42", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server43", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server44", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server45", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server46", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server47", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server48", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server49", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server50", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server51", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server52", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server53", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server54", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server55", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server56", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server57", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server58", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server59", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server60", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server61", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server62", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server63", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server64", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server65", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server66", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server67", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server68", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server69", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server70", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server71", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server72", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server73", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server74", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server75", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server76", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server77", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server78", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server79", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server80", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server81", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server82", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server83", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server84", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server85", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server86", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server87", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server88", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server89", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server90", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server91", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server92", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server93", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server94", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server95", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server96", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server97", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server98", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server99", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server100", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server101", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server102", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server103", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server104", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server105", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server106", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server107", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server108", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server109", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server110", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server111", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server112", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server113", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server114", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server115", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server116", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server117", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server118", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server119", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server120", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server121", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server122", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server123", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server124", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server125", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server126", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server127", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server128", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server129", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server130", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server131", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server132", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server133", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server134", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server135", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server136", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server137", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server138", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server139", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server140", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server141", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server142", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server143", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server144", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server145", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server146", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server147", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server148", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server149", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server150", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server151", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server152", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server153", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server154", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server155", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server156", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server157", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server158", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server159", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server160", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server161", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server162", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server163", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server164", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server165", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server166", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server167", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server168", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server169", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server170", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server171", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server172", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server173", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server174", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server175", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server176", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server177", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server178", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server179", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server180", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server181", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server182", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server183", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server184", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server185", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server186", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server187", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server188", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server189", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server190", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server191", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server192", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server193", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server194", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server195", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server196", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server197", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server198", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server199", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server200", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server201", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server202", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server203", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server204", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server205", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server206", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server207", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server208", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server209", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server210", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server211", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server212", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server213", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server214", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server215", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server216", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server217", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server218", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server219", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server220", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server221", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server222", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server223", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server224", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server225", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server226", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server227", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server228", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server229", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server230", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server231", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server232", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server233", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server234", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server235", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server236", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server237", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server238", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server239", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server240", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server241", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server242", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server243", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server244", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server245", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server246", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server247", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server248", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server249", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 

var currentdate = new Date(); 
console.log(currentdate);

 