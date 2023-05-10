const { isNumber } = require("../dist/utils");

test("isNumber", () => {
	expect(isNumber(0)).toStrictEqual(true);
});
