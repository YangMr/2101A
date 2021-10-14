<template>
  <div>
      <p>{{state}}</p>

      <p><button @click="changeTest">change test</button></p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive,toRef } from 'vue'
export default defineComponent({
  name: 'ToRef',
  setup(){
      let state = reactive({
          total : 0
      });

      let changeTest = () => {
        //   let total = state.total;
          let total = toRef(state,"total");
          total.value++
        //   let total = toRef({total : 10},"total");
        //   console.log(total.value+=1)
          
        //   let total = test.total;
        //    total+=1;
         
        //   console.log(total)
      }

      return {
          state,
   
          changeTest
      }

  }
})
</script>

<style>
 
</style>
