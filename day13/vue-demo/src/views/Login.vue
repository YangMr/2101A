<template>
  <div>
      <ul>
          <li>
              <span>用户名: </span>
              <input type="text" v-model="username" placeholder="请输入用户名">
          </li>
          <li>
              <span>密  码: </span>
              <input type="text" v-model="password" placeholder="请输入密码">
          </li>
          <li>
              <button @click="doLogin">登录</button>
          </li>
      </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive , toRefs } from 'vue'
export default defineComponent({
  name: 'Login',
  setup(){
    let state = reactive({
        username : "",
        password : "",
    });
    
    let doLogin = ()=>{
        console.log(state)
    }

    return {
        ...toRefs(state),
        doLogin
    }
  }
})
</script>

<style>
 
</style>
