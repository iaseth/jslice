const { toSliceInteger } = require("../dist/utils");

test("toSliceInteger", () => {
	const length = 100;

	expect(toSliceInteger("", 0, length)).toStrictEqual(0);
});
