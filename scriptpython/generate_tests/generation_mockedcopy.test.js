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
                <field name="display_name" />
            </form>
        `,
        list: /* xml */ `
        <tree>
            <field name="display_name" />
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




var currentdate = new Date(); 
console.log(currentdate);


 test("model should be defined on the mock server graph0", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph1", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph2", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph3", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph4", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph5", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph6", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph7", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph8", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph9", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph10", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph11", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph12", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph13", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph14", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph15", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph16", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph17", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph18", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph19", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph20", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph21", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph22", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph23", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph24", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph25", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph26", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph27", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph28", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph29", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph30", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph31", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph32", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph33", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph34", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph35", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph36", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph37", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph38", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph39", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph40", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph41", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph42", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph43", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph44", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph45", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph46", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph47", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph48", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph49", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph50", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph51", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph52", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph53", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph54", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph55", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph56", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph57", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph58", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph59", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph60", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph61", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph62", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph63", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph64", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph65", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph66", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph67", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph68", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph69", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph70", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph71", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph72", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph73", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph74", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph75", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph76", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph77", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph78", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph79", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph80", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph81", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph82", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph83", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph84", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph85", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph86", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph87", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph88", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph89", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph90", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph91", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph92", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph93", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph94", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph95", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph96", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph97", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph98", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph99", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph100", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph101", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph102", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph103", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph104", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph105", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph106", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph107", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph108", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph109", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph110", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph111", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph112", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph113", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph114", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph115", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph116", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph117", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph118", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph119", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph120", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph121", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph122", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph123", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph124", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph125", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph126", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph127", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph128", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph129", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph130", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph131", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph132", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph133", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph134", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph135", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph136", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph137", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph138", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph139", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph140", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph141", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph142", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph143", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph144", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph145", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph146", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph147", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph148", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph149", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph150", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph151", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph152", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph153", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph154", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph155", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph156", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph157", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph158", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph159", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph160", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph161", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph162", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph163", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph164", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph165", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph166", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph167", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph168", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph169", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph170", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph171", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph172", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph173", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph174", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph175", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph176", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph177", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph178", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph179", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph180", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph181", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph182", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph183", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph184", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph185", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph186", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph187", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph188", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph189", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph190", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph191", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph192", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph193", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph194", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph195", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph196", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph197", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph198", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph199", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph200", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph201", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph202", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph203", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph204", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph205", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph206", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph207", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph208", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph209", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph210", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph211", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph212", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph213", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph214", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph215", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph216", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph217", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph218", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph219", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph220", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph221", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph222", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph223", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph224", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph225", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph226", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph227", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph228", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph229", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph230", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph231", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph232", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph233", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph234", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph235", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph236", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph237", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph238", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph239", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph240", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph241", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph242", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph243", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph244", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph245", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph246", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph247", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph248", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server graph249", async () => {onRpc("res.partner", "web_save", ({ args }) => {
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
 
test("model should be defined on the mock server kanban0", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban1", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban2", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban3", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban4", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban5", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban6", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban7", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban8", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban9", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban10", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban11", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban12", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban13", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban14", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban15", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban16", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban17", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban18", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban19", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban20", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban21", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban22", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban23", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban24", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban25", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban26", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban27", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban28", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban29", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban30", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban31", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban32", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban33", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban34", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban35", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban36", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban37", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban38", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban39", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban40", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban41", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban42", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban43", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban44", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban45", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban46", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban47", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban48", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban49", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban50", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban51", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban52", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban53", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban54", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban55", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban56", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban57", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban58", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban59", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban60", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban61", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban62", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban63", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban64", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban65", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban66", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban67", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban68", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban69", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban70", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban71", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban72", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban73", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban74", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban75", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban76", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban77", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban78", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban79", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban80", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban81", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban82", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban83", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban84", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban85", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban86", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban87", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban88", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban89", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban90", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban91", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban92", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban93", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban94", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban95", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban96", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban97", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban98", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban99", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban100", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban101", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban102", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban103", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban104", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban105", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban106", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban107", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban108", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban109", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban110", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban111", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban112", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban113", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban114", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban115", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban116", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban117", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban118", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban119", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban120", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban121", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban122", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban123", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban124", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban125", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban126", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban127", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban128", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban129", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban130", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban131", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban132", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban133", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban134", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban135", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban136", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban137", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban138", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban139", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban140", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban141", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban142", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban143", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban144", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban145", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban146", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban147", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban148", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban149", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban150", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban151", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban152", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban153", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban154", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban155", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban156", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban157", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban158", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban159", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban160", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban161", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban162", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban163", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban164", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban165", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban166", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban167", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban168", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban169", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban170", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban171", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban172", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban173", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban174", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban175", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban176", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban177", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban178", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban179", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban180", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban181", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban182", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban183", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban184", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban185", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban186", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban187", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban188", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban189", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban190", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban191", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban192", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban193", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban194", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban195", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban196", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban197", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban198", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban199", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban200", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban201", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban202", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban203", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban204", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban205", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban206", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban207", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban208", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban209", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban210", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban211", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban212", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban213", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban214", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban215", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban216", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban217", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban218", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban219", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban220", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban221", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban222", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban223", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban224", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban225", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban226", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban227", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban228", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban229", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban230", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban231", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban232", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban233", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban234", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban235", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban236", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban237", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban238", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban239", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban240", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban241", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban242", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban243", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban244", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban245", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban246", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban247", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban248", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server kanban249", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "kanban",
            resModel: "res.partner",
            arch: `
            <kanban>
                <templates>
                    <t t-name="card">
                        <field name="color" widget="selection_badge"/>
                    </t>
                </templates>
            </kanban>`,
        });
    
        expect("div.o_kanban_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list0", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list1", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list2", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list3", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list4", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list5", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list6", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list7", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list8", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list9", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list10", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list11", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list12", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list13", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list14", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list15", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list16", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list17", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list18", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list19", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list20", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list21", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list22", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list23", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list24", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list25", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list26", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list27", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list28", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list29", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list30", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list31", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list32", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list33", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list34", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list35", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list36", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list37", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list38", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list39", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list40", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list41", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list42", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list43", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list44", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list45", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list46", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list47", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list48", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list49", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list50", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list51", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list52", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list53", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list54", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list55", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list56", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list57", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list58", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list59", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list60", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list61", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list62", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list63", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list64", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list65", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list66", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list67", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list68", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list69", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list70", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list71", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list72", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list73", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list74", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list75", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list76", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list77", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list78", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list79", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list80", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list81", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list82", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list83", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list84", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list85", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list86", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list87", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list88", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list89", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list90", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list91", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list92", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list93", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list94", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list95", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list96", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list97", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list98", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list99", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list100", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list101", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list102", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list103", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list104", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list105", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list106", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list107", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list108", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list109", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list110", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list111", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list112", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list113", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list114", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list115", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list116", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list117", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list118", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list119", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list120", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list121", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list122", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list123", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list124", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list125", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list126", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list127", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list128", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list129", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list130", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list131", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list132", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list133", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list134", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list135", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list136", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list137", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list138", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list139", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list140", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list141", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list142", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list143", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list144", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list145", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list146", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list147", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list148", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list149", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list150", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list151", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list152", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list153", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list154", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list155", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list156", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list157", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list158", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list159", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list160", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list161", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list162", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list163", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list164", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list165", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list166", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list167", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list168", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list169", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list170", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list171", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list172", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list173", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list174", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list175", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list176", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list177", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list178", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list179", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list180", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list181", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list182", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list183", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list184", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list185", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list186", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list187", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list188", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list189", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list190", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list191", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list192", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list193", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list194", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list195", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list196", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list197", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list198", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list199", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list200", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list201", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list202", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list203", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list204", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list205", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list206", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list207", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list208", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list209", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list210", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list211", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list212", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list213", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list214", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list215", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list216", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list217", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list218", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list219", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list220", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list221", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list222", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list223", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list224", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list225", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list226", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list227", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list228", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list229", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list230", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list231", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list232", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list233", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list234", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list235", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list236", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list237", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list238", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list239", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list240", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list241", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list242", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list243", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list244", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list245", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list246", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list247", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list248", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 
test("model should be defined on the mock server list249", async () => {onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "list",
            resModel: "res.partner",

        });
    
        expect("div.o_list_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 

var currentdate = new Date(); 
console.log(currentdate);

 