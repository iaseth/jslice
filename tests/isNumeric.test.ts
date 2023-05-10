const { isNumeric } = require("../dist/utils");

test("isNumeric", () => {
	expect(isNumeric("0")).toBe(true);
	expect(isNumeric("20")).toBe(true);
	expect(isNumeric("0.5")).toBe(true);
	expect(isNumeric("5.60")).toBe(true);
	expect(isNumeric("-20.5")).toBe(true);

	expect(isNumeric("0 0")).toBe(false);
	expect(isNumeric("2 0")).toBe(false);
	expect(isNumeric("0. 5")).toBe(false);
	expect(isNumeric("5.6 0")).toBe(false);
	expect(isNumeric("-2 0.5")).toBe(false);

	expect(isNumeric()).toBe(false);
	expect(isNumeric(false)).toBe(false);
	expect(isNumeric(null)).toBe(false);
	expect(isNumeric(20)).toBe(false);
	expect(isNumeric(1.50)).toBe(false);
	expect(isNumeric(4/5)).toBe(false);
});
