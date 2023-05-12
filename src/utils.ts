


export function isArray (val: any): boolean {
	// copied from https://github.com/iaseth/whichtype
	return Array.isArray(val);
}

export function isNumber (val: any): boolean {
	// copied from https://github.com/iaseth/whichtype
	return typeof val === 'number';
}

export function isString (val: any): boolean {
	// copied from https://github.com/iaseth/whichtype
	return typeof val === 'string';
}


export function isNumeric (str: any): boolean {
	if (!isString(str)) {
		return false;
	}
	return !isNaN(str) && !isNaN(parseFloat(str));
}


export function toSliceInteger (str: string, defaultValue: number, length: number): number {
	if (!isNumeric(str)) {
		return defaultValue;
	}

	if (str !== str.trim()) {
		// reject strings with whitespace
		return defaultValue;
	}

	if (str.length === 0) {
		return defaultValue;
	}

	let idx = parseFloat(str);
	if (Math.abs(idx) > length) {
		return defaultValue;
	}

	if (Math.abs(idx) < 1) {
		idx = length * idx; // convert values between -1 and 1
	}

	idx = Math.floor(idx); // convert to integer
	if (idx < 0) {
		idx += length; // convert to positive integer
	}

	return idx;
}

export function isValidSliceIndex (val: string): boolean {
	return false;
}
