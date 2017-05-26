// @flow
'use strict'

import { loopTimes } from '../'

// function loopFor(number, func) {
//     let arr = [] 
//     for (let i=0; i < number; i++) {
//         arr.push(func(i))
//     }
//     return arr
// }

it('loopTimes', () => {
    var x = {a:1}
    var res = loopTimes(8, i => ({ x:x, n:i }) )
    expect(res).toEqual([{"n": 0, "x": {"a": 1}}, {"n": 1, "x": {"a": 1}}, {"n": 2, "x": {"a": 1}}, {"n": 3, "x": {"a": 1}}, {"n": 4, "x": {"a": 1}}, {"n": 5, "x": {"a": 1}}, {"n": 6, "x": {"a": 1}}, {"n": 7, "x": {"a": 1}}])
})