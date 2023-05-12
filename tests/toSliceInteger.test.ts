const { toSliceInteger } = require("../dist/utils");

test("toSliceInteger with common values", () => {
	expect(toSliceInteger("", 0, 100)).toBe(0);
	expect(toSliceInteger("0", 10, 100)).toBe(0);
	expect(toSliceInteger("0.0", 20, 100)).toBe(0);
	expect(toSliceInteger("0.001", 20, 100)).toBe(0);

	expect(toSliceInteger("-1", 0, 100)).toBe(99);
	expect(toSliceInteger("-1.0", 0, 100)).toBe(99);
	expect(toSliceInteger("0.5", 0, 10)).toBe(5);
	expect(toSliceInteger("0.1", 0, 10)).toBe(1);

	expect(toSliceInteger("foo", 0, 100)).toBe(0);
	expect(toSliceInteger("x", 0, 100)).toBe(0);

	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);

	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
});


test("toSliceInteger() with positive integer values", () => {
	expect(toSliceInteger("0", 13, 240)).toBe(0);
	expect(toSliceInteger("20", 13, 240)).toBe(20);
	expect(toSliceInteger("59", 13, 240)).toBe(59);
	expect(toSliceInteger("1000", 13, 240)).toBe(13);

	expect(toSliceInteger("5", 13, 240)).toBe(5);
	expect(toSliceInteger("200", 13, 240)).toBe(200);
	expect(toSliceInteger("720", 13, 240)).toBe(13);
	expect(toSliceInteger("1600", 13, 240)).toBe(13);
});


test("toSliceInteger() with negative integer values", () => {
	expect(toSliceInteger("0", 13, 240)).toBe(0);
	expect(toSliceInteger("-20", 13, 240)).toBe(220);
	expect(toSliceInteger("-59", 13, 240)).toBe(181);
	expect(toSliceInteger("-1000", 13, 240)).toBe(13);

	expect(toSliceInteger("-5", 13, 240)).toBe(235);
	expect(toSliceInteger("-200", 13, 240)).toBe(40);
	expect(toSliceInteger("-720", 13, 240)).toBe(13);
	expect(toSliceInteger("-1600", 13, 240)).toBe(13);
});


test("toSliceInteger() with bad string values", () => {
	expect(toSliceInteger("", 72, 320)).toBe(72);
	expect(toSliceInteger(" ", 72, 320)).toBe(72);
	expect(toSliceInteger("f", 72, 320)).toBe(72);
	expect(toSliceInteger("x ", 72, 320)).toBe(72);
	expect(toSliceInteger("7  0", 72, 320)).toBe(72);
	expect(toSliceInteger("7  ", 72, 320)).toBe(72);
	expect(toSliceInteger("  0", 72, 320)).toBe(72);
});


test("toSliceInteger() with floating-point values", () => {
	expect(toSliceInteger("0.25", 0, 96)).toBe(24);
	expect(toSliceInteger("0.5", 0, 96)).toBe(48);
	expect(toSliceInteger("0.500", 0, 96)).toBe(48);
	expect(toSliceInteger("0.75", 0, 96)).toBe(72);

	expect(toSliceInteger("0.1", 11, 96)).toBe(9);
	expect(toSliceInteger("0.2", 11, 96)).toBe(19);
	expect(toSliceInteger("0.3", 11, 96)).toBe(28);
	expect(toSliceInteger("0.4", 11, 96)).toBe(38);
	expect(toSliceInteger("0.5", 11, 96)).toBe(48);

	expect(toSliceInteger("0.6", 11, 96)).toBe(57);
	expect(toSliceInteger("0.7", 11, 96)).toBe(67);
	expect(toSliceInteger("0.8", 11, 96)).toBe(76);
	expect(toSliceInteger("0.9", 11, 96)).toBe(86);
	expect(toSliceInteger("0.99", 11, 96)).toBe(95);
});


test("toSliceInteger() with negative values", () => {
	expect(toSliceInteger("-0.25", 0, 96)).toBe(72);
	expect(toSliceInteger("-0.5", 0, 96)).toBe(48);
	expect(toSliceInteger("-0.500", 0, 96)).toBe(48);
	expect(toSliceInteger("-0.75", 0, 96)).toBe(24);
});


test("toSliceInteger() with non-string values", () => {
	expect(toSliceInteger(5, 11, 96)).toBe(11);
	expect(toSliceInteger(20.45, 11, 96)).toBe(11);
	expect(toSliceInteger([], 11, 96)).toBe(11);
	expect(toSliceInteger({}, 11, 96)).toBe(11);

	expect(toSliceInteger(false, 11, 96)).toBe(11);
	expect(toSliceInteger(true, 11, 96)).toBe(11);
	expect(toSliceInteger(null, 11, 96)).toBe(11);
	expect(toSliceInteger(undefined, 11, 96)).toBe(11);
});
