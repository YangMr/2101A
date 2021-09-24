# TypeScript教程

## 一、TypeScript介绍

### 1.1. 什么是TypeScript?

> TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准
>
> TypeScript 由微软开发的自由和开源的编程语言。
>
> TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

1. TypeScript 是由微软开发的一款开源的编程语言。 

2. TypeScript 是 Javascript 的超集，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript 的语法。 

3. TypeScript 更像后端 java、C#这样的面向对象语言，可以让 js 开发大型企业项目。 

4. 谷歌也在大力支持 Typescript 的推广，谷歌的 angular2.x+就是基于 Typescript 语法。 

5. 最新的 Vue 、React 也可以集成 TypeScript。 

6. Nodejs 框架 Nestjs、midway 中用的就是 TypeScript 语法。

### 1.2 TypeScript语言特性

TypeScript 是一种给 JavaScript 添加特性的语言扩展。增加的功能包括：

- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 名字空间
- 元组
- Await

以下功能是从 ECMA 2015 反向移植而来：

- 类
- 模块
- lambda 函数的箭头语法
- 可选参数以及默认参数

### 1.3 JavaScript 与 TypeScript 的区别

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查.

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

![image-20210924145027006](TypeScript教程.assets/image-20210924145027006.png)

## 二、**Typescript** 安装 编译

在使用 npm 命令之前电脑必须得安装 nodejs

### 2.1 安装

```
npm install -g typescript 

或者

cnpm install -g typescript 

或者

yarn global add typescript
```

### 2.2 运行

```
tsc helloworld.ts
```

- **注意**：如果电脑上面没有安装过 cnpm，请先安装 cnpm

  ```
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

- **注意**：如果电脑上面没有安装过 yarn 请先安装 yarn:

  ```
  npm install -g yarn 
  
  或者
  
  cnpm install -g yarn
  ```

  

## 三、**Typescript** **开发工具** **Vscode** 自动编译.ts 文件

### 3.1 创建 tsconfig.json 文件 tsc --init 生成配置文件

![image-20210924144200379](TypeScript教程.assets/image-20210924144200379.png)

### 3.2 老版本 vscode 点击: 任务->运行任务-> tsc:监视-tsconfig.json 然后就可以自动生成代码了

![image-20210924144246408](TypeScript教程.assets/image-20210924144246408.png)

### 3.3 、最新版本 vscode 点击: 终端->运行任务->typescript->tsc:监视-tsconfig.json 然后就可以自动生成代码了

## 四、TypeScript 基础语法

TypeScript 程序由以下几个部分组成：

- 模块
- 函数
- 变量
- 语句和表达式
- 注释

### 4.1 第一个 TypeScript 程序

我们可以使用以下 TypeScript 程序来输出 "Hello World" ：

```
const hello : string = "Hello World!"
console.log(hello)
```

以上代码首先通过 **tsc** 命令编译：

```
tsc Runoob.ts
```

得到如下 js 代码：

```
var hello = "Hello World!";
console.log(hello);
```

最后我们使用 node 命令来执行该 js 代码。

```
$ node Runoob.js

Hello World
```

整个流程如下图所示：

![image-20210924145756065](TypeScript教程.assets/image-20210924145756065.png)

我们可以同时编译多个 ts 文件：

```
tsc file1.ts file2.ts file3.ts
```

tsc 常用编译参数如下表所示：

![image-20210924145844373](TypeScript教程.assets/image-20210924145844373.png)

### 4.2 TypeScript 保留关键字

TypeScript 保留关键字如下表所示：

![image-20210924145930320](TypeScript教程.assets/image-20210924145930320.png)

### 4.3 空白和换行

TypeScript 会忽略程序中出现的空格、制表符和换行符。

空格、制表符通常用来缩进代码，使代码易于阅读和理解。

### 4.4 TypeScript 区分大小写

TypeScript 区分大写和小写字符

**分号是可选的**

每行指令都是一段语句，你可以使用分号或不使用， 分号在 TypeScript 中是可选的，建议使用。

以下代码都是合法的：

```
console.log("Runoob")
console.log("Google");
```

如果语句写在同一行则一定需要使用分号来分隔，否则会报错，如：

```
console.log("Runoob");console.log("Google");
```

### 4.5 TypeScript 注释

注释是一个良好的习惯，虽然很多程序员讨厌注释，但还是建议你在每段代码写上文字说明。

注释可以提高程序的可读性。

注释可以包含有关程序一些信息，如代码的作者，有关函数的说明等。

编译器会忽略注释。

**TypeScript 支持两种类型的注释**

- **单行注释 ( // )** − 在 // 后面的文字都是注释内容。
- **多行注释 (/\* \*/)** − 这种注释可以跨越多行。

```
// 这是一个单行注释
 
/* 
 这是一个多行注释 
 这是一个多行注释 
 这是一个多行注释 
*/
```

