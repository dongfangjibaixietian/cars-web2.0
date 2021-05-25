<template>
  <div>
    <button type="button" class="button-vcode" :disabled="disabled">
      获取验证码
    </button>
    <el-input placeholder="验证码" v-model="form.code"></el-input>
  </div>
</template>

<script>
export default {
  name: "Code",
  data() {
    return {
        // 控制验证码按钮是否能点击
      disabled: false,
      form: {
        code: "",
      },
    };
  },
  props: {
    phoneNumber: {
      type: String,
      default: "",
    },
  },
  watch: {
    phoneNumber: {
      handler(newValue, oldValue) {
        this.disabled = newValue ? true : false;
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>