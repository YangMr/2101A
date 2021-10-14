<template>
  <div>
    <p>初始值: {{count}}</p>
    <p>变化值: {{resultCount}}</p>
    
    <p><button @click="increment">increment</button></p>
  </div>
</template>

<script lang='ts'>
import { defineComponent,computed } from 'vue'
import {useStore} from "vuex"
export default defineComponent({
  name: 'Store',
  setup(){
    // let store = useStore()
    // let count = computed(()=>{
    //   return store.state.count
    // })
    // let resultCount = computed(()=>{
    //   return store.getters.getCount
    // })
    // let increment = ()=>{
    //   store.dispatch("setChangeCount",10)
    // }

    let store = useStore();
    let count = computed(()=>{
      return store.state.Count.count
    })
    let resultCount = computed(()=>{
      return store.getters.getCount
    })
    let increment = ()=>{
      store.dispatch("setChangeCount",100)
    }

    return {
      count,
      resultCount,
      increment
    }
  }
})
</script>

<style>
 
</style>
