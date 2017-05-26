 // @flow
'use strict'

// To-Do: Testar fields com array. como tratar isso.

// Retornar novo objeto.
// https://www.npmjs.com/package/deep-equal

//import {merge} from 'lodash-es'

// To-Do: Migrar funções de objeto para Lodash.
// _.set(obj, 'https://t.co/4EAw1FGzYy.destination', value) 
// _.get(deepObject, 'amswer.to.the.ultimate.question[0].f.life.the.universe.and.everything', 'defaultValue')

// type Identity = <T>(x: T) => T;

//export * from './execPromise' // NODE ONLY

export { bitmaskArrayToDecimal, bitmaskDecimalToArray } from './bitmask'

export function loopTimes(number: number, func: Function): any[] {
    let arr = []
    for (let i=0; i < number; i++) {
        arr.push(func(i))
    }
    return arr
}

export let ObjectArrayFieldToMasterKey = (arrObject: Object[], field: any) => {
    //console.log('ObjectArrayFieldToMasterKey => arrObject',arrObject)
    //let arr = Array.isArray(arrObject) ? arrObject : [arrObject]
    let obj = {}
    arrObject.forEach(item => obj[item[field]] = item )
    return obj
}
//console.log( ObjectArrayFieldToMasterKey(dataModels, 'name') )

export let fieldsArrToValue = (obj: any, fieldsArr: any[]) => {
    let o = obj
    //let arr = Array.isArray(fieldsArr) ? fieldsArr : [fieldsArr]    
    //if (Array.isArray(fieldsArr)) {    
        fieldsArr.forEach(field => o = o[field] )
    //} else {
    //    o = fieldsArr == '' ? o : o[fieldsArr]
    //}
    return o
}
//console.log('fieldsArrToValue: ', fieldsArrToValue(dataModels[0], 'fields') )

export let buildObjectFromArray = (fieldsArr: string[], value: any) => {
    let obj = {}
    let next = obj
    if (Array.isArray(fieldsArr)) {
        fieldsArr.forEach((field,i,arr) => {
            next = next[field] = (i == arr.length-1 ? value : {})
        })        
    } else {
        next = next[fieldsArr] = value
    }
    return obj
}
//console.log('buildObjectFromArray: ', buildObjectFromArray(['fields','taverna'], 'Yay' ) )

export let replaceValueInObj = (obj: any, fieldsArr: string[], newValue: any) => {
    let o = obj
    //let arr = Array.isArray(fieldsArr) ? fieldsArr : [fieldsArr]
    fieldsArr.forEach((field,i) => {
        if (fieldsArr.length-1==i) 
            o[field] = newValue
        else
            o = o[field] 
    })    
    return JSON.parse(JSON.stringify(obj))
}
//console.log('replaceValueInObj:', replaceValueInObj(dataModels[0], ['fields'], {x: 'Yay'} ))

export let insertValueInArray = (obj: Object, fieldsArr:string[], newValue: Object) => {
    let o = obj
    //let arr = Array.isArray(fieldsArr) ? fieldsArr : [fieldsArr]
    fieldsArr.forEach((field,i) => {
        if (fieldsArr.length-1==i)
            o[field] = (o[field] || []).concat(newValue)
        else
            o = o[field] 
    })
    return JSON.parse(JSON.stringify(obj))
}

export function deleteValueFromArray(obj: Object, fieldsArr: string[]) {
    //console.log('deleteValueFromArray -> obj',obj,'\nfieldsArr->',fieldsArr)
    let o = obj
    fieldsArr.every((field,i) => {        
        if (fieldsArr.length-2==i) {
            let indexToBeRemoved = fieldsArr[fieldsArr.length-1]
            o[field].splice(indexToBeRemoved, 1)
            return false
        }
        else {
            o = o[field]
            return true
        }
    })
    console.log('deleteValueFromArray ALTERADO SMACE',obj)
    return JSON.parse(JSON.stringify(obj)) 
}

export let ObjectArrayFieldToMasterKeyNested = (arrObject: Object[], mask: Object[]) => {
    let obj = {}
    arrObject.forEach(row=>{
        let newRow = row
        mask.forEach(m=>{
            let fieldValue, 
                transformedArr
            if (Array.isArray(m.field)) {
                fieldValue = fieldsArrToValue(newRow, m.field)
                transformedArr = ObjectArrayFieldToMasterKey(fieldValue, m.key)
                newRow = replaceValueInObj(newRow, m.field, transformedArr)
            } else {
                fieldValue = newRow
                transformedArr = ObjectArrayFieldToMasterKey([fieldValue], m.key)
                newRow = transformedArr
            }
        })
        obj = Object.assign({}, obj, newRow) 
    })
    return obj
}


export function OnArrayFindAndRemoveOrAddItem(arr: [], item: any): any { // To-Do: Fix return type. It was [] before.
    let newArr = arr.slice()
    let idx = newArr.indexOf(item)
    if (idx > -1) {
        newArr.splice(idx, 1)
    } else {
        newArr.push(item)
    }
    return newArr.slice()
}


/*
    let parentsToObj = (root, parents) => 
        parents.reduce((previousValue, currentValue) => previousValue[currentValue], root);
*/