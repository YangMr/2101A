<template>
  <div>
      <!-- <button @click="sendChildParams">组件传参</button> -->
组件传参
    <inject-comp></inject-comp>
  </div>
</template>

<script lang='ts'>
import { defineComponent,provide,ref } from 'vue'
import InjectComp from "../components/InjectComp.vue"
export default defineComponent({
  name: 'Prod',
  components : {
      InjectComp
  },
  setup(){
      let sendChildParams = () =>{
          let text = ref("hello world");
          provide("message",text)
      }

         let text = ref("hello world");
          provide("message",text)

      return {
            sendChildParams
      }
  }
})
</script>

<style>
 
</style>
