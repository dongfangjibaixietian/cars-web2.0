<template>
  <div class="NavBar">
    <ul>
      <li><i class="icon icon-w-44 icon-help"></i></li>
      <li><i class="icon icon-w-44 icon-search"></i></li>
      <li><a class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-w-44 icon-location" @click="slocation"></i></li>
      <li><i class="icon icon-w-44 icon-user" @click="toUser"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toUser() {
      this.$router.push({
        name:"User",
      })
    },
    slocation () {
      // 调用store里面的方法用commit
      this.$store.commit("location/SELFLOCATION")
    },
  }
};
</script>

<style lang="scss">
.NavBar {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  text-align: center;
  bottom: 86px;
  li {
    display: inline-block;
  }
  .icon {
    margin: 0 17px;
    vertical-align: middle;
    cursor: pointer;
    background-color: $color-main;
    border-radius: 100px;
  }
}
.select-car-btn {
  cursor: pointer;
  display: block;
  width: 240px;
  height: 84px;
  margin: 0 17px;
  border-radius: 100px;
  line-height: 84px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  background-color: $color-main;
}
</style>
