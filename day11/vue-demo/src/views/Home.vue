<template>
  <div class="home">
     <ul>
       <li @click="toPage('/lifecycle')">Vue3生命周期</li>
       <li @click="toPage('/computed')">Vue3计算属性</li>
     </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'Home',
  setup(){
    //获取路由对象
    let router = useRouter();

    //页面跳转
   let toPage = (path:string):void => {
     router.push({
       path : path
     })
   }

   return {
      toPage
    }
  }
});
</script>
