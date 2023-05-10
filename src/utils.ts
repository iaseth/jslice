


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


export function toSliceIndex (val: string): number {
	return 0;
}

export function isValidSliceIndex (val: string): boolean {
	return false;
}
