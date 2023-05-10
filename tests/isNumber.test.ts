const { isNumber } = require("../dist/utils");

test("isNumber", () => {
	expect(isNumber(0)).toBe(true);
	expect(isNumber(1.2)).toBe(true);
	expect(isNumber(-40)).toBe(true);
	expect(isNumber(200.50)).toBe(true);

	expect(isNumber("foo")).toBe(false);
	expect(isNumber(false)).toBe(false);
	expect(isNumber(null)).toBe(false);
	expect(isNumber({})).toBe(false);
});
