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


var currentdate = new Date(); 
console.log(currentdate);


 test("graph view works with actual server0", async () => {
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
}); 
test("graph view works with actual server1", async () => {
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
}); 
test("graph view works with actual server2", async () => {
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
}); 
test("graph view works with actual server3", async () => {
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
}); 
test("graph view works with actual server4", async () => {
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
}); 
test("graph view works with actual server5", async () => {
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
}); 
test("graph view works with actual server6", async () => {
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
}); 
test("graph view works with actual server7", async () => {
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
}); 
test("graph view works with actual server8", async () => {
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
}); 
test("graph view works with actual server9", async () => {
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
}); 
test("graph view works with actual server10", async () => {
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
}); 
test("graph view works with actual server11", async () => {
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
}); 
test("graph view works with actual server12", async () => {
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
}); 
test("graph view works with actual server13", async () => {
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
}); 
test("graph view works with actual server14", async () => {
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
}); 
test("graph view works with actual server15", async () => {
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
}); 
test("graph view works with actual server16", async () => {
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
}); 
test("graph view works with actual server17", async () => {
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
}); 
test("graph view works with actual server18", async () => {
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
}); 
test("graph view works with actual server19", async () => {
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
}); 
test("graph view works with actual server20", async () => {
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
}); 
test("graph view works with actual server21", async () => {
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
}); 
test("graph view works with actual server22", async () => {
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
}); 
test("graph view works with actual server23", async () => {
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
}); 
test("graph view works with actual server24", async () => {
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
}); 
test("graph view works with actual server25", async () => {
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
}); 
test("graph view works with actual server26", async () => {
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
}); 
test("graph view works with actual server27", async () => {
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
}); 
test("graph view works with actual server28", async () => {
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
}); 
test("graph view works with actual server29", async () => {
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
}); 
test("graph view works with actual server30", async () => {
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
}); 
test("graph view works with actual server31", async () => {
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
}); 
test("graph view works with actual server32", async () => {
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
}); 
test("graph view works with actual server33", async () => {
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
}); 
test("graph view works with actual server34", async () => {
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
}); 
test("graph view works with actual server35", async () => {
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
}); 
test("graph view works with actual server36", async () => {
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
}); 
test("graph view works with actual server37", async () => {
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
}); 
test("graph view works with actual server38", async () => {
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
}); 
test("graph view works with actual server39", async () => {
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
}); 
test("graph view works with actual server40", async () => {
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
}); 
test("graph view works with actual server41", async () => {
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
}); 
test("graph view works with actual server42", async () => {
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
}); 
test("graph view works with actual server43", async () => {
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
}); 
test("graph view works with actual server44", async () => {
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
}); 
test("graph view works with actual server45", async () => {
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
}); 
test("graph view works with actual server46", async () => {
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
}); 
test("graph view works with actual server47", async () => {
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
}); 
test("graph view works with actual server48", async () => {
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
}); 
test("graph view works with actual server49", async () => {
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
}); 
test("graph view works with actual server50", async () => {
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
}); 
test("graph view works with actual server51", async () => {
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
}); 
test("graph view works with actual server52", async () => {
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
}); 
test("graph view works with actual server53", async () => {
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
}); 
test("graph view works with actual server54", async () => {
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
}); 
test("graph view works with actual server55", async () => {
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
}); 
test("graph view works with actual server56", async () => {
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
}); 
test("graph view works with actual server57", async () => {
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
}); 
test("graph view works with actual server58", async () => {
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
}); 
test("graph view works with actual server59", async () => {
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
}); 
test("graph view works with actual server60", async () => {
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
}); 
test("graph view works with actual server61", async () => {
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
}); 
test("graph view works with actual server62", async () => {
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
}); 
test("graph view works with actual server63", async () => {
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
}); 
test("graph view works with actual server64", async () => {
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
}); 
test("graph view works with actual server65", async () => {
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
}); 
test("graph view works with actual server66", async () => {
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
}); 
test("graph view works with actual server67", async () => {
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
}); 
test("graph view works with actual server68", async () => {
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
}); 
test("graph view works with actual server69", async () => {
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
}); 
test("graph view works with actual server70", async () => {
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
}); 
test("graph view works with actual server71", async () => {
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
}); 
test("graph view works with actual server72", async () => {
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
}); 
test("graph view works with actual server73", async () => {
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
}); 
test("graph view works with actual server74", async () => {
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
}); 
test("graph view works with actual server75", async () => {
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
}); 
test("graph view works with actual server76", async () => {
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
}); 
test("graph view works with actual server77", async () => {
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
}); 
test("graph view works with actual server78", async () => {
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
}); 
test("graph view works with actual server79", async () => {
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
}); 
test("graph view works with actual server80", async () => {
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
}); 
test("graph view works with actual server81", async () => {
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
}); 
test("graph view works with actual server82", async () => {
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
}); 
test("graph view works with actual server83", async () => {
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
}); 
test("graph view works with actual server84", async () => {
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
}); 
test("graph view works with actual server85", async () => {
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
}); 
test("graph view works with actual server86", async () => {
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
}); 
test("graph view works with actual server87", async () => {
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
}); 
test("graph view works with actual server88", async () => {
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
}); 
test("graph view works with actual server89", async () => {
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
}); 
test("graph view works with actual server90", async () => {
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
}); 
test("graph view works with actual server91", async () => {
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
}); 
test("graph view works with actual server92", async () => {
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
}); 
test("graph view works with actual server93", async () => {
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
}); 
test("graph view works with actual server94", async () => {
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
}); 
test("graph view works with actual server95", async () => {
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
}); 
test("graph view works with actual server96", async () => {
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
}); 
test("graph view works with actual server97", async () => {
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
}); 
test("graph view works with actual server98", async () => {
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
}); 
test("graph view works with actual server99", async () => {
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
}); 
test("graph view works with actual server100", async () => {
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
}); 
test("graph view works with actual server101", async () => {
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
}); 
test("graph view works with actual server102", async () => {
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
}); 
test("graph view works with actual server103", async () => {
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
}); 
test("graph view works with actual server104", async () => {
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
}); 
test("graph view works with actual server105", async () => {
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
}); 
test("graph view works with actual server106", async () => {
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
}); 
test("graph view works with actual server107", async () => {
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
}); 
test("graph view works with actual server108", async () => {
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
}); 
test("graph view works with actual server109", async () => {
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
}); 
test("graph view works with actual server110", async () => {
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
}); 
test("graph view works with actual server111", async () => {
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
}); 
test("graph view works with actual server112", async () => {
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
}); 
test("graph view works with actual server113", async () => {
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
}); 
test("graph view works with actual server114", async () => {
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
}); 
test("graph view works with actual server115", async () => {
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
}); 
test("graph view works with actual server116", async () => {
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
}); 
test("graph view works with actual server117", async () => {
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
}); 
test("graph view works with actual server118", async () => {
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
}); 
test("graph view works with actual server119", async () => {
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
}); 
test("graph view works with actual server120", async () => {
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
}); 
test("graph view works with actual server121", async () => {
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
}); 
test("graph view works with actual server122", async () => {
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
}); 
test("graph view works with actual server123", async () => {
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
}); 
test("graph view works with actual server124", async () => {
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
}); 
test("graph view works with actual server125", async () => {
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
}); 
test("graph view works with actual server126", async () => {
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
}); 
test("graph view works with actual server127", async () => {
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
}); 
test("graph view works with actual server128", async () => {
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
}); 
test("graph view works with actual server129", async () => {
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
}); 
test("graph view works with actual server130", async () => {
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
}); 
test("graph view works with actual server131", async () => {
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
}); 
test("graph view works with actual server132", async () => {
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
}); 
test("graph view works with actual server133", async () => {
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
}); 
test("graph view works with actual server134", async () => {
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
}); 
test("graph view works with actual server135", async () => {
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
}); 
test("graph view works with actual server136", async () => {
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
}); 
test("graph view works with actual server137", async () => {
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
}); 
test("graph view works with actual server138", async () => {
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
}); 
test("graph view works with actual server139", async () => {
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
}); 
test("graph view works with actual server140", async () => {
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
}); 
test("graph view works with actual server141", async () => {
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
}); 
test("graph view works with actual server142", async () => {
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
}); 
test("graph view works with actual server143", async () => {
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
}); 
test("graph view works with actual server144", async () => {
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
}); 
test("graph view works with actual server145", async () => {
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
}); 
test("graph view works with actual server146", async () => {
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
}); 
test("graph view works with actual server147", async () => {
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
}); 
test("graph view works with actual server148", async () => {
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
}); 
test("graph view works with actual server149", async () => {
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
}); 
test("graph view works with actual server150", async () => {
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
}); 
test("graph view works with actual server151", async () => {
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
}); 
test("graph view works with actual server152", async () => {
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
}); 
test("graph view works with actual server153", async () => {
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
}); 
test("graph view works with actual server154", async () => {
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
}); 
test("graph view works with actual server155", async () => {
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
}); 
test("graph view works with actual server156", async () => {
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
}); 
test("graph view works with actual server157", async () => {
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
}); 
test("graph view works with actual server158", async () => {
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
}); 
test("graph view works with actual server159", async () => {
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
}); 
test("graph view works with actual server160", async () => {
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
}); 
test("graph view works with actual server161", async () => {
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
}); 
test("graph view works with actual server162", async () => {
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
}); 
test("graph view works with actual server163", async () => {
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
}); 
test("graph view works with actual server164", async () => {
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
}); 
test("graph view works with actual server165", async () => {
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
}); 
test("graph view works with actual server166", async () => {
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
}); 
test("graph view works with actual server167", async () => {
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
}); 
test("graph view works with actual server168", async () => {
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
}); 
test("graph view works with actual server169", async () => {
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
}); 
test("graph view works with actual server170", async () => {
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
}); 
test("graph view works with actual server171", async () => {
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
}); 
test("graph view works with actual server172", async () => {
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
}); 
test("graph view works with actual server173", async () => {
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
}); 
test("graph view works with actual server174", async () => {
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
}); 
test("graph view works with actual server175", async () => {
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
}); 
test("graph view works with actual server176", async () => {
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
}); 
test("graph view works with actual server177", async () => {
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
}); 
test("graph view works with actual server178", async () => {
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
}); 
test("graph view works with actual server179", async () => {
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
}); 
test("graph view works with actual server180", async () => {
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
}); 
test("graph view works with actual server181", async () => {
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
}); 
test("graph view works with actual server182", async () => {
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
}); 
test("graph view works with actual server183", async () => {
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
}); 
test("graph view works with actual server184", async () => {
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
}); 
test("graph view works with actual server185", async () => {
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
}); 
test("graph view works with actual server186", async () => {
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
}); 
test("graph view works with actual server187", async () => {
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
}); 
test("graph view works with actual server188", async () => {
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
}); 
test("graph view works with actual server189", async () => {
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
}); 
test("graph view works with actual server190", async () => {
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
}); 
test("graph view works with actual server191", async () => {
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
}); 
test("graph view works with actual server192", async () => {
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
}); 
test("graph view works with actual server193", async () => {
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
}); 
test("graph view works with actual server194", async () => {
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
}); 
test("graph view works with actual server195", async () => {
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
}); 
test("graph view works with actual server196", async () => {
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
}); 
test("graph view works with actual server197", async () => {
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
}); 
test("graph view works with actual server198", async () => {
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
}); 
test("graph view works with actual server199", async () => {
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
}); 
test("graph view works with actual server200", async () => {
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
}); 
test("graph view works with actual server201", async () => {
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
}); 
test("graph view works with actual server202", async () => {
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
}); 
test("graph view works with actual server203", async () => {
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
}); 
test("graph view works with actual server204", async () => {
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
}); 
test("graph view works with actual server205", async () => {
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
}); 
test("graph view works with actual server206", async () => {
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
}); 
test("graph view works with actual server207", async () => {
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
}); 
test("graph view works with actual server208", async () => {
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
}); 
test("graph view works with actual server209", async () => {
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
}); 
test("graph view works with actual server210", async () => {
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
}); 
test("graph view works with actual server211", async () => {
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
}); 
test("graph view works with actual server212", async () => {
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
}); 
test("graph view works with actual server213", async () => {
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
}); 
test("graph view works with actual server214", async () => {
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
}); 
test("graph view works with actual server215", async () => {
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
}); 
test("graph view works with actual server216", async () => {
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
}); 
test("graph view works with actual server217", async () => {
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
}); 
test("graph view works with actual server218", async () => {
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
}); 
test("graph view works with actual server219", async () => {
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
}); 
test("graph view works with actual server220", async () => {
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
}); 
test("graph view works with actual server221", async () => {
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
}); 
test("graph view works with actual server222", async () => {
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
}); 
test("graph view works with actual server223", async () => {
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
}); 
test("graph view works with actual server224", async () => {
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
}); 
test("graph view works with actual server225", async () => {
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
}); 
test("graph view works with actual server226", async () => {
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
}); 
test("graph view works with actual server227", async () => {
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
}); 
test("graph view works with actual server228", async () => {
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
}); 
test("graph view works with actual server229", async () => {
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
}); 
test("graph view works with actual server230", async () => {
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
}); 
test("graph view works with actual server231", async () => {
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
}); 
test("graph view works with actual server232", async () => {
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
}); 
test("graph view works with actual server233", async () => {
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
}); 
test("graph view works with actual server234", async () => {
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
}); 
test("graph view works with actual server235", async () => {
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
}); 
test("graph view works with actual server236", async () => {
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
}); 
test("graph view works with actual server237", async () => {
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
}); 
test("graph view works with actual server238", async () => {
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
}); 
test("graph view works with actual server239", async () => {
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
}); 
test("graph view works with actual server240", async () => {
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
}); 
test("graph view works with actual server241", async () => {
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
}); 
test("graph view works with actual server242", async () => {
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
}); 
test("graph view works with actual server243", async () => {
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
}); 
test("graph view works with actual server244", async () => {
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
}); 
test("graph view works with actual server245", async () => {
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
}); 
test("graph view works with actual server246", async () => {
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
}); 
test("graph view works with actual server247", async () => {
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
}); 
test("graph view works with actual server248", async () => {
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
}); 
test("graph view works with actual server249", async () => {
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
}); 

var currentdate = new Date(); 
console.log(currentdate);

 