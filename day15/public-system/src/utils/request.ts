//1. 引入axios
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import store from "../store/index"
import router from "../router/index"
import storage from "../utils/storage"

//2. 创建axios实例
let request = axios.create({
  baseURL : process.env.VUE_APP_BASE_API,
  timeout : 5000
})

//3. 创建请求拦截器
request.interceptors.request.use((config:any) => { 
    //在拦截器里面通过请求头headers将token发送给后台
    let token = store.state.token;
    // config.headers.Authorization ="Basic " + token
    config.auth = {username: token,password: ""}

    return config 
  },(error: AxiosError) => { 
    return error 
  }
)

//4. 创建响应拦截器
request.interceptors.response.use((response : AxiosResponse) => {
  //token过期处理
  if(response.status == 401){
    //清除本地的登录信息
    storage.remove("token");
    storage.remove("userInfo")
    //清除vuex的登录信息
    store.dispatch("setChangeToken",null)
    store.dispatch("setChangeUserInfo",null)
    //跳转到登录页面
    router.push("/login")
  }
  return response;
}, (error :AxiosError )=>{
  return Promise.reject(error)
});

//5. 导出axios实例对象 request
export default request

