import { isSlice } from "./isSlice";
import { toSliceInteger } from "./utils";



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

	const start: number = toSliceInteger(x, 0, arr.length);
	const end: number = toSliceInteger(y, arr.length, arr.length);
	if (start > end) {
		return [];
	}

	let step: number = toSliceInteger(z, 1, arr.length);
	if (step <= 0) {
		return [];
	} else if (step === 1) {
		return arr.slice(start, end);
	}

	const neo = [];
	for (let i=start; i<end; i+=step) {
		neo.push(arr[i]);
	}
	return neo;
}
