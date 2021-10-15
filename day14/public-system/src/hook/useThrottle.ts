//防抖和节流 
//节流: 在事件触发的n秒内执行一次
//防抖: 在事件触发的n秒后执行一次,在规定的时间内在次触发,在重新计算时间,只执行最后一次
interface useThrottleType{
    (callback : Function, delay : number) : void;
}
export let useThrottle : useThrottleType = (callback,delay)=>{
    let timer:any = null;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            callback()
        },delay);
    }
}


