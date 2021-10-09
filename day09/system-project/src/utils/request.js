/*对axios进行二次的封装*/

//1. 引入axios
import axios from "axios"

//2. 创建axios实例化对象
const request = axios.create({
    baseURL: 'http://yuqing.itying.com/api',
    timeout : 5000
})


//3. 创建请求拦截器
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
 });


//4. 创建响应拦截器
request.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


//5. 导出axios实例
export default request