/*登录页面接口*/

import request from "../utils/request"

//获取验证码接口
let getCaptcha = () => request({url : "/captcha", method : "GET"})

//登录接口
let login = (data) => request({url : "/doLogin", method : "POST" , data })

export default {
    getCaptcha,
    login
}