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
    <van-form
      :show-error="false"
      :show-error-message="false"
      :validate-first="true"
      ref="login-form"
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="login.user.username"
        icon-prefix="toutiao"
        left-icon="shouji"
        name="username"
        placeholder="请输入用户名"
        :rules="formRules.username"
      />
      <van-field
        v-model="login.user.password"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入密码"
        :rules="formRules.password"
      >
        <template #button>
          <van-count-down
            :time="1000 * 60"
            format="ss s"
            v-if="isCountDownShow"
          />
          <van-button
            v-else
            class="send_btn"
            size="mini"
            round
            @click.prevent="onSendSms"
          >发送验证码</van-button>
        </template>
      </van-field>

      <!--  登录按钮-->
      <div class="login_btn_warp">
        <van-button class="login_btn" type="info"  block >登录</van-button>
      </div>
      <!--  /登录按钮-->
    </van-form>

    <!--  /登录表单-->

  </div>
</template>
<script>
  import {login,sendSms} from "../../network/user";

  export default {
    name: "loginIndex",
    components: {},
    props: {},
    data() {
      return {
        login: {
          user: {
            username: "",
            password: "",
          }
        },
        formRules: {
          username: [
            {required: true, message: "请输入用户名"}
          ],
          password: [
            {required: true, message: "请输入密码"}
          ]
        },
        isCountDownShow:false
      }

    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {

    },
    methods: {

      //登录
      async onLogin() {
        this.$toast.loading({
          message: "登陆中",
          forbidClick: true,
          duration: 0
        })
        try {
          const res = await login(this.login)
          // Toast.success("登录成功")
          this.$toast.success("登录成功")
          // console.log(res.code)
        } catch (err) {
          this.$toast.fail("登录失败")
          console.log("登录失败", err.response.data.errors[0].msg)
        }

      },

      // 验证提示
      onFailed(error) {
        if (error.errors[0]) {
          this.$toast({
            message: error.errors[0].message,
            position: 'top'
          })
        }
      },

      //发送验证码
      async onSendSms() {
        try {
          await this.$refs['login-form'].validate('username')
          const code = await sendSms()
          this.$toast.success(code.data.code)
        } catch (error) {
          if (error && error.response && error.response.status === 429) {
            this.$toast.fail("请稍后获取")
          }
            this.$toast({
              message: error.message,
              position: 'top'
            })
        }
      }
    }
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
