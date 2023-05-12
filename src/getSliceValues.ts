import { isSlice } from "./isSlice";
import { isArray, isString, toSliceInteger } from "./utils";



export function getSliceValues (arr: any[], arg: string): number[]|false {
	if (!isArray(arr) || !isString(arg)) {
		return false;
	}

	if (!isSlice(arg)) {
		return false;
	}

	if (arr.length === 0) {
		return false;
	}

	arg = arg.trim();
	const parts = arg.split(":");
	const [x, y, z=""]: string[] = parts;

	const start: number = toSliceInteger(x, 0, arr.length);
	const end: number = toSliceInteger(y, arr.length, arr.length);
	const step: number = toSliceInteger(z, 1, arr.length);

	return [start, end, step];
}
