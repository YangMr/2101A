<template>
  <div class="readonly">
      readonly
  </div>
</template>

<script lang="ts">
import { defineComponent, readonly, shallowReadonly } from 'vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'Home',
  setup(){
      //readonly深度只读数据，传入响应式或纯对象，返回一个原始对象的只读代理,对象内部任何嵌套的属性也都是只读的，在某些特定的情况下，不希望对数据进行更新的操作，那就可以包装生成一个只读代理对象来读取数据，防止对数据的修改或删除等操作。

    //  let readState = readonly({
    //      a : 1, 
    //      b : {
    //          f : 3,
    //          c : {
    //              d : 2
    //          }
    //      }
    //  });
    //  delete readState.a
    //   readState.a.b.c.d = 110;
    //   console.log(readState.b.c.d)


    //shallowReadonly
    let readState = shallowReadonly({
         a : 1, 
         b : {
             f : 3,
             c : {
                 d : 2
             }
         }
     });
    // readState.a = 110;
    // readState.b.c.d = 110;
    
    delete readState.b.c.d;
    console.log(readState.b.c.d)
  }
});
</script>
