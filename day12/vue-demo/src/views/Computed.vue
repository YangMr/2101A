<template>
    <h1>计算属性</h1>
    <p>价格: {{price}}</p>
    <p>数量: <button @click="amount > 1?amount-- : 0">-</button>{{amount}}<button @click="amount++">+</button></p>
    <hr>
    <p>总价: {{total}}</p>

    <hr>

    <div>
        昵称: <input type="text" v-model="setNickName"> {{getNickName}}
    </div>

    <div v-for="item in newArray" :key="item.id">
        <!-- <div v-if="item.id > 2">{{item.id}} -- {{item.className}}</div> -->
        {{item.id}} -- {{item.className}}
    </div>
</template>

<script lang="ts">
import { defineComponent,ref,onBeforeMount,onMounted ,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted, computed} from 'vue';


export default defineComponent({
  name: 'Home',
  setup(){
      let price = ref(10);
      let amount = ref(0);

      let total = computed(()=>{
          return  price.value * amount.value;
      })


      let getNickName = ref("")
      let setNickName = computed({
          get(){
              console.log("2")
              return getNickName.value; 
          },
          set(val:string){
              console.log("1")
              getNickName.value = val + "123"
          }
      })

      let arrays= [
          { id: 1, className : "java"},
          { id: 2, className : "php"},
          { id: 3, className : "python"},
          { id: 4, className : "javascript"},
      ]

      let newArray = computed(()=>{
          return arrays.filter((item,index)=>{
              return item.id > 2
          })
      })

      return {
          price,
          amount,
          total,
          getNickName,
          setNickName,
          arrays,
          newArray
      }
  }

});
</script>