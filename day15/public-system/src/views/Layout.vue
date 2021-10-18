<template>
  <a-layout>
    <a-layout-header class="header">
      <h2 class="logo">UNI-APP</h2>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '60px' }"
        @click="activeMenu"
      >
        <a-menu-item :key="index.toString()" v-for="(item,index) in menu">{{item.name}}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
          theme="dark"
        >
          <a-sub-menu :key="index.toString()" v-for="(item,index) in sliderMenus">
            <template #title>
              <span>
                <user-outlined />
                {{item.title}}
              </span>
            </template>
            <a-menu-item @click="activeSubMenu(subIndex)" :key="subIndex.toString()" v-for="(subItem,subIndex) in item.children">{{subItem.name}}</a-menu-item>
          </a-sub-menu>
          
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >          
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import { defineComponent, ref ,computed,reactive} from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },

  setup() {
    //定义默认选中菜单的数据
    let selectedKeys1 = reactive<string[]>(['0'])
    let selectedKeys2 = reactive<string[]>(['0'])
    let openKeys =  reactive<string[]>(['0'])
    
    //获取路由对象
    let router = useRouter()

    //获取vuex里面的userInfo里面的menu菜单数据
    let store = useStore();
    let menu = store.state.userInfo.menu;
    console.log(menu)

    //将点击的水平菜单下标赋值给selectedKeys1
    let activeMenu = (key:any)=>{
        selectedKeys1[0] = key.key
        let path = menu[selectedKeys1[0]].children[0].children[0].path;
        router.push({path})
    }

    //获取侧边栏菜单的数据
    let sliderMenus = computed(()=>{
        return menu[selectedKeys1[0]].children
    })

    //设置选择侧边栏菜单的下标
    let activeSubMenu = (index:number)=>{
       selectedKeys2[0] = index.toString();
       let path = menu[selectedKeys1[0]].children[0].children[index].path;
       router.push({path})
    }

    /*
     

    
    

      1. 使用脚手架创建项目
      2. 对项目进行基础配置
        - 关闭eslint
        - 跨域
        - 修改标题
        - 修改端口号
        - 自动打开浏览器

      3. 封装axios
      4. 封装api
      5. 创建登录页面以及配置登录路由
      6. 实现登录页面布局
      7. 实现登录功能
      8. 将登录成功的数据存储到vux和本地
      9. 实现页面权限
      10. 创建主页页面以及路由
      11. 实现主页布局
      
       1. 布局

          过

      2. 水平菜单的渲染

          95%

      3. 侧边栏菜单的渲染

        90%

      4. 对应模块的页面创建以及路由配置

        100%

      5. 对应模块的路由跳转

        100%


      6. 全部舆情api接口封装

        100%

      7. 获取全部舆情数据

        100%

      8. 渲染全部舆情数据

        90%

      9. 将舆情类型转化成 正面舆情和负面舆情

        90%


      10. 将发现时间转化为 年月日 时分秒

        90%


    */



    return {
      selectedKeys1,
      selectedKeys2,
      collapsed: ref(false),
      openKeys,
      menu,
      activeMenu,
      sliderMenus,
      activeSubMenu
    };
  },
});
</script>
<style scoped lang="scss">
.ant-layout{
    height : 100%;

    .header{
        height : 60px;
        display : flex;
        align-items: center;
        justify-content: space-between;

        .logo{
             color : #fff;
        }

    }
}


#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>