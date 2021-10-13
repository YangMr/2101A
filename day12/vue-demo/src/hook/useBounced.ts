import {customRef} from "vue"

export function useDeBounced<T>(value: T,delay=1000,callback:Function){
    let timer:any = null;
    return customRef((track,trigger)=>{
        return {
            get(){
                console.log("123")
                // track()
                return value;
            },
            set(newValue:T){
                console.log("456")
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    value = newValue;
                    callback(newValue);
                    // trigger()
                },delay)
            }
        }
    })
}