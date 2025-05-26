f = open("generation.test.js","w")

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
} from "@web/../tests/web_test_helpers";





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
};\n

var currentdate = new Date(); 
console.log(currentdate);
\n
 """)
for e in range(250):
    
    f.write('test("graph view works with actual server'+ str(e) +'", async () => ')


    f.write("""{
    defineServerRecords(payload);
    await makeMockEnv();
    const records = await getService("orm").searchRead("res.partner",[],[],{ context : {lang : "en_US"} });
    
    disableMockServer();
    await mountView({ // -> "@web/../tests/web_test_helpers"
        type: "graph",
        resModel: "res.partner",
    });
    expect(".o_graph_view").toHaveCount(1);


    await mountView({ // -> "@web/../tests/web_test_helpers"
        type: "kanban",
        resModel: "res.partner",
    });
    expect(".o_kanban_view").toHaveCount(1);


    await mountView({ // -> "@web/../tests/web_test_helpers"
        type: "list",
        resModel: "res.partner",
    });
    expect(".o_list_view").toHaveCount(1);
}); \n""")

f.write("""
var currentdate = new Date(); 
console.log(currentdate);
\n """)
f.close()
