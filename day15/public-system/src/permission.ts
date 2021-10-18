import router from "@/router/index"
import storage from "@/utils/storage"
import store from "@/store/index"
router.beforeEach((to,from,next)=>{
    let token = storage.get("token") || null;
    if(token){
        if(to.path == "/login"){
            next(from.path)
        }else{
            next()
        }
    }else{
       if(to.path == "/login"){
            next()
       }else{
           next("/login")
       }
    }
})