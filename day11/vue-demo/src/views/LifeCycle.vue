<template>
    <h1>生命周期</h1>
    <p>{{name}}</p>
    <button @click="changeName">edit name</button> 
    <router-link to="/home">跳转到home页</router-link>

    <hr>

    <hello-world></hello-world>
</template>

<script lang="ts">
import { defineComponent,ref,onBeforeMount,onMounted ,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
import HelloWorld from "@/components/HelloWorld.vue"

export default defineComponent({
  name: 'Home',
  components : {
      HelloWorld
  },
  setup(){
    console.log("setup")

    let name = ref("");

    let changeName = ()=>{
        name.value = "test"
    };

    onBeforeMount(()=>{
       console.log("dom元素挂载前触发")
    })
    onMounted(()=>{
        console.log("dom元素挂载后触发")
    })
    onBeforeUpdate(()=>{
        console.log("数据更新前触发")
    })
    onUpdated(()=>{
      console.log("数据更新后触发")
    })
    onBeforeUnmount(()=>{
      console.log("组件销毁前触发")
    })
    onUnmounted(()=>{
        console.log("组件销毁后触发")
    })

    return {
        name,
        changeName
    }
  },


  
//   onBeforeMount(){
//     console.log("dom元素挂载前触发")
//   },
//   onMounted(){
//     console.log("dom元素挂载后触发")
//   },
//   onBeforeUpdate(){
//       console.log("dom元素更新前触发")
//   },
//   onUpdated(){
//       console.log("dom元素更新前触发")
//   },
//   onBeforeUnmount(){
//       console.log("组件销毁前触发")
//   },
//   onUnmounted(){
//     console.log("组件销毁后触发")
//   }
});
</script>