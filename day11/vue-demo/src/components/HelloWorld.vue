<template>
  <div class="hello">
   
  </div>
</template>

<script lang="ts">
import { defineComponent,onBeforeMount,onMounted,onBeforeUpdate,onUpdated ,onBeforeUnmount,onUnmounted} from 'vue';

export default defineComponent({
  name: 'HelloWorld',
   setup(){
    console.log("1setup")

    onBeforeMount(()=>{
       console.log("1dom元素挂载前触发")
    })
    onMounted(()=>{
        console.log("1dom元素挂载后触发")
    })
    onBeforeUpdate(()=>{
        console.log("1数据更新前触发")
    })
    onUpdated(()=>{
      console.log("1数据更新后触发")
    })
    onBeforeUnmount(()=>{
      console.log("1组件销毁前触发")
    })
    onUnmounted(()=>{
        console.log("1组件销毁后触发")
    })


  },
});
</script>


<style scoped lang="scss">

</style>
