<template>
  <el-form-item
    id="password"
    prop="password"
    :rules="[{ validator: validatePassword, trigger: 'change' }]"
  >
    <el-input
      v-model="password"
      :placeholder="placeholder"
      v-on:input="enterInput"
    ></el-input>
  </el-form-item>
</template>

<script>
import { valid_password } from "../../utils/validdata";
export default {
  name: "Password",
  components: {},
  data() {
    return {
      password: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "密码",
    },
    passwordConfirm: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 实时监听输入事件的方法
    enterInput() {
      const valiStatus = valid_password(this.password);
      let value = valiStatus ? this.password : "";
      this.$emit("update:password", value);
    },
    //表单验证方法
    validatePassword(rule, value, callback) {
      //效验规则
      console.log(this.password);
      console.log(this.passwordConfirm);
      if (!this.password || this.password == "") {
        return callback(new Error("密码不能为空"));
      } else if (!valid_password(this.password)) {
        return callback(new Error("密码为6-20位的组合"));
      } else if (
        this.passwordConfirm &&
        this.password != this.passwordConfirm
      ) {
        //   console.log(this.password);
        //   console.log(this.passwordConfirm);
        return callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    },
  },
  watch: {
    passwordConfirm: {
      handler(newValue, oldValue) {
          if(newValue == this.password) {
            //   操作dom元素的方法，找到password下的.el-form-item__error元素，然后重新写这个dom元素的样式
              const errorDom = document.getElementById("password").querySelector(".el-form-item__error")
              if(errorDom) {
                  errorDom.style.display = "none";
              }
          }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>