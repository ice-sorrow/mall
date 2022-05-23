<template>
<div class="login-container">
  <van-nav-bar
    class="app-nav-bar"
    title="登录 / 注册"
    left-text="返回"
    left-arrow
    @click-left="$router.back()"
  />
<!--  登录表单-->
  <van-cell-group>
    <van-field
      v-model="users.mobile"
      icon-prefix="toutiao"
      left-icon="shouji"
      placeholder="请输入手机号"
    />
    <van-field
      v-model="users.code"
      clearable
      icon-prefix="toutiao"
      left-icon="yanzhengma"
      placeholder="请输入验证码"
    >
      <template #button>
        <van-button class="send_btn" size="mini" round>发送验证码</van-button>
      </template>
    </van-field>
  </van-cell-group>
  <!--  /登录表单-->
<!--  登录按钮-->
  <div class="login_btn_warp">
    <van-button class="login_btn" type="info"  block>登录</van-button>
  </div>
  <div class="login_btn_warp">
    <van-button class="login_btn" type="info"  block>登录</van-button>
  </div>
  <!--  /登录按钮-->
</div>
</template>
<script>
  export default {
    name: "loginIndex",
    components:{

    },
    props:{

    },
    data(){
      return{
        users:{
          mobile:"",
          code:"",
        }
      }
    },
    computed:{

    },
    watch:{},
    created() {
    },
    mounted() {
    },
    methods:{}
  }
</script>

<style scoped lang="less">
  .login-container{
    .send_btn{
      width: 76px;
      height: 24px;
      background-color: #dedede;
      .van-button__text{
        color:#666;
        font-size: 11px ;
      }
    }
    .login_btn_warp{
      padding:26px 16px;
      .login_btn{
        background-color: #6db4fb;
        border: none;
        .van-button__text{
          font-size: 16px;
        }
      }
    }
  }
</style>
