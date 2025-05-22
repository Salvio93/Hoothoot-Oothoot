import {beforeEach, describe, expect, test } from "@odoo/hoot";
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
import { click, edit, drag, press } from "@odoo/hoot-dom";
import { advanceTime, animationFrame } from "@odoo/hoot-mock";

import { contains, mountWithCleanup, sortableDrag } from "@web/../tests/web_test_helpers";
import { Component, onWillDestroy, xml } from "@odoo/owl";



import { defineServerRecords, disableMockServer } from "@web/../tests/_framework/mock_server/mock_server";
import { mountComponent } from "@web/env";
import { WebClient } from "@web/webclient/webclient";
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


test("crm tour to hoot", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    disableMockServer();
    await mountWithCleanup(WebClient);
    await getService("action").doAction(1);

    // Open CRM 
    await contains('.o-dropdown:first-child',{timeout:2000}).click();
    await contains('.o_app:nth-child(5)',{timeout:2000}).click();
    

    // Wait for kanban view
    
    //expect(".o_opportunity_kanban").toHaveCount();

    // Click "Create" on the Kanban
    await contains('.o-kanban-button-new',{timeout:1000}).click();
    //await contains('.o_opportunity_kanban .o-kanban-button-new').click();
    

    // Fill w partner
    await animationFrame();
    await contains(".o_kanban_quick_create .o_field_widget[name='partner_id'] input" ).click();
    await animationFrame();

    await press("Enter",{timeout:2000});
    await press("Enter",{timeout:2000});

    //await contains(".o_kanban_cancel").click();

    
    // Drag and drop to column
    await contains(".o_opportunity_kanban .o_kanban_group:nth-child(2)",{timeout:2000}) //.o_kanban_record:last-of-type
    .dragAndDrop(".o_opportunity_kanban .o_kanban_group:eq(2)",{timeout:2000});



    await animationFrame();



    // Open activity popup
    await contains(".o_opportunity_kanban .o_kanban_record .o-mail-ActivityButton",{timeout:2000}).click();

    // Schedule an activity
    await contains(".o-mail-ActivityListPopover button:contains(Schedule an activity)",{timeout:1000}).click();

    // Confirm scheduling


    await contains('.modal-footer button[name="action_schedule_activities"]',{timeout:2000}).click();
    //await contains('.btn-close',{timeout:1000}).click();

    await press("Escape",{timeout:2000});
    await animationFrame();


    // Drag to Won colomn
    await contains(
        ".o_opportunity_kanban .o_kanban_record:last-of-type",{timeout:2000}).dragAndDrop
        (".o_opportunity_kanban .o_kanban_group:eq(3)",{timeout:2000}
    );

    // Click into opportunity ??
    await contains(".o_kanban_record:last-of-type",{timeout:2000}).click();
    expect(".o_opportunity_kanban").toHaveCount();

    // Check status bar
    //expect(".o_lead_opportunity_form .o_statusbar_status").toHaveCount();

    // Go back via breadcrumb
    //await contains(".breadcrumb-item:not(.active):last").click();
});


test("crm tour to hoot divided1", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    disableMockServer();
    await mountWithCleanup(WebClient);
    await getService("action").doAction(1);

    // Open CRM 
    await contains('.o-dropdown:first-child',{timeout:2000}).click();
    await contains('.o_app:nth-child(5)',{timeout:2000}).click();
    

    // Wait for kanban view
    
    //expect(".o_opportunity_kanban").toHaveCount();

    // Click "Create" on the Kanban
    await contains('.o-kanban-button-new',{timeout:1000}).click();
    //await contains('.o_opportunity_kanban .o-kanban-button-new').click();
    

    // Fill w partner
    await animationFrame();
    await contains(".o_kanban_quick_create .o_field_widget[name='partner_id'] input" ).click();
    await animationFrame();

    await press("Enter",{timeout:2000});
    await press("Enter",{timeout:2000});
    expect(".o_opportunity_kanban").toHaveCount();

    //await contains(".o_kanban_cancel").click();

})
test("crm tour to hoot divided2", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    disableMockServer();
    await mountWithCleanup(WebClient);
    await getService("action").doAction(1);

    // Open CRM 
    await contains('.o-dropdown:first-child',{timeout:2000}).click();
    await contains('.o_app:nth-child(5)',{timeout:2000}).click();
    




    // Click "Create" on the Kanban
    await contains('.o-kanban-button-new',{timeout:1000}).click();
    

    // Fill w partner
    await animationFrame();
    await contains(".o_kanban_quick_create .o_field_widget[name='partner_id'] input" ).click();
    await animationFrame();

    await press("Enter",{timeout:2000});
    await press("Enter",{timeout:2000});

    
    // Drag and drop to column
    await contains(".o_opportunity_kanban .o_kanban_group:nth-child(2)",{timeout:2000}) 
    .dragAndDrop(".o_opportunity_kanban .o_kanban_group:eq(2)",{timeout:20000});



    await animationFrame();
    expect(".o_opportunity_kanban").toHaveCount();

    await press("Escape",{timeout:2000});
    await animationFrame();


    // Click "Create" on the Kanban
    await contains('.o-kanban-button-new',{timeout:1000}).click();
    

    // Fill w partner
    await animationFrame();
    await contains(".o_kanban_quick_create .o_field_widget[name='partner_id'] input" ).click();
    await animationFrame();

    await press("Enter",{timeout:2000});
    await press("Enter",{timeout:2000});


    // Drag to Won colomn
    await contains(
        ".o_opportunity_kanban .o_kanban_record:last-of-type",{timeout:2000}).dragAndDrop
        (".o_opportunity_kanban .o_kanban_group:eq(3)",{timeout:2000}
    );

    // Click into opportunity ??
    await contains(".o_kanban_record:last-of-type",{timeout:2000}).click();
    expect(".o_opportunity_kanban").toHaveCount();

})
test("crm tour to hoot divided3", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    disableMockServer();
    await mountWithCleanup(WebClient);
    await getService("action").doAction(1);

    // Open CRM 
    await contains('.o-dropdown:first-child',{timeout:2000}).click();
    await contains('.o_app:nth-child(5)',{timeout:2000}).click();
    


    // Open activity popup
    await contains(".o_opportunity_kanban .o_kanban_record .o-mail-ActivityButton",{timeout:2000}).click();

    // Schedule an activity
    await contains(".o-mail-ActivityListPopover button:contains(Schedule an activity)",{timeout:1000}).click();

    // Confirm scheduling


    await contains('.modal-footer button[name="action_schedule_activities"]',{timeout:2000}).click();
    //await contains('.btn-close',{timeout:1000}).click();

    await press("Escape",{timeout:2000});
    await animationFrame();
    expect(".o_opportunity_kanban").toHaveCount();

})




test("crm tour to hoot without webclient", async () => {
    defineServerRecords(payload);
    await makeMockEnv();
    disableMockServer();

    await mountView({ 
            type: "kanban",
            resModel: "crm.lead",

        });



    // Wait for kanban view
    
    expect(".o_opportunity_kanban").toHaveCount();

    // Click "Create" on the Kanban
    await contains('.o_opportunity_kanban .o-kanban-button-new',{timeout:2000}).click();
    

    // Fill w partner
    await contains(".o_kanban_quick_create .o_field_widget[name='partner_id'] input" ,{timeout:2000}).click();

    await press("Enter",{timeout:2000});
    await press("Enter",{timeout:2000});

    await animationFrame();

    //await contains(".o_kanban_cancel").click();

    
    // Drag and drop to column
    await contains(".o_opportunity_kanban .o_kanban_group:nth-child(2)",{timeout:2000}) 
    .dragAndDrop(".o_opportunity_kanban .o_kanban_group:eq(2)",{timeout:2000});


    await animationFrame();

    // Open activity popup
    await contains(".o_opportunity_kanban .o_kanban_record .o-mail-ActivityButton",{timeout:2000}).click();

    // Schedule an activity
    await contains(".o-mail-ActivityListPopover button:contains(Schedule an activity)",{timeout:2000}).click();

    // Confirm scheduling
    await contains('.modal-footer button[name="action_schedule_activities"]',{timeout:2000}).click();

    await press("Escape",{timeout:2000});
    await animationFrame();

    // Drag to Won colomn
    await contains(
        ".o_opportunity_kanban .o_kanban_record:last-of-type",{timeout:2000}).dragAndDrop
        (".o_opportunity_kanban .o_kanban_group:eq(3)",{timeout:2000}
    );
    await animationFrame();

    // Click into opportunity ??
    await contains(".o_kanban_record:last-of-type",{timeout:2000}).click();

});
