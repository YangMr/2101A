<template>
 <div class="login-wrapper">
     <div class="login-form">
         <div class="form">
             <ul>
                 <li>
                     <span>用户名: </span> <input v-model.trim="user.username" type="text">
                 </li>
                 <li>
                     <span>密码: </span> <input v-model.trim="user.password" type="password" >
                 </li>
                 <li>
                     <span>验证码: </span> <input v-model.trim="user.verify" type="text"> <span @click="getCaptcha" v-html="captcha"></span>
                 </li>
                 <li>
                     <button @click="goCenter">进入管理中心</button>
                 </li>
             </ul>
         </div>
         <div class="logo"></div>
     </div>
 </div>
</template>

<script>
import loginApi from "../../api/login"
export default {
 name : "", 
 data(){
  return {
      user : {
          username : "",
          password : "",
          svgKey : "",
          verify : ""
      },
      captcha : "",
      
  }
 },
 components : {

 },
 methods : {
     goCenter(){
         console.log(this.user)
         loginApi.login(this.user).then(response => {
             console.log(response)
         }).catch(error=>{
             console.log(error)
         })
     },
     getCaptcha(){
         loginApi.getCaptcha().then(response => {
            console.log(response)
            this.captcha = response.data.svgImg;
            this.user.svgKey = response.data.svgKey
        }).catch(error=>{
            console.log(error)
        })
     }
 },
 mounted(){
     this.getCaptcha()
 }
}
</script>


<style scoped>
.login-wrapper{
    width: 100%;
    height: 100%;
    background-color:purple;
    overflow: hidden;
}
.login-form{
    width: 600px;
    height: 300px;
    background-color:#ccc;
    margin: 100px auto 0;
}
</style>