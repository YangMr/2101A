<template>
  <div class="hook">
      <p>x轴坐标: {{x}}</p>
      <p>y轴坐标: {{y}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref ,toRefs} from 'vue';
import {useMousePosition} from "../hook/event-mouse"
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'Home',
  setup(){

      console.log(useMousePosition())
      let {x,y} = useMousePosition()  

      return {
        x,
        y
      }
  }
});
</script>
