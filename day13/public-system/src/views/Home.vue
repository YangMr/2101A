<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import userApi from "../api/user"
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(){
    userApi.getCaptcha().then(res=>{
      console.log(res)
    })
  }
});
</script>
