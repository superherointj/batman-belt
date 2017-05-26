 // @flow
'use strict'

export function bitmaskArrayToDecimal(arr: Array<number>): number {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result = result | (1 << arr[i] - 1);
	};
	return result
}

export function bitmaskDecimalToArray(bitmaskInt: number): Array<number> {
	// To-Do: Refazer esta parte.
    if (bitmaskInt == 0) return [0]    
    var ar = []
    if (bitmaskInt & 128) ar.push(8)
    if (bitmaskInt & 64) ar.push(7)
    if (bitmaskInt & 32) ar.push(6)
    if (bitmaskInt & 16) ar.push(5)
    if (bitmaskInt & 8) ar.push(4)
    if (bitmaskInt & 4) ar.push(3)
    if (bitmaskInt & 2) ar.push(2)
    if (bitmaskInt & 1)	ar.push(1)    
    return ar
}