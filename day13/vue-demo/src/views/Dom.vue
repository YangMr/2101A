<template>
  <div class="dom">
      <p ref="tagName">hello wrold</p>

      <ul>
          <li :ref="tagLi" v-for="(item,index) in array" :key="index">{{item}}</li>
      </ul>
      
      <button @click="changeLi">click me</button>

  </div>
</template>

<script lang="ts">
import { defineComponent,onBeforeMount,ref,onMounted,nextTick } from 'vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'Dom',
  setup(){
      //获取一个dom节点
      let tagName = ref<any>(null);
      let array = ["java","python","php","javascript"]
      onMounted(()=>{
          console.log(tagName.value);
      })

      let liArray : any[] = [];
      //获取多个dom节点
      let tagLi = (el:any)=>{
          liArray.push(el.innerHTML)
      }

      nextTick(()=>{
          console.log(liArray)
      })


      let changeLi = ()=>{
          liArray[1].innerHTML = "123"
        //   liArray.forEach((item,index)=>{
        //       item.innerHTML = "积云"
        //   })
      }

      return {
          tagName,
          array,
          tagLi,
          changeLi
      }
  },
  created(){
      this.$nextTick(()=>{
          console.log((this as any).$refs["tagName"].innerHTML);
      })
      
  }

});
</script>
