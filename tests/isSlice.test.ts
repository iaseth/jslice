const { isSlice } = require("../dist");

test("isSlice", () => {
	expect(isSlice("20:")).toBe(true);
	expect(isSlice("20:10")).toBe(true);
	expect(isSlice(":10")).toBe(true);
	expect(isSlice("-5:")).toBe(true);
	expect(isSlice(":-20")).toBe(true);

	expect(isSlice(":1:2.5")).toBe(false);
	expect(isSlice(":2.5")).toBe(false);

	expect(isSlice("foo:-20")).toBe(false);
	expect(isSlice("foo:bar")).toBe(false);
	expect(isSlice("foo:x:")).toBe(false);
	expect(isSlice("5:x:x")).toBe(false);

	expect(isSlice("20")).toBe(false);
	expect(isSlice("2010")).toBe(false);
	expect(isSlice("10")).toBe(false);
	expect(isSlice("-5")).toBe(false);
	expect(isSlice("-20")).toBe(false);

	expect(isSlice("1:x:2:3")).toBe(false);
	expect(isSlice("1:2::x")).toBe(false);
	expect(isSlice("1:-2::-5")).toBe(false);
	expect(isSlice("1:2:3:")).toBe(false);

	expect(isSlice(0)).toBe(false);
	expect(isSlice(false)).toBe(false);
	expect(isSlice(null)).toBe(false);
	expect(isSlice("foo")).toBe(false);
	expect(isSlice("bar")).toBe(false);
	expect(isSlice("x")).toBe(false);
	expect(isSlice([])).toBe(false);
	expect(isSlice({})).toBe(false);
});
