module.exports = {
    //配置服务器
    devServer : {
        //配置端口号
        port : 8888,
        //配置项目启动自动打开浏览器
        open : true,
        //配置主机名
        host : "localhost",
        //配置https
        https : false,
        //配置跨域
        proxy : {
           // /api为代理的名称
           [process.env.VUE_APP_BASE_API] : {
             target : process.env.VUE_APP_SERVICE_URL , //要跨域的地址
             changeOrigin : true,  //开启跨域 
             pathRewrite : {  //路径重写
                 ["^" + process.env.VUE_APP_BASE_API] : ""
             }
           }
        }
    },  
    //修改html文件配置
    chainWebpack : config => {
        config.plugin("html").tap(args=>{
            args[0].title = "积云舆情监控后台管理系统";
            return args;
        })
    },
    //关闭eslint
    lintOnSave : false
}