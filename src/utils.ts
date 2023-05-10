


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

	let idx: number = defaultValue;
	if (str.length > 0) {
		let temp = parseFloat(str);
		if (Math.abs(temp) > 0 && Math.abs(temp) < 1) {
			temp = length * temp; // convert values between -1 and 1
		}

		temp = Math.floor(temp); // convert to integer
		while (temp < 0) {
			temp += length; // convert to positive integer
		}
		idx = temp % length;
	}

	return idx;
}

export function isValidSliceIndex (val: string): boolean {
	return false;
}
