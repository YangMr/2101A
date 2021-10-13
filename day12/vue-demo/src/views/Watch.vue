<template>
  <div class="watch">
     <p>{{name}}</p>
     <button @click="setName">修改name</button>
     <hr>

     <ul>
         <li>{{nickname}}</li>
         <li>{{age}}</li>
     </ul>
     <button @click="changeList">change list</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,watch,reactive,toRefs, watchEffect } from 'vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'watch',
  setup(){
      let name = ref("hello");
      let setName = () => {
          name.value = "积云"
      }

    //   watch(name, (oldValue, newValue) => {
    //       console.log(oldValue)
    //       console.log(newValue)
    //   })

    //   let list = reactive({nickname : "jack", age : 100});

    //   let changeList = ()=>{
    //       list.age = 200;
    //       list.nickname = "rose";
    //   }  

    //   watchEffect(()=>{
    //       console.log(name.value)
    //       console.log(list.nickname)
    //       console.log(list.age)
    //   })

    //   watch(()=>list.age, (oldValue, newValue)=>{
    //       console.log(oldValue)
    //       console.log(newValue)
    //   })

    //  watch([()=>list.age, ()=> list.nickname], (oldValue, newValue)=>{
    //       console.log(oldValue)
    //       console.log(newValue)
    //  },{
    //      immediate : true,
    //      deep : true
    //  })

      // return {
      //   name,
      //   ...toRefs(list),
      //   setName,
      //   changeList
      // }
  }
});
</script>
