"use strict";
/****
 *
 * 1. 在js中如何创建一个类?
 *
 *      定义一个函数 - 对这个函数进行实例化 -- 实例化之后产生的对象 -- 而这个对象就是类
 *
 *      function Person(){  //构造函数
 *
 *      }
 *
 *      let p = new Person()
 *
 * 2. 如何在构造函数内部定义属性和方法?
 *
 *
 *      this来进行定义 而this指向的就是实例化之后的对象
 *
 *      function Person(){
 *          this.name = "John";
 *          this.age = 20;
 *          this.getInfo = function(){
 *              console.log(this.name + this.age)
 *          }
 *      }
 *
 *      let p = new Person();
 *
 *
 *
 *
 * 3. 如何在构造函数的原型上定义属性和方法?
 *
 *
 *      当我们对函数进行实例化时(new 方法名称),就会一个对象,而实例化的这个函数我们则称为构造函数.
 *      当我们对函数进行实例化时,就会产生一个原型属性,而这个原型属性就是prototype,而定义在prototype上的方法和属性是共享的
 *
 *       function Person(){
 *
 *       }
 *
 *       Person.prototype.name = "jack";
 *       Person.prototype.getName = function(){
 *          console.log(this.name)
 *       }
 *
 *       let p = new Person()
 *
 * 4. 如何调用定义的属性和方法
 *
 *
 *     function Person(){
 *          this.name = "John";
 *          this.age = 20;
 *          this.getInfo = function(){
 *              console.log(this.name + this.age)
 *          }
 *      }
 *
 *      let p = new Person();
 *
 *      console.log(p.name)
 *      console.log(p.age)
 *      p.getInfo()
 *
 *       function Person(){
 *
 *       }
 *
 *       Person.prototype.name = "jack";
 *       Person.prototype.getName = function(){
 *          console.log(this.name)
 *       }
 *
 *       let p = new Person()
 *
 *      console.log(p.name)
 *      p.getName()
 *
 * 5. 如何定义以及调用静态方法和静态属性?
 *
 *      function Person(){
 *
 *      }
 *      Person.name = "jack";
 *      Person.run = function(){
 *
 *      }
 *
 *      let p = new Person();
 *
 *      console.log(Person.name)
 *      Person.run()
 *
 *
 *
 * 5. 什么是继承?
 *
 *    子类能够调用父类的属性和方法,这种我们就称之为继承
 *
 * 6. 继承的几种方式?
 *
 *     6.1 对象冒充
 *
 *          核心方法: call 或者 apply
 *
 *          function Person(){
 *              this.name = "jack";
 *              this.getName = function(){
 *
 *              }
 *          }
 *
 *          Person.prototype.age = 100;
 *          Person.prototype.getAge = function(){
 *
 *          }
 *
 *          let p = new Person()
 *
 *          function Child(){
 *              Person.call(this)
 *          }
 *
 *          let c = new Child();
 *          console.log(c.name)
 *          c.getName()
 *
 *          //存在的问题: 子类无法继承父类原型上的属性和方法
 *          console.log(c.age);
 *          c.getAge()
 *
 *
 *     6.2 原型链继承
 *
 *          核心方法: 将父类的实例化对象挂载到子类的原型上面
 *
 *          //父类
 *         function Parent(name){
 *             this.name = name;
 *             this.getName = function(){
 *
 *              }
 *         }
 *
 *         Parent.prototype.age = 110;
 *         Parent.prototype.getAge = function(){
 *
 *         }
 *
 *
 *         let p = new parent()
 *
 *          //子类
 *         function Child(name){
 *
 *         }
 *
 *         Child.prototype = p;
 *
 *         let c = new Child("aa")
 *
 *
 *         //存在的问题,子类无法给父类传递参数
 *
 *
 *
 *
 *     6.3 原型链 + 对象冒充的组合继承方式
 *
 *          function Person(name,age){
 *              this.name = name;
 *              this.age = age;
 *              this.run = function(){
 *
 *              }
 *          }
 *
 *          Person.prototype.test = "!23";
 *          Person.prototype.getTest = function(){
 *
 *          }
 *
 *          let p = new Person()
 *
 *          function Child(name,age){
 *              Person.call(this,name,age)
 *          }
 *
 *          Child.prototype = new Person()
 *
 *
 *          let c = new Child("jack",100)
 *
 *          //解决的问题: 解决了子类不能继承父类原型上的属性和方法
 *
 *
 *     6.4 原型链 + 对象冒充的组合继承另外一种方式
 *
  *          function Person(name,age){
 *              this.name = name;
 *              this.age = age;
 *              this.run = function(){
 *
 *              }
 *          }
 *
 *          Person.prototype.test = "!23";
 *          Person.prototype.getTest = function(){
 *
 *          }
 *
 *          let p = new Person()
 *
 *          function Child(name,age){
 *              Person.call(this,name,age)
 *          }
 *
 *          Child.prototype = Person.prototype
 *
 *
 *          let c = new Child("jack",100)
 *
 *          //解决的问题: 实例化子类的时候不能给父类传参的的问题
 * 额外的作业:
 *
 *     1. 掌握另外的几种继承方式
 *
 *     2. 掌握 call apply  bind这三个方法的作用以及区别
 *
 *
 *
 *
 *
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1. 在ts中定义类
// function Person(){
//     this.name = "jack";
// }
// Person.prototype.run =
// let p = new Person();
// class Person{
//     name:string 
//     //实例化的时候会直接调用constructor
//     constructor(str:string){
//         this.name = str;
//         this.run = function(){
//         }
//     }
//     getAge(){
//     }
//     run():void{
//         alert(this.name) // hello
//     }
// }
// let p = new Person("hello");
// console.log(p.name);
// p.run()
//2.ts中通过类实现继承
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     run():void{
//         alert("123")
//     }
// }
// class Child extends Person{
//     constructor(str:string){
//         //
//         super(str)
//     }
// };
// let c = new Child("jack");
// console.log(c.name)
// c.run()
/*

    public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有 （public）

*/
// class Person {
//     private apiUrl:string = "";
//     constructor(){
//         this.apiUrl = "http://www.baidu.com";
//     }
//     request(){
//         alert("发送请求到:" + this.apiUrl)
//     }
// }
// let p = new Person();
// p.request()
// console.log(p.apiUrl)
// class Child extends Person{
// }
// let c = new Child();
// console.log("我是子类:" + c.apiUrl)
//1. 复习昨天的讲的内容
//2. 在ts中如何定义类
//通过class关键词定义类
//3. 在类中如何定义属性 和 方法 
// class App {
//     // name : string = "hello"
//     name:string;
//     //实例化类的时候会触发constructor方法
//     constructor(name:string){
//         this.name = "123"
//     }
//     //定义原型上的方法
//     run(){
//     }
// }
//4. 如何调用类里面的属性和方法
//对类进行实例化,通过实例化之后的对象进行调用
// class App{
// name:string;
// constructor(){
//     this.name= "jack"
// };
// run():void{
//     alert("123")
// }
// }
// let app = new App();
// app.run()
// console.log(app.name)
//5. ts中通过类实现继承 
// 核心方法: extends关键词实现继承
//父类
// class App {
//     name:string;
//     constructor(){
//         this.name= "jack"
//     };
//     run():void{
//         alert("123")
//     }
// }
// //子类
// class User extends App{
// }
// let u = new User();
// console.log(u.name)
// u.run()
//6. 如何实例化子类时讲将参数传递给父类
// 核心方法: super方法
//父类
// class App{
//     name:string;
//     age : number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
//     getUser():string {
//         return this.name + this.age;
//     }
// }
// //子类
// class User extends App{
//     constructor(name:string, age:number){
//         super(name, age);
//     }
// }
// let u = new User("jack",20);
//7. ts中的修饰符
// 设置定义属性可访问的权限或者范围
// public 类的内部 子类 类的外部
//protected  类的内部和子类 不能在外部访问
//private 当前类的内部 不能在子类和外部访问
// function User(){
//     this.name = "rose";
//     this.run = function(){
//     }
// }
// User.name = "jack";
// User.run = function(){
//     alert("hello world")
// }
// let u = new User();
// u.name 
// u.run
// User.name
// User.run
//ts中定义静态属性和方法
// class User{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     run(){
//         alert(this.name)
//     }
// }
// let u = new User("hello");
// u.name
// u.run
// class User{
//     name:string;
//     //定义静态属性
//     static age:number = 100;
//     //定义静态方法
//     static getTest():number{
//         return User.age + 100;
//     }
//     constructor(name:string){
//         this.name = name;
//     }
//     run(){
//         alert(this.name)
//     }
// }
// let u = new User("hello");
// console.log(User.age)
// console.log(User.getTest())
//抽象类
var User = /** @class */ (function () {
    function User() {
        this.name = "123";
    }
    User.prototype.run = function () {
        alert("hello wrold");
    };
    return User;
}());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 123;
        return _this;
    }
    App.prototype.test = function () {
        console.log("hello world");
    };
    return App;
}(User));
var app = new App();
//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现    
//多态属于继承
/*


        class Animal {

            name:string;
            constructor(name:string) {
                this.name=name;
            }
            eat(){   //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
                console.log('吃的方法')
            }
        }

        class Dog extends Animal{
            constructor(name:string){
                super(name)
            }
            eat(){
        
                return this.name+'吃粮食'
            }
        }


        class Cat extends Animal{

            constructor(name:string){
                super(name)
            }

            eat(){

                return this.name+'吃老鼠'
            }
        }

*/
//typescript中的抽象类：它是提供其他类继承的  基(基础) 类  ，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法
//标准:
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Animal;
}());
// var a=new Animal() /*错误的写法*/
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog;
}(Animal));
var d = new Dog('小花花');
d.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
    };
    Cat.prototype.eat = function () {
        console.log(this.name + '吃老鼠');
    };
    return Cat;
}(Animal));
var c = new Cat('小花猫');
c.eat();
