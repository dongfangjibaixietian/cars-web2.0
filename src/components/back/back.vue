<template>
  <div class="header-back">
    <div class="back">
      <i class="ico"></i>
      <h4 class="title">{{ column }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Back",
  props: {
      column: {
          type: String,
          default: ""
      }
  }
};
</script>

<style lang="scss" scoped>
.header-back {
  position: relative;
  height: 147px;
  .back {
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
  }
  .ico {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0;
    display: inline-block;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    &:after {
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        left: 0;
        top: 12px;
        border-left: 2px solid #00a3ff;
        border-top: 2px solid #00a3ff;
        transform: rotate(-45deg);
    }
  }
  .title {
    font-size: 16px;
    margin-left: 33px;
    color: #fff;
  }
}
</style>