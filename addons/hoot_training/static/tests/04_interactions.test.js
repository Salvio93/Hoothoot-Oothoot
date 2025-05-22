import { expect, test } from "@odoo/hoot";
import { animationFrame } from "@odoo/hoot-mock";
import { mountWithCleanup } from "@web/../tests/web_test_helpers";
import { click, press, edit } from "@odoo/hoot-dom";
import { Counter } from "../src/counter";

/**
 * @hint `click()` ("@odoo/hoot-dom")
 */
test("counter is incremented on clicks", async () => {
    await mountWithCleanup(Counter);

    expect("input").toHaveValue("0");

    click("button");
    await animationFrame();

    expect("input").toHaveValue("1");
});

/**
 * @hint `press()` ("@odoo/hoot-dom")
 */
test("counter is incremented on 'Enter' presses", async () => {
    await mountWithCleanup(Counter);
    expect("input").toHaveValue("0");
    press("tab");
    await animationFrame();

    press("enter");
    await animationFrame();
    expect("input").toHaveValue("1");
});

/**
 * @hint check the name of the test
 * @hint `click()` and `edit()` ("@odoo/hoot-dom")
 * @hint `expect().toHaveValue()`
 */
test("counter works with addition of input", async () => {
    await mountWithCleanup(Counter);

    expect("input").toHaveValue("0");
    await click("input");

    await edit(17);

    expect("input").toHaveValue("17");

    click("button");
    await animationFrame();

    expect("input").toHaveValue("18");
});
