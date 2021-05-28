<template>
  <el-form-item prop="passwordConfirm">
    <el-input
      v-model="passwordConfirm"
      :placeholder="placeholder"
      v-on:input="enterInput"
    ></el-input>
  </el-form-item>
</template>

<script>
// import { valid_password } from "../../utils/validdata";
export default {
  name: "PasswordConfirm",
  components: {},
  data() {
    return {
      passwordConfirm: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "确认密码",
    },
  },
  methods: {
    // 实时监听输入事件的方法
    enterInput() {
    //   const valiStatus = valid_password(this.passwordConfirm);
    //   let value = valiStatus ? this.passwordConfirm : "";
      this.$emit("update:passwordConfirm", this.passwordConfirm);
    },
    //表单验证方法
    // validatePassword(rule, value, callback) {
    //   //效验规则
    //   if (!this.password || this.password == "") {
    //     return callback(new Error("密码不能为空"));
    //   }else if(!valid_password(this.password)){
    //       return callback(new Error("密码为6-20位的组合"))
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>