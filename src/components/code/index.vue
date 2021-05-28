<!-- 这是做验证码的源代码 -->
<template>
  <div>
    <el-button
      type="button"
      class="button-vcode"
      :disabled="disabled"
      @click="handlerCode()"
      :loading="loading"
    >
      {{ button_text }}
    </el-button>
    <el-input placeholder="验证码" v-model="form.code"></el-input>
  </div>
</template>

<script>
import { GetCode } from "../../api/account";
export default {
  name: "Code",
  data() {
    return {
      // 控制验证码按钮是否能点击
      disabled: true,
      // 判断验证码的loading状态
      loading: false,
      form: {
        code: "",
      },
      timer: null,
      button_text: "获取验证码",
    };
  },
  props: {
    phoneNumber: {
      type: String,
      default: "",
    },
  },
  methods: {
    handlerCode() {
      const requestData = {
        username: this.username,
        type: "register",
      };
      this.loading = true;
      GetCode(requestData).then((res) => {
        console.log(res);
        this.loading = false;
        this.countDown();
      });
    },
    // 倒计时获取验证码方法
    countDown() {
      let second = 10;
      //   防止按钮重复点击
      this.disabled = true;
      //   更换按钮文本
      this.button_text = `倒计时${second}秒`;
      this.timer = setInterval(() => {
        second--;
        this.button_text = `倒计时${second}秒`;
        if (second == 0) {
          this.button_text = `重新获取`;
          this.disabled = false;
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
  watch: {
    phoneNumber: {
      handler(newValue, oldValue) {
        this.disabled = newValue ? false : true;
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>