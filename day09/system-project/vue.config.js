module.exports = {
    devServer : {
        //配置启动的端口号
        port : 9999,
        //配置启动项目时浏览器自动打开
        open : true,
        //配置是否开启https协议
        https: false,
        //配置主机名
        host : "localhost",
        //配置跨域
        // proxy : {
        //     "/api" : {
        //         target : "http://localhost:8888",
        //         changeOrigin : true,
        //         pathRewrite : {
        //             "^/api" : ""
        //         }
        //     }
        // }
    },
    //关闭eslint
    lintOnSave : false
}