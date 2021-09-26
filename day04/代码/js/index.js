"use strict";
/*

如何在ts中声明变量, 并指定变量的类型

        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
            枚举类型（enum）
                随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
                例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
                在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
                如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
                也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
                这种方法称为枚举方法，用这种方法定义的类型称枚举类型。

                 enum 枚举名{
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数],
            } ;

        任意类型（any）
        null 和 undefined
        void类型  空类型
        never类型




*/
/**
 *
 * 声明boolean类型的变量
 *
 */
// let flag:boolean = true; 
// flag = "hello wrod"
// console.log(flag)
// let flag = true;   
// flag = false; //正确
// flag = 123;  //错误的写法
// console.log(flag)  // true
/***
 *
 * 声明数字类型的变量
 *
 */
// let num:string = "123";
// num = "456";
// let num : number = 123;
// num = 789;  //正确
// num = 11.8
// num = "hello";  //错误
// console.log(num)
// let num = 123;
// let str= "hello";
// let str1 : string = '123'
// str1 = "hello wrold"
// str = "word"
// str = num.toString()
// console.log(str)
/***
 * 声明数组有两种方式
 */
// //第一种
// let arr : any[] = [1,2,3,4,5,6,7,8,9]
// console.log(arr)
// //第二种声明数组的方式
// let list : Array<any> = ["1","2",1,2,3,4,true]
/***
 *
 *
 * 声明元组类型的方式
 *
 */
// let array:[number,string,boolean,number] = [123,"strin",true,123];
// array[1] = "123"
// 支付类型: 
//     现金              0            cash    
//     微信              1             wechat
//     支付宝            2             alipay
//     银行卡             3            bankcard
// enum payType {
//     cash = 0,
//     wechat = 1,
//     alipay = 2,
//     bankcard = 3,
// }
// let pay:number = payType.cash;
// console.log(pay)
/***
 *
 * 任意类型
 *
 */
// let a:any= 100;
// a= "helloo"
// a = true;
// a =undefined;
// let timer:null= null;
// timer = null;
// let box:undefined;
// box;
/************************************************************************************************
 *
 *
 * void类型  函数用
 */
// function box():void {
//     console.log("123")
// }
// box()
// function test():any{
//     return 123;
// }
/****************************************************************、
 *
 * never
 *
 */
// let a : never;
// a =null;
// a = (()=>{
//     throw new Error("hello")
// })()
