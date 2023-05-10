const { isString } = require("../dist/utils");

test("isString", () => {
	expect(isString("")).toBe(true);
	expect(isString("foo")).toBe(true);

	expect(isString(null)).toBe(false);
	expect(isString(false)).toBe(false);
	expect(isString(20.5)).toBe(false);
	expect(isString({})).toBe(false);
	expect(isString([])).toBe(false);
});
