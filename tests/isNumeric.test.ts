const { isNumeric } = require("../dist/utils");

test("isNumeric", () => {
	expect(isNumeric("0")).toStrictEqual(true);
	expect(isNumeric("20")).toStrictEqual(true);
	expect(isNumeric("0.5")).toStrictEqual(true);
	expect(isNumeric("5.60")).toStrictEqual(true);
	expect(isNumeric("-20.5")).toStrictEqual(true);

	expect(isNumeric("0 0")).toStrictEqual(false);
	expect(isNumeric("2 0")).toStrictEqual(false);
	expect(isNumeric("0. 5")).toStrictEqual(false);
	expect(isNumeric("5.6 0")).toStrictEqual(false);
	expect(isNumeric("-2 0.5")).toStrictEqual(false);

	expect(isNumeric()).toStrictEqual(false);
	expect(isNumeric(false)).toStrictEqual(false);
	expect(isNumeric(null)).toStrictEqual(false);
	expect(isNumeric(20)).toStrictEqual(false);
	expect(isNumeric(1.50)).toStrictEqual(false);
	expect(isNumeric(4/5)).toStrictEqual(false);
});
