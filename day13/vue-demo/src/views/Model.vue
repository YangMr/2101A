<template>
  <div>
      <my-input v-model="inputVal"></my-input> {{inputVal}}
  </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import MyInput from "../components/MyInput.vue"
export default defineComponent({
  name: 'Model',
  components : {
    MyInput
  },
  setup(){
      let inputVal = ref("");
      return {
          inputVal
      }
  }
})
</script>

<style>
 
</style>
