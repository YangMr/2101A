<template>
 <div>
     {{count}}

     <button @click="increment">increment</button>
 </div>
</template>

<script>
import {defineComponent} from "vue"
import {useCount} from "../hook/useCount"
export default defineComponent({
 name : "", 
 setup(){
     let {count, increment} =useCount();
     return {count, increment}
 }
})
</script>


<style scoped>

</style>