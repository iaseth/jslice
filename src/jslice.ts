import { isNumeric, isString, toSliceInteger } from "./utils";



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

export function slice (arr: any[], arg: string): any[] {
	if (!isSlice(arg)) {
		return arr; // return full array if arg is not a valud slice string
	}

	if (arr.length === 0) {
		return arr;
	}

	arg = arg.trim();
	const parts = arg.split(":");
	const [x, y="", z=""]: string[] = parts;

	let start: number = toSliceInteger(x, 0, arr.length);
	let end: number = toSliceInteger(y, arr.length, arr.length);
	let step: number = toSliceInteger(z, 1, arr.length);

	if (step < 0) {
		[start, end] = [end, start]
		step *= -1;
	}

	const neo = [];
	for (let i=0; i<end; i+=step) {
		neo.push(arr[i]);
	}
	return neo;
}
