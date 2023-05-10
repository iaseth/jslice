const { isNumeric } = require("../dist/utils");

test("isNumeric", () => {
	expect(isNumeric("0")).toStrictEqual(true);
});
