<template>
  <div>
      <input type="text" v-model="keyword">

  </div>
</template>

<script lang='ts'>
import { defineComponent,onMounted,ref } from 'vue'
import {useDeBounced} from "../hook/useBounced"
export default defineComponent({
  name: 'Custom',
  setup(){
      let keyword = useDeBounced<string>("",500,(val:any)=>{
          console.log(val)
      })
      return { keyword}
  }
})
</script>

<style>
 
</style>
