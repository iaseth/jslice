const { isString } = require("../dist/utils");

test("isString", () => {
	expect(isString("")).toStrictEqual(true);
});
