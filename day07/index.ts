// function getName():void{
//     console.log("zhangsan")
// }
// getName()

// function getName(name:string):void{
//     console.log(name)
// }
// getName("zhangsan")

// function getName(obj : {name:string}):void{
//     console.log(obj.name + obj.age)
// }
// getName({
//     name : "jack",
//     age : 100
// })

// const getFullname = ({name,age} : {name:string, age : number}) =>{
//     return `${name} -- ${age}`
// }

// console.log(getFullname())
// console.log(getFullname({ age: 18, phone: 123456789 }))
// console.log(getFullname({ name: "jack" }))
// interface Info{
//     name : string;
//     age : number;
//     test? : number
//     love? : string;
// }

// const getFullname = ({name,age,test}:Info) =>{
//     return `${name} -- ${age}`
// }

// console.log(getFullname({
//     name : "jack",age : 100, love : "music"
// }))

// interface requestParams{
//     url : string;
//     method : string;
//     data? : object;
//     params?: object;

// }

// function request({url,method,data,params}:requestParams){
//     return axios({
//         url,
//         method,
//         data : {},
//         params : {}
//     })
// }


// request({url : "http://www.baidu.com",method : "GET"}).then(response=>{

// }).catch(error=>{

// })

// request().then(response=>{

// }).catch(error=>{

// })

// interface Info{
//     readonly name : string;
//     age : number;
//     //使用索引签名的方式来避开多余属性的检测
//     // [prop : string]: any;
// }

// const getFullname = ({name,age}:Info) =>{
//     return `${name} -- ${age}`
// }

// //利用类型兼容性

// console.log(getFullname(
//     //使用类型断言的方式避开多余属性的检测
//     {name : "jack",age : 100,}

// ))


// interface Role {
//    readonly name : string,
//     age : number
// }

// let role : Role = {
//     name : "jack",
//     age : 100
// }

// role.name = "rose"



// interface addFun{
//     (number1: number, number2 : number) : number
// }

// const add : addFun = function(number1: number, number2){
//     return number1 + number2 + "";
// }
// add(1,2)


// interface Info{
//     [index : number]: string;
// }

// let role : Info = {
//     0 : "jack",
//     1 : "rose",
// }
// let role1 : Info = {
//     a : "jack",
//     b : "rose",
// }

//   interface Vegetables {
//     color: string;
//   }
//   interface Carrot{
//     length: number;
//   }
//   interface Tomato  extends Vegetables,Carrot {
//     radius: number;

//     // color radius
//   }
//   interface extends Vegetables {
//     length: number;

//     // color length
//   }

//   let tomoto : Tomato = {
//       color : "yellow",
//       radius : 123
//   }

// interface Info{
//     () : void;
//     count : number;
// }

// const getCount = () : Info =>{
//     const c = ()=>{
//         c.count++;

//         console.log(c.count)
//     }
//     c.count = 0;

//     return c;
// }

// let count : Info= getCount()

// console.log(count())