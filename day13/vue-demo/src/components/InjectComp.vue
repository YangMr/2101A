<template>
  <div>
      {{message}}
  </div>    
</template>

<script lang='ts'>
import { defineComponent,inject } from 'vue'
export default defineComponent({
  name: 'InjectComp',
  setup(){
      let message = inject<any>("message")
      console.log(message.value)
      return {
          message
      }
  }
})
</script>

<style>
 
</style>
