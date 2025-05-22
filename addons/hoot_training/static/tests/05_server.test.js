import { expect, test } from "@odoo/hoot";
import { click, edit, queryAllTexts } from "@odoo/hoot-dom";
import { animationFrame } from "@odoo/hoot-mock";
import {
    getService,
    makeMockEnv,
    mountWithCleanup,
    patchWithCleanup,
    onRpc,
} from "@web/../tests/web_test_helpers";
import { ServerCalculator } from "../src/server_calculator";

function mockAdd(...values) {
    return values.reduce((a, b) => a + b, 0);
}

function mockMultiply(...values) {
    return values.reduce((a, b) => a * b, 1);
}

/**
 * @hint `onRpc()` ("@web/../tests/web_test_helpers")
 * @hint `expect().resolves.toBe()`
 */
test("test ORM service", async () => {
    await makeMockEnv();
    const orm = getService("orm");

    onRpc("multiply", ({ args }) => mockMultiply(...args));   //onRpc("multiply", callback) intercepts any RPC request for the method "multiply".

    await expect(orm.call("ir.calculator", "multiply", [1, 2, 3, 4])).resolves.toBe(1 * 2 * 3 * 4);
});

/**
 * @hint `onRpc()` can handle both ORM calls and generic routes
 */
test("server calculator can add and multiply", async () => {
    await mountWithCleanup(ServerCalculator);

    onRpc("/calculator/add", async (request) => {
        const args = await request.json();
        return mockAdd(...args);
    });

    onRpc("multiply", ({ args }) => {
        return mockMultiply(...args);
    });
    click("input:first");
    await animationFrame();

    edit(10);
    await animationFrame();

    click("input:last");
    await animationFrame();

    edit(5);
    await animationFrame();


    click("button:contains(+)");
    await animationFrame();

    expect(queryAllTexts(".results li")).toEqual(["15"]);

    click("button:contains(*)");
    await animationFrame();

    expect(queryAllTexts(".results li")).toEqual(["15", "50"]);
});
