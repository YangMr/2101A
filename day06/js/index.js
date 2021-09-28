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
