<template>
  <div>
      <!-- <input type="text" @input="setValue"> -->
      <button @click="setValue">父子组件的数据双向半丁</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MyInput',
  setup(props,context){
      let setValue = (e:any) => {
        
          context.emit("update:modelValue","123")
      }
      return {
          setValue
      }
  }
})
</script>

<style>
 
</style>
