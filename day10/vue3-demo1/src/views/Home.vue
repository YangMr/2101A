<template>
  <div class="home">
      
      <p>第 {{year}} 年</p>
      <p>姓名: {{name}}</p>
      <p>年龄: {{age}}</p>
      <hr>

      <button @click="change">change data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,toRefs } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src


export default defineComponent({
  
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(){
    // ref 定义数据具有响应式的特性 (基本数据类型,不过也可以定义引用数据类型)
    // reactive 定义引用数据类型,让数据具有响应式的特性 , 但是不能定义基本数据类型
    let year = ref(2021);
    let user = reactive({name : "jack" , age : 100})
    let change = () => {
      year.value = 2022;
      user.name = user.name + "123";
      user.age = 200
    }
   

    return {
      year,  
      // 当我们在vue3使用解构赋值,就会让数据失去响应式对象的特性,如果要解决这个文图,我们这个使用toRefs
      ...toRefs(user),
      change
    }

    // let str = reactive("a")
    // const obj = reactive({count:1, name:"张三"});

    // let change = () => {

    //   obj.count = obj.count + 1
    //   obj.name = "李四"
    // }

    // return {
    //   obj,
    //   change
    // }
    // let name = ref("jack");
    // let age = ref(20);
    // let {music,sport} = reactive({music : "海阔天空", sport : "跑步"})
    // // let {music,sport} = love;
    // function change(){
    //   name.value = "rose";
    //   age.value = 22;
    //   sport = "123";
    //   // love.test = "test"
    //   // love.sport = love.sport + "hello wrld"
    //   console.log(sport)
    // }

    // return {
    //   name,
    //   age,
    //   music,
    //   sport,
    //   change
    // }
  }
});
</script>
