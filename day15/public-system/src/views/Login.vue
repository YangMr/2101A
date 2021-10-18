<template>
  <!-- 1. 问题: 实现登录布局的时候遇到了外边距的塌陷问题  解决方案: 核心: 触发bfc   1. 给父元素加overflow:hidden; 2. 给父元素设置相对定位,给子元素使用绝对定位 -->
  <!-- 2. 问题: 当快速点击登录按钮时,会触发多次请求  解决方案: 通过customRef自定义防抖函数 -->
  <div class="login-wrapper">
    <div class="login-center">
      <h2 class="login-title">舆情监控系统后台管理-IT营</h2>
      <dl>
        <dd>
          <span>用户名: </span>
          <input type="text" v-model="username" class="text" placeholder="用户名" />
        </dd>
        <dd>
          <span>密码: </span>
          <input type="password" class="text" v-model="password" placeholder="密码" />
        </dd>
        <dd>
          <span>验证码: </span>
          <input type="text" class="verify" v-model="verify" placeholder="验证码" />
          <!-- 渲染验证码 -->
          <i class="svgImg" v-html="svgImg" @click="getCaptcha"></i>
        </dd>
        <dd>
          <button class="login-button" @click="submit"></button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { useThrottle } from "@/hook/useThrottle";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
//引入userApi接口文件
import userApi from "@/api/user";
export default defineComponent({
  name: "Login",
  setup() {
    //获取路由对象
    let router = useRouter();
    //获取store对象
    let store = useStore();

    //定义响应式变量来保存验证码图片(svgImg)以及svgKey
    let svgImg = ref("");

    //定义登录接口要传递的参数
    let loginParams = reactive({
      username: "",
      password: "",
      svgKey: "",
      verify: "",
    });

    //调用获取验证码接口
    let getCaptcha = () => {
      userApi.getCaptcha().then((response: any) => {
        console.log(response);
        svgImg.value = response.data.svgImg;
        loginParams.svgKey = response.data.svgKey;
      });
    };
    //页面初始化时调用获取验证码接口
    getCaptcha();

    //创建登录方法
    let doLogin = () => {
      console.log("456");
      //调用登录接口
      userApi.doLogin(loginParams).then((response: any) => {
        if (response.data.success) {
          let menuArray = reactive([
            {
              id: 1,
              name: "起始页",
              icon: "icon-zhuye",
              children: [
                {
                  id: "4",
                  title: "起始页",
                  children: [
                    {
                      id: 41,
                      name: "后台首页",
                      path: "/index",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              name: "舆情报告",
              icon: "icon-shujukanban",
              children: [
                {
                  id: "5",
                  title: "舆情报告",
                  children: [
                    {
                      id: 51,
                      name: "全部舆情",
                      path: "/all",
                    },
                    {
                      id: 52,
                      name: "正面舆情",
                      path: "/positive",
                    },
                    {
                      id: 53,
                      name: "负面舆情",
                      path: "/negative",
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              name: "舆情设置",
              icon: "icon-shezhi",
              children: [
                {
                  id: "6",
                  title: "舆情设置",
                  children: [
                    {
                      id: 61,
                      name: "舆情关键词设置",
                      path: "/keyword",
                    },
                    {
                      id: 62,
                      name: "舆情报警设置",
                      path: "/alarm",
                    },
                  ],
                },
              ],
            },
          ]);

          response.data.result.menu = menuArray;
          //获取token
          let { token } = response.data.result;
          //使用vuex 和 本地存储
          store.dispatch("setChangeToken", token);
          store.dispatch("setChangeUserInfo", response.data.result);
          //提示登录成功
          message.success(response.data.message);
          //跳转到主页
          router.push({ path: "/" });
        } else {
          message.info(response.data.message);
        }
      });
    };
    //调用防抖函数 ---  自己手写防抖函数  -- 调用loadsh库,封装了防抖和节流
    let submit = useThrottle(doLogin, 1000);

    return {
      ...toRefs(loginParams),
      svgImg,
      getCaptcha,
      submit,
    };
  },
});
</script>

<style scoped lang="scss">
.login-wrapper {
  height: 100%;
  background-color: #01458e;
  position: relative;

  .login-center {
    width: 740px;
    height: 300px;
    background: url("../assets/loginbg.jpg") no-repeat center;
    position: absolute;
    left: 50%;
    top: 120px;
    margin-left: -370px;

    .login-title {
      font-size: 24px;
      font-weight: bold;
      height: 40px;
      line-height: 40px;
      color: #01458e;
      padding: 10px 0 0 10px;
    }

    dl {
      width: 500px;
      // background-color : red;
      color: #01458e;
      font-size: 15px;
      padding: 10px 0 0 20px;

      dd {
        height: 32px;
        line-height: 32px;
        margin-top: 16px;

        span {
          width: 80px;
          display: inline-block;
          text-align: right;
          margin-right: 10px;
        }

        input.text {
          width: 280px;
          height: 30px;
          line-height: 30px;
        }

        .verify {
          width: 90px;
          height: 30px;
          line-height: 30px;
          margin-right: 3px;
        }

        .login-button {
          width: 123px;
          height: 29px;
          border: none;
          margin: 10px 0 0 88px;
          padding: 2px 8px 0;
          cursor: pointer;
          background: url("../assets/login_btn.jpg") no-repeat;
        }

        .svgImg {
          cursor: pointer;
          height: 30px;
          float: right;
          position: relative;
          left: -150px;
          top: -15px;
        }
      }
    }
  }
}
</style>
