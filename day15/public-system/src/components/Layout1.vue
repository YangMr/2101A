<template>
  <a-layout>
    <a-layout-header>
      <h2>UNI-ADMIN</h2>
      <a-menu @select="selectMenu" v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item v-for="(item, index) in menuArray" :key="index">
          <icon-font :type="item.icon"></icon-font>
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu
          theme="dark"
          style="width: 200px"
          mode="inline"
          :openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
        >
          <a-sub-menu :key="index" v-for="(item,index) in subMenuArray">
            <template #title>
              <icon-font type="icon-zhuye"></icon-font> {{item.title}}
            </template>
            <a-menu-item @click="selectSubMenu(subIndex)" :key="subIndex" v-for="(subItme,subIndex) in item.children">{{subItme.name}}</a-menu-item>
          </a-sub-menu>
    
        </a-menu>
      </a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import select from "ant-design-vue/lib/select";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2873861_628jzb9p1nk.js",
});
export default defineComponent({
  name: "Home",
  components: {
    IconFont,
  },
  setup() {
    let current = reactive<number[]>([0]);
    let openKeys = reactive<number[]>([0])
    let selectedKeys = reactive<number[]>([0])
    // let subMenuArray = reactive<any[]>([]);
    let menuArray = reactive([
      {
        id: 1,
        name: "起始页",
        icon: "icon-zhuye",
        children : [
          {
            id : "4",
            title : "起始页",
            children : [
              {
                id : 41,
                name : "后台首页"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "舆情报告",
        icon: "icon-shujukanban",
        children : [
          {
            id : "5",
            title : "舆情报告",
            children : [
              {
                id : 51,
                name : "全部舆情"
              },
              {
                id : 52,
                name : "正面舆情"
              },
              {
                id : 53,
                name : "负面舆情"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "舆情设置",
        icon: "icon-shezhi",
        children : [
          {
            id : "6",
            title : "舆情报告",
            children : [
              {
                id : 61,
                name : "舆情关键词设置"
              },
              {
                id : 62,
                name : "舆情报警设置"
              }
            ]
          }
        ]
      },
    ]);

    let selectMenu = (item: any) => {
      current[0] = item.key;
      selectedKeys[0] = 0
    };

    //依赖值的变化,具有缓存行
    let subMenuArray = computed(()=>{
      return menuArray[current[0]].children;
    })


    let selectSubMenu = (index:number) =>{
        selectedKeys[0] = index;
    }

    return {
      current,
      menuArray,
      selectMenu,
      openKeys,
      selectedKeys,
      subMenuArray,
      selectSubMenu
    };
  },
});
</script>

<style scoped lang="scss">
.ant-layout {
  height: 100%;

  .ant-layout-header {
    background-color: rgb(84, 92, 100);
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #f8f9fa;
    }

    .ant-menu {
      background: rgb(84, 92, 100);
    }
  }

  .a-layout-sider{
    width: 200px;
  }
}
</style>
