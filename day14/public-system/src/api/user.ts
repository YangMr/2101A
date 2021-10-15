//引入axios实例对象
import request from "@/utils/request";

//定义登录参数规则
interface loginParams{
    username : string,
    password : string,
    svgKey : string,
    verify : string
}

//获取验证码接口
let getCaptcha = () =>{ return request({url : "/captcha",method : "GET"})}

//登录接口
let doLogin = (data:loginParams)=> {return request({url : "/doLogin",method : "POST", data})}

//导出user模块api接口
export default {
    getCaptcha,
    doLogin
}