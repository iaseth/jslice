import { isNumeric, isString } from "./utils";



export function isSlice (arg: string): boolean {
	if (!isString(arg)) {
		return false;
	}

	arg = arg.trim();
	const parts = arg.split(":");
	if (parts.length !== 2 && parts.length !== 3) {
		return false;
	}

	if (parts.length === 2) {
		parts.push("1");
	}

	for (const part of parts) {
		if (part.length === 0) {
			continue; // empty string is interpreted as default value
		}

		if (!isNumeric(part)) {
			return false;
		}
		const n = parseFloat(part);
		if (Number.isInteger(n)) continue; // any integer is valid

		if (Math.abs(n) >= 1) {
			// any float value has to be between -1 and 1
			return false;
		}
	}

	return true;
}
