<template>
  <div>
      define
  </div>
</template>

<script lang='ts'>
import { defineComponent, isProxy, isReactive, isReadonly, isRef,reactive,reactive,readonly,ref } from 'vue'
export default defineComponent({
  name: 'Define',
  setup(){
      let target =  {name: "xiaoming",age : 100}
      let handle = {
          set(target:any, prop:any, value:any) {
                let result = Reflect.set(target, prop, value)
                console.log("设置的操作" + result)
                return true;
            },
            get(target:any, value:any) {
                let result = Reflect.get(target, value)
                console.log("获取的的操作" + result)
            }
      }
      let t1 = ref("")
      let t2 = reactive({name : "jack"});
      let t3 = readonly({age : 100})
      let t4 = new Proxy(target,handle);
      console.log(isRef(t1))
      console.log(isReactive(t2))
      console.log(isReadonly(t3))
      console.log(isProxy(t4))
  }
})
</script>

<style>
 
</style>
