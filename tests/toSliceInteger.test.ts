const { toSliceInteger } = require("../dist/utils");

test("toSliceInteger", () => {
	const length = 100;

	expect(toSliceInteger("", 0, length)).toBe(0);
	expect(toSliceInteger("0", 10, length)).toBe(0);
	expect(toSliceInteger("0.0", 20, length)).toBe(0);
	expect(toSliceInteger("0.001", 20, length)).toBe(0);

	expect(toSliceInteger("-1", 0, length)).toBe(length-1);
	expect(toSliceInteger("-1.0", 0, length)).toBe(length-1);
	expect(toSliceInteger("0.5", 0, 10)).toBe(5);
	expect(toSliceInteger("0.1", 0, 10)).toBe(1);

	expect(toSliceInteger("foo", 0, length)).toBe(0);
	expect(toSliceInteger("x", 0, length)).toBe(0);

	expect(toSliceInteger("0.25", 0, 96)).toBe(24);
	expect(toSliceInteger("0.5", 0, 96)).toBe(48);
	expect(toSliceInteger("0.500", 0, 96)).toBe(48);
	expect(toSliceInteger("0.75", 0, 96)).toBe(72);

	expect(toSliceInteger("-0.25", 0, 96)).toBe(72);
	expect(toSliceInteger("-0.5", 0, 96)).toBe(48);
	expect(toSliceInteger("-0.500", 0, 96)).toBe(48);
	expect(toSliceInteger("-0.75", 0, 96)).toBe(24);

	expect(toSliceInteger("0.1", 11, 96)).toBe(9);
	expect(toSliceInteger("0.2", 11, 96)).toBe(19);
	expect(toSliceInteger("0.3", 11, 96)).toBe(28);
	expect(toSliceInteger("0.4", 11, 96)).toBe(38);
	expect(toSliceInteger("0.5", 11, 96)).toBe(48);
	expect(toSliceInteger("0.6", 11, 96)).toBe(57);
	expect(toSliceInteger("0.7", 11, 96)).toBe(67);
	expect(toSliceInteger("0.8", 11, 96)).toBe(76);
	expect(toSliceInteger("0.9", 11, 96)).toBe(86);
	expect(toSliceInteger("1.0", 11, 96)).toBe(96);

	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);

	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);
	expect(toSliceInteger("", 11, 96)).toBe(11);

	expect(toSliceInteger(" ", 72, length)).toBe(72);
	expect(toSliceInteger("f", 72, length)).toBe(72);
	expect(toSliceInteger("x ", 72, length)).toBe(72);
	expect(toSliceInteger("7  0", 72, length)).toBe(72);
	expect(toSliceInteger("7  ", 72, length)).toBe(72);
	expect(toSliceInteger("  0", 72, length)).toBe(72);

	expect(toSliceInteger(false, 72, length)).toBe(72);
	expect(toSliceInteger(true, 72, length)).toBe(72);
	expect(toSliceInteger(null, 72, length)).toBe(72);
	expect(toSliceInteger(undefined, 72, length)).toBe(72);
	expect(toSliceInteger([], 72, length)).toBe(72);
	expect(toSliceInteger({}, 72, length)).toBe(72);
});
