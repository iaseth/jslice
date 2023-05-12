import { isSlice } from "./isSlice";
import { isArray, isString } from "./utils";



export function getSliceValues (arr: any[], arg: string): number[]|false {
	if (!isArray(arr) || !isString(arg)) {
		return false;
	}

	if (!isSlice(arg)) {
		return false;
	}

	return [];
}
