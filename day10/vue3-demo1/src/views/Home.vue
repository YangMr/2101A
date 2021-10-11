<template>
  <div class="home">
      {{name}} -- {{age}}

      <hr>

      <button @click="changeNameAndAge">change data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src


export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  // methods : {
  //   changeNameAndAge(){
  //     this.name = "111"
  //   }
  // },
  // data:function(){
  //   return { 
  //     name: "jack",
  //     age : 100
  //   }
  // },
  setup(){
    let name= ref("rose");
    let age= ref(100);
    let changeNameAndAge = ()=>{
      name.value = "222"
      age.value = 888;
    }
    return {
      name,
      age,
      changeNameAndAge
    }
  }
});
</script>
