import { expect, test } from "@odoo/hoot";
import { remove } from "../src/functions";

/**
 * @hint missing import ok
 * @hint look at the test result in the UI
 */
test.todo("remove", () => {
    expect(remove(1, 2)).toBe(-1);
    expect(remove(0.3, 0.2)).not.toBe(0.1); // thx floating points   ps: works with 0.1 - 0.2
    expect(remove("12", "2")).toBe(10);
    expect(() => remove("12", -2)).not.toThrow(new Error("Cannot math on strings"));  //js ....
});
