<template>
  <div>
      <button @click="goHome">去主页</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import {useRouter} from "vue-router"
export default defineComponent({
  name: 'Rou',
  // 动态路由
  // query
  // params
  setup(){
      let router = useRouter();
      let goHome = ()=>{
          router.push({name : "Home", params : {id : 1}})
      }
     
    return {
        goHome
    }
  }
})
</script>

<style>
 
</style>
