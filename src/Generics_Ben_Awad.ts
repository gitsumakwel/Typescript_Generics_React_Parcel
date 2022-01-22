import React from 'react';
//Array
//last
//makeArr: 2 generics, return, overwrite inference, default value
//addFullName: extends
//interfaces
//props
//useState
//jsx generic

const last = <T>(arr: T[]) => {
    return arr[arr.length - 1];
};
const l = last([1,2,3]);
const l2 = last(['a','b','c']);

const lastExplicitReturn = <T>(arr: T[]):T =>{
    return arr[arr.length -1];
};
const l3 = lastExplicitReturn<string>(['a','b','c']);  //spcific what type of the data in the array

//sample only for this scenario
//Tuple [T,Y] => specified number, type of items inside the list
//Array (T|Y)[] => can be of a type T or Y items inside the list
const makeArr = <T,Y>(x: T,y: Y):[T,Y] => {
    return [x,y];
}
const v = makeArr(5,6);     //automatically detect types
const v2 = makeArr<string,string>('a','b')        //explicit parameter types
const v3 = makeArr<string | null,number>('a',5)     //explicit parameter types with first parameter as string or null

const makeFullName = (obj: { firstName: string; lastName: string; }) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName,
    };
};
const v4 = makeFullName({firstName: 'bob', lastName:'junior'});

const makeFullNameWithOptionalParam = <T extends {firstName:string;lastName:string}>(obj:T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName,
    };
};
const v5 = makeFullNameWithOptionalParam({firstName:'bob', lastName:'junior', age:15});
/* missing firstName */
/*
const v5_with_error = makeFullNameWithOptionalParam({ another:'bob', lastName:'junio', age: 15});
*/


interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;


