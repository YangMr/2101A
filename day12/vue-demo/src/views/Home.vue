<template>
  <div class="home">
     <ul>
       <li @click="toPage('/lifecycle')">Vue3生命周期</li>
       <li @click="toPage('/computed')">Vue3计算属性</li>
       <li @click="toPage('/dom')">Vue3获取dom</li>
       <li @click="toPage('/watch')">Vue3中watch与watchEffect</li>
       <li @click="toPage('/hook')">Vue3中hook的使用</li>
       <li @click="toPage('/mixin')">Vue2中的混入</li>
       <li @click="toPage('/test')">test</li>
       <li @click="toPage('/shallow')">shallow</li>
       <li @click="toPage('/readonly')">readonly与shallowReadonly</li>
       <li @click="toPage('/raw')">toRaw与markRaw</li>
       <li @click="toPage('/toref')">toRef</li>
       <li @click="toPage('/login')">使用vue3语法实现登录页面</li>
       <li @click="toPage('/custom')">customRef在实战中的使用</li>
       <li @click="toPage('/define')">响应书数据判断</li>
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
