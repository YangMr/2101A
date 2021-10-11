<template>
  <div>
    <!-- <h1>{{message}}</h1>

    {{str}}

    <button @click="addContent">add</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,toRefs } from 'vue';

export default defineComponent({
  name: 'HelloWorld',

  setup(props,context){
   
    // console.log(props.message)
    // let str= ref("hello wrold");

    // let addContent = ()=>{
    //   // str.value = str.value + "123"
    //   // let {message} = props
      
    // let {message} = toRefs(props);
    // message.value = message.value + "123"
    // console.log(message.value + "123")

      // let message = toRef(props,"message")
      // message.value = message.value + "123"
      // console.log(message.value + "!23")
      // console.log(message.value + "123123")
    // }

    // return {
      // str,
      // addContent
    // }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
