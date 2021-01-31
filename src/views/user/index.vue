<template>
  <div class="user-wrap">
    <div class="user-info">
      <img src="../../assets/images/face.png" alt="">
      <div class="meta">
        <h4 class="name">409019683@qq.com</h4>
        <span>文明驾驶分
          <strong>0</strong>
        </span>
      </div>
    </div>
    <ul class="group-links">
      <!--tag="a"意思是将router-link改为a标签  -->
      <router-link to="aa" tag="a">
        <i class="icon icon-user-link-1"></i>
        我的帐户
      </router-link>
      <router-link to="aa" tag="a">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link to="aa" tag="a">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a">
        <i class="icon icon-user-link-5"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
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
    display: block;
    margin: 0 -30px;
    padding: 0 30px;
    height: 64px;
    line-height: 64px;
    // color是字体颜色，background-color是背景颜色
    color: rgba(255, 255, 255, .4);
    border-bottom: 1px solid rgba(255, 255, 255, .03);
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
</style>
