const { slice } = require("../dist");

test("slice", () => {
	const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	expect(slice(ten, "")).toStrictEqual(ten);
	expect(slice([], "")).toStrictEqual([]);
});
