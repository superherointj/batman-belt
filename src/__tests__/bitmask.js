// @flow
'use strict'

import { bitmaskDecimalToArray, bitmaskArrayToDecimal } from '../'

describe('bitmaskDecimalToArray', () => {
    it('bitmaskDecimalToArray', () => {
        expect(bitmaskDecimalToArray(3)).toContain(1, 2)
        expect(bitmaskDecimalToArray(5)).toContain(1, 4)
    })
})

describe('bitmaskArrayToDecimal', () => {
    it('bitmaskArrayToDecimal', () => {
        expect(bitmaskArrayToDecimal([1,2])).toEqual(3)
        expect(bitmaskArrayToDecimal([1,4])).toEqual(9)
    })
})