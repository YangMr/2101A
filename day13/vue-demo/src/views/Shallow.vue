<template>
  <div class="shallow">
      <p>{{object}}</p>
      <p><button @click="changeObjectA">改变a</button><button @click="changeObjectC">改变c</button></p>
      <hr>

      <p>{{food}}</p>
      <p><button @click="changeFood">change food</button></p>

      <hr/>
      <p>{{foodList}}</p>
      <p><button @click="changeFoodList">change foodlist </button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, shallowReactive, shallowRef } from 'vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'Home',
  setup(){
      //shallowReactive   shallowReactive只处理对象内最外层属性的响应式也就是浅响应式
      let object = shallowReactive({a : 1, b : {c : 2}});

      let changeObjectA = ()=>{
          object.a += 1;
      }
      let changeObjectC = ()=>{
          object.b.c += 1;
      }

      //shallowRef只处理基本数据类型的响应式，不进行引用类型的响应式

      let food = shallowRef("哇哈哈");
      let foodList = shallowRef([{id:1, foodName: "西红柿",},{id:2, foodName: "土豆",}])


      let changeFood = ()=>{
          food.value = "矿泉水"
      }

      let changeFoodList = () => {
          foodList.value[0].foodName = "菠萝"
          console.log(foodList.value[0])
      }  

     return { 
         object,
         changeObjectA,
         changeObjectC,
         food,
         changeFood,
         foodList,
         changeFoodList
     }

  }
});
</script>
