import request from "@/utils/request";

//获取验证码接口
let getCaptcha = () =>{ return request({url : "/captcha",method : "GET"})}


export default {
    getCaptcha
}