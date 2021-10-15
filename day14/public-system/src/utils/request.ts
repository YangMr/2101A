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

