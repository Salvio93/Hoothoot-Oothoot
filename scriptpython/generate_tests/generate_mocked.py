f = open("generation_mocked.test.js","w")

f.write("""import { describe, expect, test } from "@odoo/hoot";
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
}

class Product extends models.Model {
    _rec_name = "display_name";

    _records = [
        { id: 37, display_name: "xphone" },
        { id: 41, display_name: "xpad" },
    ];
}


defineModels([Oui, Partner, Product]);

\n

var currentdate = new Date(); 
console.log(currentdate);
\n
 """)
for e in range(250):
    
    f.write('test("model should be defined on the mock server'+ str(e)+'", async () => {')


    f.write("""onRpc("res.partner", "web_save", ({ args }) => {
            expect.step("web_save");
            expect(args[1]).toEqual({ color: false });
        });
        await mountView({
            type: "graph",
            resModel: "res.partner",
            arch: '<graph><field name="color" widget="selection_badge"/></graph>',
        });
    
        expect("div.o_graph_view").toHaveCount(1, {
            message: "should have rendered outer div",
        });
});
 \n""")

f.write("""
var currentdate = new Date(); 
console.log(currentdate);
\n """)
f.close()
