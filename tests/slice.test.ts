const { slice } = require("../dist");

const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


test("slice", () => {
	//
});


test("slice with invalid slice strings", () => {
	expect(slice(ten, "")).toStrictEqual(ten);
	expect(slice(ten, "foo")).toStrictEqual(ten);
	expect(slice(ten, "x")).toStrictEqual(ten);
	expect(slice(ten, ":foo")).toStrictEqual(ten);
	expect(slice(ten, "bar:")).toStrictEqual(ten);

	expect(slice([], "")).toStrictEqual([]);
});


test("slice with just a start value", () => {
	expect(slice(ten, "1:")).toStrictEqual(ten.slice(1));
	expect(slice(ten, "2:")).toStrictEqual(ten.slice(2));
	expect(slice(ten, "4:")).toStrictEqual(ten.slice(4));
});


test("slice with just an end value", () => {
	expect(slice(ten, ":1")).toStrictEqual(ten.slice(0, 1));
	expect(slice(ten, ":2")).toStrictEqual(ten.slice(0, 2));
	expect(slice(ten, ":4")).toStrictEqual(ten.slice(0, 4));
});


test("slice with a start and end value", () => {
	expect(slice(ten, "1:4")).toStrictEqual(ten.slice(1, 4));
	expect(slice(ten, "2:5")).toStrictEqual(ten.slice(2, 5));
	expect(slice(ten, "4:8")).toStrictEqual(ten.slice(4, 8));

	expect(slice(ten, "7:2")).toStrictEqual([]);
	expect(slice(ten, "9:1")).toStrictEqual([]);
	expect(slice(ten, "3:0")).toStrictEqual([]);
});


test("slice with a negative start value", () => {
	expect(slice(ten, "-1:")).toStrictEqual(ten.slice(9));
	expect(slice(ten, "-2:")).toStrictEqual(ten.slice(8));
	expect(slice(ten, "-4:")).toStrictEqual(ten.slice(6));

	expect(slice(ten, "-1:")).toStrictEqual(ten.slice(-1));
	expect(slice(ten, "-2:")).toStrictEqual(ten.slice(-2));
	expect(slice(ten, "-4:")).toStrictEqual(ten.slice(-4));
});


test("slice with a negative end value", () => {
	expect(slice(ten, ":-1")).toStrictEqual(ten.slice(0, 9));
	expect(slice(ten, ":-2")).toStrictEqual(ten.slice(0, 8));
	expect(slice(ten, ":-4")).toStrictEqual(ten.slice(0, 6));

	expect(slice(ten, ":-1")).toStrictEqual(ten.slice(0, -1));
	expect(slice(ten, ":-2")).toStrictEqual(ten.slice(0, -2));
	expect(slice(ten, ":-4")).toStrictEqual(ten.slice(0, -4));
});


test("slice with a start and end value", () => {
	expect(slice(ten, "-7:-4")).toStrictEqual(ten.slice(-7, -4));
	expect(slice(ten, "-9:-5")).toStrictEqual(ten.slice(-9, -5));
	expect(slice(ten, "-9:-8")).toStrictEqual(ten.slice(-9, -8));
});
