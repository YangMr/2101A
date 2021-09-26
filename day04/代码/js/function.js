"use strict";
/*******************************
 *
 * 函数的定义:
 *
 */
//js定义函数
// function run(){
// }
// let run2 = function(){
// }
//ts定义函数,可以为函数指定类型
// function run():number{
//     return 123
// }
// function run1():boolean{ 
//     return true;
// }
// function run2():string{ 
//     return "string";
// }
// function run3():void{ 
// }
/*****
 *
 * 函数的可选参数
 *
 *
 */
//js:
// function run(name:string,age:number){
//     console.log(name)
//     console.log(age)
// }
// run("张三")
// function run(name:string,age:number):string{
//     return name + age;
// }
// console.log(run("张三"))
// ts:
// //必传参数 可选参数
// function run(name:string,age?:number){
//     console.log(name)
//     console.log(age)
// }
// run("张三")
//给函数的参数指定类型
// function run(num1:number,num2:number):number{
//     return num1 + num2
// }
// console.log(run(1,"123"))
// let v1:any = document.getElementById("value1");
// let v2:any = document.getElementById("value2");
// // v1.value:number = 123
// v2.value:number =456
// console.log(v1.value)
// let btn:any = document.getElementById("btn");
// let result:any = document.getElementById("result");
// btn.onclick = function():void{
//     let a:number = v1.value;
//     let b:number = v2.value;
//     result.innerHTML = getResult(a,b)
// }
// function getResult(num1:number,num2:number):number{
//     return num1 + num2;
// }
// console.log(getResult(123,456));
// function temp(age:number,name?:string,test?:boolean){
// }
// temp(11)
/*****
 * 给函数设置默认值
 *
 */
// function getResult(name:string,age:number=20):any{
//     return name+age
// }
// console.log(getResult("zhangasn",110))
/**
 *
 * 设置函数的剩余参数
 *
 *
 *
 */
// function result(a:number,...array : number[]){
//     let sum:number = a;
//     for(var i=0; i<array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum)
// }
// result(1,2,3,4,5,6)
// function sum(){
//     console.log("1")
// }
// function sum(){
//     console.log("@")
// }
// sum()
// sum()
// function sum(arg1,arg2){  
//     return 123
// // }
// let add : (x:number,y:number)=> number;
// add = (x:number,y:number):number=> x + y  //正确
// add =  (x:string,y:string):string=> x + y  //错误
// type Add = (x:number,y:number) => number
// let add :  Add = (arg1:number,arg2 : number) : number => arg1 + arg2
// console.log(add(1,2))
// function sum(num1:number=1, result:number = 2, age:number):number{
//     return num1 + result
// }
// sum(1,"a",100)
// function add(x:number):number
// function add(x:string):string
// function add(x:any):any{
// }
// 基本方式：直接在定义函数实体语句中，指定参数和返回值类型；
function add(x) {
    return x;
}
var add1 = function (x) { return x; };
var Add = function (x, y) { return x + y; };
Add(1, "2");
