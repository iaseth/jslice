const { isValidSliceIndex } = require("../dist/utils");

test("isValidSliceIndex", () => {
	expect(isValidSliceIndex("0")).toBe(false);
});
