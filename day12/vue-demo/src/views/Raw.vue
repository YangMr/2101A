<template>
  <div>
      <p>{{test}}</p>
      <p><button @click="changeTest">change test</button></p>

      <hr>

       <p>{{list}}</p>
      <p><button @click="changeList">change list</button></p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
export default defineComponent({
  name: 'Raw',
  setup(){
    //   toRaw可以将由reactive或readonly函数转换成响应式代理的普通对象，对普通对象的属性值进行修改,就不会更新视图界面。一般用于渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。
    let test = reactive({a : 1, b : {c : 2}});
            
    let changeTest = ()=>{
        let testState = toRaw(test)
        testState = reactive(testState);
        testState.b.c += 1
        console.log(testState)
    }

    //markRaw标记一个对象，使其永远不会转换为响应式数据，只能返回这个对象本身，一般用于有些值不应被设置为响应式的，比如第三方类实例或Vue组件对象等场景。

    let list = markRaw({
        goods : ["java","json","php"]
    })

    let changeList = () => {
        // list = reactive(list)
        list.goods.push("css")
        console.log(list)
    }

    return {
        test,
        changeTest,
        list,
        changeList
    }
  }
})
</script>

<style>
 
</style>

