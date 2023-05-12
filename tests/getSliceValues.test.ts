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

test("getSliceValues with empty arrays", () => {
	expect(getSliceValues([], ":2")).toBe(false);
	expect(getSliceValues([], "1:")).toBe(false);
	expect(getSliceValues([], "2:5")).toBe(false);
	expect(getSliceValues([], "1:20")).toBe(false);
	expect(getSliceValues([], "1:-5")).toBe(false);
});

test("getSliceValues with integer values", () => {
	expect(getSliceValues(arr, "1:2")).toStrictEqual([1, 2, 1]);
	expect(getSliceValues(arr, ":2")).toStrictEqual([0, 2, 1]);
	expect(getSliceValues(arr, "1:")).toStrictEqual([1, arr.length, 1]);
	expect(getSliceValues(arr, "-1:5")).toStrictEqual([arr.length-1, 5, 1]);
	expect(getSliceValues(arr, ":")).toStrictEqual([0, arr.length, 1]);

	expect(getSliceValues(arr, "1:2:2")).toStrictEqual([1, 2, 2]);
	expect(getSliceValues(arr, ":2:4")).toStrictEqual([0, 2, 4]);
	expect(getSliceValues(arr, "1::5")).toStrictEqual([1, arr.length, 5]);
	expect(getSliceValues(arr, "-1:5:1")).toStrictEqual([arr.length-1, 5, 1]);
	expect(getSliceValues(arr, "::")).toStrictEqual([0, arr.length, 1]);
});

const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("getSliceValues with out-of-range start values", () => {
	expect(getSliceValues(ten, "15:")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, "200:")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, "-20:")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, "1000:")).toStrictEqual([0, 10, 1]);

	expect(getSliceValues(ten, "8.5:")).toStrictEqual(false);
});

test("getSliceValues with out-of-range end values", () => {
	expect(getSliceValues(ten, ":15")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, ":200")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, ":-20")).toStrictEqual([0, 10, 1]);
	expect(getSliceValues(ten, ":1000")).toStrictEqual([0, 10, 1]);

	expect(getSliceValues(ten, ":8.5")).toStrictEqual(false);
});
