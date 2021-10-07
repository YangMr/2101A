"use strict";
// const getArray = (value: any, times:number = 5):any[] => {
//     console.log(value);
//     return new Array(times).fill(value)
// }
// getArray([1],3).forEach((item,index)=>{
//     console.log(item.length)
// })
// getArray(2,3).forEach((item,index)=>{
//     console.log(item.length)
// })
// const getArray = <T>(value: T, times:number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// // console.log(getArray([1,1,2],3))
// console.log(getArray(2,3))
// getArray(2,3).forEach((item,index)=>{
//     console.log(item.length)
// })
// const getArray = <T,U>(params1:T, params2:U,times:number): [T,U][] => {
//     return new Array(times).fill([params1,params2])
// }
// getArray(1,"a",2).forEach((item,index)=>{
//     console.log(item[0].length)
//     console.log(item[1].toFixed(2))
// })
// const getArray : <T> (arg:T,times : number) => T[] = (arg,times)=>{
//     return new Array(times).fill(arg);
// }
// // console.log(getArray<string>("1",3))
// console.log(getArray(3,3))
//使用类型别名定义
// type GetArray = <T>(arg:T,times:number) => T[];
// const getArray : GetArray = (arg,times) => {
//     return new Array(times).fill(arg);
// }
// console.log(getArray([1,2,3],3))
//使用接口定义泛型函数类型
// interface GetArray{
//     <T>(arg:T,times:number) : T[]
// }
// const getArray : GetArray  = (arg,times) =>{
//     return new Array(times).fill(arg);
// }
// console.log(getArray(1,5))
//将泛型变量放到接口外层
// interface GetArray<T>{
//     (arg : T,times : number) : T[],
//     tag : T
// }
// const getArray : GetArray<number | string> = (arg,times) => {
//     return new Array(times).fill(arg)
// }
// getArray.tag = 1;
// console.log(getArray("100",3))
// interface GetArray{
//     length : number;
// }
// let obj : GetArray = {
//     length : 1  
// }
// interface Info{
//     baseUrl : string
// }
// const getLength =<T extends Info> (params : T,apiUrl : string) => {
//     return params.baseUrl + apiUrl; 
// }
// getLength({baseUrl : "http://www.baidu.com"},"/api/banner")
// const getProps = (object, propName) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProps(obj, "c"); // undefined
var getProps = function (object, propName) {
    return object[propName];
};
var obj = { a: "jack", b: "rose" };
getProps(obj, "a");
