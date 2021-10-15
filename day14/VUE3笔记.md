# Vue3笔记

[toc]



## 一、什么是Vue3?

- Vue.js3.0正式版在2020年9月份发布，支持Vue2的大多数特性，更好的支持TypeScript，虚拟DOM完全重构，结合模板编译提高运行时性能，减少运行时开销，使用Proxy（代理）代替defineProperty实现数据响应式，新增特性Composition(组合) API
- 在学习Vue3之前一定要会Vue2，毕竟是Vue2的升级版，性能得到了更好的提升，打包后的体积减少了约41%，初次渲染快55%，更新渲染快133%，内存减少54%，使用Proxy（代理）代替defineProperty实现数据响应式，调整代码结构使其可以和Tree-shaking配合起来，没有用到的代码在编译时扔掉。需要注意目前Vue3不支持IE浏览器，所以需要兼容IE的项目，还是需要使用Vue2开发。
- Vue2与Vue3的响应式不同，在Vue3中使用Proxy（代理）代替Vue2的defineProperty实现数据响应式，由于Vue2使用defineProperty实现数据响应式，直接通过下标修改元素比如arr[3]=xxx或更新数组的length，界面不会自动更新，需要使用Vue.set或this.$set实现数据响应式，在Vue3中使用的是Proxy实现的数据响应式，解决了这个问题，不需要使用Vue.set或this.$set即可实现数据响应式。
- 在实际开发中Vue3支持Vue2的大部分代码，但是企业一般要求使用TypeScript开发，所以在学习Vue3之前一定要学习TypeScript。

## 二、为什么要有vue3?

使用 Vue2.x 的小伙伴都熟悉，Vue2.x 中所有数据都是定义在`data`中，方法定义在`methods`中的，并且使用`this`来调用对应的数据和方法。那 Vue3.x 中就可以不这么玩了， 具体怎么玩我们后续再说， 先说一下 Vue2.x 版本这么写有什么缺陷，所有才会进行升级变更的。

```vue
<template>
  <div class="homePage">
    <p>count: {{ count }}</p>   
    <p>倍数： {{ multiple }}</p>        
    <div>
      <button style="margin-right: 10px" @click="increase">加1</button>
      <button @click="decrease">减一</button>    
    </div>      
  </div>
</template>
<script>
export default {
  data() {
    return { count: 0 };
  },
  computed: {
    multiple() {
      return 2 * this.count;
    },
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
};
</script>

```

上面代码只是实现了对`count`的加减以及显示倍数， 就需要分别在 data、methods、computed 中进行操作，当我们增加一个需求，就会出现下图的情况：

![image-20211011084353723](VUE3笔记.assets/image-20211011084353723.png)

当我们业务复杂了就会大量出现上面的情况， 随着复杂度上升，就会出现这样一张图， 每个颜色的方块表示一个功能：

![image-20211011084411175](VUE3笔记.assets/image-20211011084411175.png)

甚至一个功能还有会依赖其他功能，全搅合在一起。

当这个组件的代码超过几百行时，这时增加或者修改某个需求， 就要在 data、methods、computed 以及 mounted 中反复的跳转，这其中的的痛苦写过的都知道。

那我们就想啊， 如果可以按照逻辑进行分割，将上面这张图变成下边这张图，是不是就清晰很多了呢, 这样的代码可读性和可维护性都更高：

![image-20211011084444432](VUE3笔记.assets/image-20211011084444432.png)

那么 vue2.x 版本给出的解决方案就是 Mixin, 但是使用 Mixin 也会遇到让人苦恼的问题：

1. 命名冲突问题
2. 不清楚暴露出来的变量的作用
3. 逻辑重用到其他 component 经常遇到问题

关于上面经常出现的问题我就不一一举例了，使用过的小伙伴多多少少都会遇到。文章的重点不是 Mixin, 如果确实想知道的就留言啦~

所以，我们 Vue3.x 就推出了`Composition API`主要就是为了解决上面的问题，将零散分布的逻辑组合在一起来维护，并且还可以将单独的功能逻辑拆分成单独的文件。接下来我们就重点认识`Composition API`。


**总结: 如何使用vue2进行开发,当我们的业务复杂了,就会大量出现业务逻辑特别分散的情况,所以我们在进行开发以及维护时就会变得非常的麻烦,如果可以按照逻辑进行分割,将对应的逻辑集中在一起,那我们的功能结构就清晰很多了呢,所以vue3提供了`Composition API`来帮助我们解决了这个问题, 还有一个原因,就是vue2对于typescript的支持非常有限,但是vue3提供了很好的支持**

## 三、创建项目

### 3.1 检测是否安装vue-cli

```
vue --version
```

### 3.2 检测vue-cli版本号是否是4.5.x以上

```
vue --version
```

### 3.3 升级vue-cli

```
vue upgrade --next 
```

### 3.4 创建vue项目的两种方式

1. 使用vue脚手架创建项目

   - 创建项目的命令

   ```
   vue create 项目名称
   ```

   - 选择创建的方式

     ![image-20211011085838049](VUE3笔记.assets/image-20211011085838049.png)

   - 选择要安装的插件

     ![image-20211011091221494](VUE3笔记.assets/image-20211011091221494.png)

     ![image-20211011091249276](VUE3笔记.assets/image-20211011091249276.png)

   - 选择vue语法版本

     ![image-20211011091340357](VUE3笔记.assets/image-20211011091340357.png)

   - 是否选择class类组件

     ![image-20211011091448419](VUE3笔记.assets/image-20211011091448419.png)

     ![image-20211011091541766](VUE3笔记.assets/image-20211011091541766.png)

   - 选择路由的模式

     ![image-20211011091657773](VUE3笔记.assets/image-20211011091657773.png)

   - 选择css预处理器

     ![image-20211011091746548](VUE3笔记.assets/image-20211011091746548.png)

   - 选择检测的语法规范以及什么时候检测

     ![image-20211011092325397](VUE3笔记.assets/image-20211011092325397.png)

   - 选择配置生成的文件

     ![image-20211011092434609](VUE3笔记.assets/image-20211011092434609.png)

   - 是否选择当前的预设模式

     ![image-20211011092526536](VUE3笔记.assets/image-20211011092526536.png)

   - 进入项目目录

     ```
     cd 项目目录名称
     ```

   - 启动项目

     ```
     npm run serve
     ```

2. 使用vite创建项目

   - 创建项目的命令

     ```
     npm init @vitejs/app <project-name>
     ```

   - 选择要使用的语言

     ![image-20211011093345191](VUE3笔记.assets/image-20211011093345191.png)

     ![image-20211011093424269](VUE3笔记.assets/image-20211011093424269.png)

   - 进入项目目录

     ```
     cd 项目目录名称
     ```

   - 安装项目的依赖

     ```
     npm install
     ```

   - 启动项目

     ```
     npm run dev
     ```

## 四、项目结构分析

![image-20211011101240348](VUE3笔记.assets/image-20211011101240348.png)

![image-20211011101253887](VUE3笔记.assets/image-20211011101253887.png)

### 4.1 defineComponent函数的作用

defineComponent是一个重载函数，只是对setup函数进行封装，返回options的对象，目的是定义一个组件，内部可以传递一些配置对象，defineComponent函数最重要的是，在TypeScript下，给予了组件正确的参数类型推断。

### 4.2 shims-vue.d.ts

shims-vue.d.ts文件的作用：这个文件的作用是为了TypeScript做的适配定义文件，因为.vue文件不是一个常规的文件类型，TypeScript是不能理解vue文件是干嘛的，这个文件里面的代码是告诉TypeScript，vue文件是这种类型的。

代码：

```
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

declare module '*.vue'是一个全局类型声明写法，就是将模块名称“*.vue”引入了全局空间，即告诉 TypeScript 编译器，存在一个叫”*.vue”的模块，这样在其它组件里就可以使用import导入.vue文件了。

## 五、Composition API

### 5.1 什么是Composition API?

Composition API是一组低侵入式的、函数式的 API，它使我们能够更灵活地“组合”组件的逻辑。Composition API 的灵感来自于React Hooks ，比 mixin 更强大。它可以提高代码逻辑的可复用性，从而实现与模板的无关性，同时函数式的编程使代码的可压缩性更强。另外Vue3的响应式模块可以与其他框架相组合。

Composition API与Vue2的Options API的逻辑对比：

![image-20211011101639047](VUE3笔记.assets/image-20211011101639047.png)可以看出在较大组件的编写中， Composition-API可以把复杂组件的逻辑抽地更紧凑，而且可以将公共逻辑进行抽取

### 5.1 setup函数

在学习Composition-Api之前，需要先了解一下setup()函数。setup()是Vue3中的新增内容。它为基于Composition API的新特性提供了统一的入口，在Vue3中，所有的组合API函数都在此使用，只在初始化时执行一次，setup()函数会在created()生命周期之前执行，如果在setup()函数内返回对象，对象中的属性或方法，在<template>模板中可以直接使用。

> 但是在setup当中我们无法访问this. 
>
> setup()函数会在created()生命周期之前执行

#### 5.1.1 测试setup函数的执行顺序

- 测试代码

```
export default defineComponent({
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  created() {
    console.log("----created----");
  },
  setup() {
    console.log("----setup----");
  },
});

```

- 结果: 

![image-20211011143117842](VUE3笔记.assets/image-20211011143117842.png)

#### 5.1.2 setup函数参数

使用`setup`时，它接受两个参数：

1. props: 组件传入的属性

   - setup 中接受的`props`是响应式的， 当传入新的 props 时，会及时被更新。由于是响应式的， 所以**不可以使用 ES6 解构**，解构会消除它的响应式。 **错误代码示例**， 这段代码会让 props 不再支持响应式：

     ```
     // demo.vue
     export default defineComponent ({
         setup(props, context) {
             const { name } = props
             console.log(name)
         },
     })
     
     ```

   - 那在开发中我们**想要使用解构，还能保持`props`的响应式**，有没有办法解决呢？大家可以思考一下，在后面`toRefs`学习的地方为大家解答。 接下来我们来说一下`setup`接受的第二个参数`context`，我们前面说了`setup`中不能访问 Vue2 中最常用的`this`对象，所以`context`中就提供了`this`中最常用的三个属性：`attrs`、`slot` 和`emit`，分别对应 Vue2.x 中的 `$attr`属性、`slot`插槽 和`$emit`发射事件。并且这几个属性都是自动同步最新的值，所以我们每次使用拿到的都是最新值。

2. context

   - 传递给 `setup` 函数的第二个参数是 `context`。`context` 是一个普通 JavaScript 对象，暴露了其它可能在 `setup` 中有用的值：

### 5.2 ref函数

ref()函数可以将数据转化为响应式数据，一般用来定义一个基本类型的响应式数据。

> 注意: ref也可以定义引用数据类型,让引用数据类型具有响应式的特性

- ref操作数据

  ```
  let str = ref("hello world")
  str.value = "123"
  ```

### 5.3 reactive函数

reactive()的用法与ref()的用法相似，也是将数据变成响应式数据，当数据发生变化时模板视图也会自动更新。不同的是ref()用于基本数据类型，而reactive()是用于引用类型的数据，比如对象和数组。

### 5.4 toRefs函数

toRefs可以将响应式对象中所有属性包装为ref对象，并返回包含这些ref对象的普通对象，比如在setup函数中返回一个使用扩展运算符对象类型的响应式数据，这时这个对象类型的属性不再是响应式的，可以使用toRefs将对象中的每个属性都转换成响应式的。

### 5.5 生命周期

![image-20211012081732946](VUE3笔记.assets/image-20211012081732946.png)

**注意:**

- vue3中将vue2中beforeCreate和created替换成了setup函数, setup在beforeCreate和created函数之前执行
- vue3中将vue2中的beforeDestroy和destroyted废除了,将beforeDestroy和destroyted替换成了onBeforeUnmount以及onUnmounted
- vue3中的生命周期钩子函数是一个回调函数,而且使用的时候必须通过import导入,并切需要写在setup函数当中
- vue3中的生命周期钩子函数方法前面必须要加上on
- Vue3中的生命周期执行顺序是、setup、onBeforeMount,onMounted, 页面第一次加载的时候触发也是这个生命周期钩子函数
- Vue3中的父子组件生命周期执行顺序是: 父组件的setup函数,父组件的onBeforeMount,子组件的setup,子组件的onBeforeMount和onMounted,接下来是父组件的onMounted

### 5.6 计算属性

计算属性是vue实例中的一个配置选项,我们称之为computed. 首先所有的计算属性都是以函数的形式写在computed选项内,最终返回计算后的结果,其中最重要的是他的结果值是依赖于另外一个值的变化而变化.计算属性都包含一个getter方法和setter方法,如果当我们读取计算属性的值,默认调用getter方法,当数据改变是,默认调用set方法.

另外,计算属性是具有缓存性的.

> 计算属性总结答案: 计算属性一般就是用来通过其他的数据算出一个新数据，而且它有一个好处就是，它把新的数据缓存下来了，当其他的依赖数据没有发生改变，它调用的是缓存的数据，这就极大的提高了我们程序的性能

vue3计算属性语法:

```
//基础写法
let 变量名 = computed(()=>{
	
})

//使用get和set
let 变量名 = computed({
	get(){
	
	},
	set(val){
	
	}
})
```

案例:

- 计算购物车价格
- 使用get和set,获取文本输入的值
- 处理v-for和v-if同时使用问题

```vue
<template>
    <h1>计算属性</h1>
    <p>价格: {{price}}</p>
    <p>数量: <button @click="amount > 1?amount-- : 0">-</button>{{amount}}<button @click="amount++">+</button></p>
    <hr>
    <p>总价: {{total}}</p>

    <hr>

    <div>
        昵称: <input type="text" v-model="setNickName"> {{getNickName}}
    </div>

    <div v-for="item in newArray" :key="item.id">
        <!-- <div v-if="item.id > 2">{{item.id}} -- {{item.className}}</div> -->
        {{item.id}} -- {{item.className}}
    </div>
</template>

<script lang="ts">
import { defineComponent,ref,onBeforeMount,onMounted ,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted, computed} from 'vue';


export default defineComponent({
  name: 'Home',
  setup(){
      let price = ref(10);
      let amount = ref(0);

      let total = computed(()=>{
          return  price.value * amount.value;
      })


      let getNickName = ref("")
      let setNickName = computed({
          get(){
              console.log("2")
              return getNickName.value; 
          },
          set(val:string){
              console.log("1")
              getNickName.value = val + "123"
          }
      })

      let arrays= [
          { id: 1, className : "java"},
          { id: 2, className : "php"},
          { id: 3, className : "python"},
          { id: 4, className : "javascript"},
      ]

      let newArray = computed(()=>{
          return arrays.filter((item,index)=>{
              return item.id > 2
          })
      })

      return {
          price,
          amount,
          total,
          getNickName,
          setNickName,
          arrays,
          newArray
      }
  }

});
</script>
```

### 5.7 获取DOM与nextTick

### 5.8 watch与watchEffect

### 5.9 自定义hook

### 5.10 shallowReactive与shallowRef

### 5.11 readonly与shallowReadonly

### 5.12 toRaw与markRaw

### 5.13 toRef的特点与作用

### 5.14 customRef在实战中的使用

### 5.15 provide和inject组件通讯

### 5.16 响应式数据的判断

### 5.17 teleport传送api的使用

### 5.18 组件之间的双向绑定

### 5.19 在setup函数中实现路由跳转

### 5.20 在setup函数中使用Vuex

### 5.21 使用vant-ui库

### 5.21 使用Element Plus UI库

## 六、项目实战

### 6.1 项目概述: 

#### 6.1.1 项目名称

**积云舆情监控后台管理系统**

#### 6.1.2项目介绍:

​		**积云舆情监控系统集成了舆情报告、正面舆情、负面舆情, 以及舆情关键词设置、舆情报警设置,舆情关键词分布等核心模块。帮助客户全面掌握舆情动态，正确进行舆论引导。为确保我国互联网络大众媒体的舆论导向的正确性起到一定的辅助作用，实现为政府分忧，对网络舆情进行监控和管理**

#### 6.1.3 项目使用技术: 

`vue3 + typescript + ant-design +axios + vue-router + vuex +  highcharts`

### 6.2 项目环境搭建

#### 6.2.1 使用vue-cli创建项目

```
vue create public-system
```

#### 6.2.2 配置项目(vue.config.js)

- 关闭eslint

- 配置自动打开浏览器

- 配置启动的端口号

  ```typescript
  module.exports = {
      //配置服务器
      devServer : {
          //配置端口号
          port : 8888,
          //配置项目启动自动打开浏览器
          open : true,
          //配置主机名
          host : "localhost",
          //配置https
          https : false
      },  
      //关闭eslint
      lintOnSave : false
  }
  ```

- 项目中集成axios和ant design

  - 安装axios

  ```
  npm i axios --save
  ```

  - 安装ant design  (教程地址:https://www.cnblogs.com/czly/p/14527197.html)

  ```typescript
  //1. 安装ant-design-vue
  npm i --save ant-design-vue@next
  
  //2. 在main.ts中引入并注册
  import { createApp } from 'vue';
  import App from './App.vue';
  import router from './router';
  import store from './store';
  import Antd from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  createApp(App).use(store).use(router).use(Antd).mount('#app')
  ```

- 在`vue.config.js`中修改index.html文件的标题

  ```javascript
  module.exports = {
      //配置服务器
      devServer : {
          //配置端口号
          port : 8888,
          //配置项目启动自动打开浏览器
          open : true,
          //配置主机名
          host : "localhost",
          //配置https
          https : false
      },  
      //修改html文件配置
      chainWebpack : config => {
          config.plugin("html").tap(args=>{
              args[0].title = "积云舆情监控后台管理系统";
              return args;
          })
      },
      //关闭eslint
      lintOnSave : false
  }
  ```

- 配置跨域

  `vue.config.js`

  ```javascript
  module.exports = {
      //配置服务器
      devServer : {
          //配置端口号
          port : 8888,
          //配置项目启动自动打开浏览器
          open : true,
          //配置主机名
          host : "localhost",
          //配置https
          https : false,
          //配置跨域
          proxy : {
             // /api为代理的名称
             [process.env.VUE_APP_BASE_API] : {
               target : process.env.VUE_APP_SERVICE_URL , //要跨域的地址
               changeOrigin : true,  //开启跨域 
               pathRewrite : {  //路径重写
                   ["^" + process.env.VUE_APP_BASE_API] : ""
               }
             }
          }
      },  
      //修改html文件配置
      chainWebpack : config => {
          config.plugin("html").tap(args=>{
              args[0].title = "积云舆情监控后台管理系统";
              return args;
          })
      },
      //关闭eslint
      lintOnSave : false
  }
  ```

  `.env.development`

  ```
  # 代理名称
  VUE_APP_BASE_API = "/dev-api"
  
  # 跨域的地址
  VUE_APP_SERVICE_URL = "http://yuqing.itying.com/api"
  ```

  `.env.production`

  ```
  # 代理名称
  VUE_APP_BASE_API = "/pro-api"
  ```

#### 6.2.3 axios二次封装

1. 在src目录下创建utils文件夹
2. 在utils文件夹内创建request.ts文件
3. 在request.ts文件内引入axios以及类型
4. 创建axios实例对象,在实例对象内配置请求的代理名称以及请求的超时时间
5. 创建axios请求拦截器
6. 创建axios响应拦截器
7. 导出axios实例对象

```typescript
//1. 引入axios
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

//2. 创建axios实例
let request = axios.create({
  baseURL : process.env.VUE_APP_BASE_API,
  timeout : 5000
})

//3. 创建请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => { 
    return config 
  },(error: AxiosError) => { 
    return error 
  }
)

//4. 创建响应拦截器
request.interceptors.response.use((response : AxiosResponse) => {
  return response;
}, (error :AxiosError )=>{
  return Promise.reject(error)
});

//5. 导出axios实例对象 request
export default request


```

#### 6.2.4 api接口封装

- 在src目录下创建api文件夹
- 在api文件夹内创建对应模块的ts文件
- 在对应的ts文件内封装对应模块的api接口

代码实例:

```typescript
//引入axios实例对象
import request from "@/utils/request";

//定义登录参数规则
interface loginParams{
    username : string,
    password : string,
    svgKey : string,
    verify : string
}

//获取验证码接口
let getCaptcha = () =>{ return request({url : "/captcha",method : "GET"})}

//登录接口
let doLogin = (data:loginParams)=> {return request({url : "/doLogin",method : "POST", data})}

//导出user模块api接口
export default {
    getCaptcha,
    doLogin
}
```

### 6.3 登录模块开发

#### 6.3.1 创建登录组件并配置登录路由

1. 在views目录下创建Login.vue

   ![image-20211015091807225](VUE3笔记.assets/image-20211015091807225.png)

2. 在router/index.ts文件内配置登录路由

   ```typescript
   import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
   // import Home from '../views/Home.vue';
   
   const routes: Array<RouteRecordRaw> = [
     {
       path: '/login',
       name: 'login',
       component: () => import( '../views/Login.vue'),
     },
     // {
     //   path: '/',
     //   name: 'Home',
     //   component: Home,
     // },
     
   ];
   
   const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
   });
   
   export default router;
   
   ```

#### 6.3.2 实现登录界面布局

1. 实现登录背景
2. 实现登录居中盒子
3. 实现登录表单

```vue
<template>
    <!-- 1. 问题: 实现登录布局的时候遇到了外边距的塌陷问题  解决方案: 核心: 触发bfc   1. 给父元素加overflow:hidden; 2. 给父元素设置相对定位,给子元素使用绝对定位 -->
  <div class="login-wrapper">
      <div class="login-center">
          <h2 class="login-title">舆情监控系统后台管理-IT营</h2>
          <dl>
              <dd>
                  <span>用户名: </span>
                  <input type="text" class="text" placeholder="用户名">
              </dd>
              <dd>
                  <span>密码: </span>
                  <input type="password" class="text" placeholder="密码">
              </dd>
              <dd>
                  <span>验证码: </span>
                  <input type="text" class="verify" placeholder="验证码">
                  <i>1234</i>
              </dd>
              <dd>
                  <button class="login-button"></button>
              </dd>
          </dl>
      </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
}) 
</script>

<style scoped lang="scss">
.login-wrapper {
    height: 100%;
    background-color:#01458e;
    position : relative;

    .login-center{
        width : 740px;
        height : 300px;
        background : url("../assets/loginbg.jpg") no-repeat center;
        position : absolute;
        left : 50%;
        top:120px;
        margin-left : - 370px;

        .login-title{
            font-size: 24px;
            font-weight: bold;
            height : 40px;
            line-height: 40px;
            color: #01458e;
            padding: 10px 0 0 10px;
        }

        dl{
            width: 500px;
            // background-color : red;
            color: #01458e;
            font-size: 15px;
            padding: 10px 0 0 20px;

            dd{
                height: 32px;
                line-height: 32px;
                margin-top:16px;

                span{
                    width : 80px;
                    display : inline-block;
                    text-align: right;
                    margin-right:10px;
                }

                input.text{
                    width : 280px;
                    height : 30px;
                    line-height: 30px;
                }

                .verify{
                    width: 90px;
                    height: 30px;
                    line-height: 30px;
                    margin-right:3px;
                }

                .login-button{
                    width: 123px;
                    height : 29px;
                    border:none;
                    margin : 10px 0 0 88px;
                    padding:2px 8px 0;
                    cursor: pointer;
                    background:url("../assets/login_btn.jpg") no-repeat;
                }
            }
        }
    }
}
</style>

```

**遇到的问题:** 

- 问题: 实现登录布局的时候遇到了外边距的塌陷问题
-  解决方案: 
  - 核心: 触发BFC  
    -   给父元素加overflow:hidden; 
    - 给父元素设置相对定位,给子元素使用绝对定位

#### 6.3.3 实现验证码渲染

1. 调用获取验证码接口
2. 创建两个变量: svgImg和svgKey, 分别保存请求到的图片地址, 和验证码的key值,这个key值登录的时候发送给后台,所以需要先保存起来
3. 将请求到的数据交给这两个变量
4. 返回svgImg
5. 通过v-html渲染验证码图片
6. 调节图片验证码样式

代码实例:

```vue
setup(){
      //定义响应式变量来保存验证码图片(svgImg)以及svgKey
      let svgImg = ref("");
      let svgKey = ref("");
      
      //调用获取验证码接口
      userApi.getCaptcha().then((response:any)=>{
          console.log(response)
          svgImg.value = response.data.svgImg;
          svgKey.value = response.data.svgKey;
      })

      return {
          svgImg
      }
  }
  
 <dd>
   <span>验证码: </span>
   <input type="text" class="verify" placeholder="验证码">
    <!-- 渲染验证码 -->
   <i class="svgImg" v-html="svgImg"></i>
</dd>

.svgImg{
    cursor : pointer;
    height :30px;
    float:right;
    position: relative;
    left : -150px;
    top: -15px;
}
```

#### 6.3.4 实现调用登录接口,获取到登录成功的数据,并对登录失败进行处理

#### 6.3.5 登录成功后将token和用户信息保存到vuex和本地,并跳转到主页

### 6.4 页面鉴权

### 6.5 主页模块开发

### 6.6 后台首页模块开发

### 6.7 全部舆情模块开发

### 6.8 舆情关键词设置模块开发

### 6.9 舆情报警设置模块开发

### 6.10 退出登录功能开发

### 6.11 项目部署