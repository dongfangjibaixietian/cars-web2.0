<template>
  <div class="user-wrap">
    <Back column="修改手机密码"></Back>
    <div class="ele-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <PhoneNumber :phoneNumber.sync="form.phoneName" placeholder="忘记密码" />
        </el-form-item>
        <Password :password.sync="form.password" :passwordConfirm.sync="form.passwordConfirm" />
        <PasswordConfirm :passwordConfirm.sync="form.passwordConfirm"/>
        <el-form-item>
          <Code :phoneNumber="form.code" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import PhoneNumber from "../../components/account/phonenumber";
import Password from "../../components/account/password";
import Code from "../../components/code/index";
import PasswordConfirm from "../../components/account/passwordConfirm";
import { Register } from "../../api/account";

export default {
  name: "Username",
  components: { PhoneNumber, Code, Password, PasswordConfirm },
  data() {
    return {
      form: {
        phoneName: "",
        password: "",
        passwordConfirm: "",
        code: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.register()
    },
    register() {
      const requestData = {
        username: this.form.phoneName,
        password: this.form.password,
        code: this.form.code
      };
      Register(requestData).then((res)=>{
        this.$router.push({
          name: "User",
        })
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.user-wrap {
  padding: 0 30px;
}

.user-info {
  display: flex;
  padding: 84px 0 80px 10px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 6px solid #2f343a;
  }
  .meta {
    flex: 1;
    padding-left: 17px;
  }
  .name {
    color: #909090;
    line-height: 43px;
    font-size: 18px;
  }
  span {
    display: inline-block;
    height: 27px;
    padding: 0 17px;
    background-color: #10a0f2;
    border-radius: 100px;
    line-height: 27px;
    color: #fff;
    font-size: 14px;
  }
}

.group-links {
  a {
    position: relative;
    display: block;
    margin: 0 -30px;
    padding: 0 30px;
    height: 64px;
    line-height: 64px;
    // color是字体颜色，background-color是背景颜色
    color: rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    font-size: 15px;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin: 0 16px -10px 32px;
  }
}
.logout {
  position: absolute;
  left: 50%;
  bottom: 60px;
  width: 165px;
  height: 58px;
  margin-left: -82px;
  background-color: #2d3339;
  border-radius: 100px;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 18px;
  border: none;
  outline: none;
}
.arrow::after {
  content: "";
  position: absolute;
  right: 30px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
  opacity: 0.1;
}
.button-black {
  display: block;
  width: 100%;
}
</style>
