
// // function logClass(params:any):void{

// //     // console.log(params);
// //     params.prototype.changeRun = function(){
// //         console.log("我是修改的run方法")
// //     }
// //     params.prototype.test = "123"


// // @logClass 
// // class App {
// //     constructor(){

// //     }

// //     run(){
// //         alert("hello ts")
// //     }
// // }

// // let app = new App()
// // app.run()
// // console.log(app.test)
// // app.changeRun()

// function runCallback(params:any,params1:string){
//     console.log(params) 
//     console.log(params1)
//     return function (target:any){ //HotFix
//         target.prototype.url = params
//         target.prototype.fix = ():void => {
//             console.log(params1)
//         }
//     }
// }

// function runTest(params:any){

// }

// //如果通过修饰器进行参数传递的时候的时候,外层函数的参数表示的通过装饰器传递的参数, 内容函数的参数接收 的是要扩展的类名

// @runCallback("aaa","bbb") @runTest

// class HotFix{
    
// }



// let hot = new HotFix()
// hot.fix()


/**
 * 1. 定义装饰器  @函数名          普通装饰器    无法传递参数
 * 
 * 2. 装饰器工厂  @函数名()       函数内部要返回一个函数        可以传递参数
 * 
 * 3. 装饰器组合                 可以给要装饰的内容添加多个装饰器
 * 
 * 4. 装饰器的执行顺序            先执行装饰器工厂 - 从上往下执行  --  在执行装饰器函数  -- 从下往上执行
 * 
 * 
 * 
*/


//属性装饰器
// 2、属性装饰器

//         属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
//             1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//             2、成员的名字。

// function logPretty(params:any){
//     return function(target:any, params1:any){
//         console.log(target)
//         console.log(params1)
//         target[params1] = params
//     }
// }

// class App {
//     @logPretty("http://www.google.com")
//     url : string | undefined;
// }

// let app = new App();

// console.log(app.url)


//方法装饰器

// function get(num:any){
//     return function(target:any, params:any, description:any){
//         console.log(num)
//         console.log(target)
//         console.log(params)
//         console.log(description)
        
//         description.value = function(){
//             console.log(num)
//         }

     
//         // target.prototype.url = num
//     }
// }

// class App{
//     url : string | undefined;
//     constructor(){
    
//     }

//     @get("hello wrold")
//     getName(){
//         console.log("我是getname方法")
//     }
// }

// let app = new App();
// app.getName()
// console.log(app.url)



// function paramsCarror(params:any){
//     return function(target:any, paramsName:any, index:number){
//         console.log(target, paramsName, index + 1)   
//     }
// }
// class App{
//     getInfo(name:string, @paramsCarror(200) age : number):void{
//         console.log(name + age)
//     }
// }

// let app = new App();

// app.getInfo("zhangsan", 200)


// 接口 :  定义对象的结构  --- 泛型 :  当我们不知道类型的时候,可以在使用阶段指定对用的类型

// interface Info {
//     type :string
// }

// class App implements Info{
//     type = "hello"
//     get(){

//     }
// }



// let app = new App();
// console.log(app.type)