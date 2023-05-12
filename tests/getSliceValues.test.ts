const { getSliceValues } = require("../dist/getSliceValues");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("getSliceValues with bad slice strings", () => {
	expect(getSliceValues(arr, ":1:2.5")).toBe(false);
	expect(getSliceValues(arr, ":2.5")).toBe(false);

	expect(getSliceValues(arr, "foo:-20")).toBe(false);
	expect(getSliceValues(arr, "foo:bar")).toBe(false);
	expect(getSliceValues(arr, "foo:x:")).toBe(false);
	expect(getSliceValues(arr, "5:x:x")).toBe(false);

	expect(getSliceValues(arr, "20")).toBe(false);
	expect(getSliceValues(arr, "2010")).toBe(false);
	expect(getSliceValues(arr, "10")).toBe(false);
	expect(getSliceValues(arr, "-5")).toBe(false);
	expect(getSliceValues(arr, "-20")).toBe(false);

	expect(getSliceValues(arr, "1:x:2:3")).toBe(false);
	expect(getSliceValues(arr, "1:2::x")).toBe(false);
	expect(getSliceValues(arr, "1:-2::-5")).toBe(false);
	expect(getSliceValues(arr, "1:2:3:")).toBe(false);

	expect(getSliceValues(arr, 0)).toBe(false);
	expect(getSliceValues(arr, false)).toBe(false);
	expect(getSliceValues(arr, null)).toBe(false);
	expect(getSliceValues(arr, "foo")).toBe(false);
	expect(getSliceValues(arr, "bar")).toBe(false);
	expect(getSliceValues(arr, "x")).toBe(false);
	expect(getSliceValues(arr, [])).toBe(false);
	expect(getSliceValues(arr, {})).toBe(false);
});
