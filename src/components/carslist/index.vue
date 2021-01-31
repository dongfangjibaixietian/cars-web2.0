<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-header">
          <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款" />
          <span>Mustang 2019款</span>
        </h4>
        <p class="cars-name">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-number">粤 B745N8</h4>
            <div>
              <ul class="cars-electric">
                <li class="actice"></li>
                <li class="actice"></li>
                <li class="actice"></li>
                <li class="actice"></li>
                <li class="actice"></li>
                <li class="actice"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <sub>约</sub>
                <strong>600</strong>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/images/pic001.jpg" alt="" />
      </div>
      <footer>
        <a href="" class="cars-parking">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-item-detail" :style="'height:' + height">
      <div class="scroll-swap">
        <h4 class="column">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-header">
            <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款" />
            <span>Mustang 2019款</span>
          </h4>
          <p class="cars-name">新能源汽车 5座</p>
        </header>
        <img src="../../assets/images/pic001.jpg" alt="" />
        <div class="clearboth">
          <div class="cars-number cars-number2">粤 B745N8</div>
          <p class="distance distance2">
            <sub>约</sub>
            <strong>600</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <div class="rel">
            <span class="e-high"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="hint-info">取车需支付12.0元停车费，实际补贴12.0元</p>
        <ul class="cars-type-list">
          <li class="current">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
        </ul>
        <div class="clearboth">
          <span class="float-left">参保《全面保障服务》用车更放心</span>
          <i class="float-right"></i>
          <i class="float-right current"></i>
        </div>
      </div>
      <a href="javascript: void(0);" class="select-car-btn">预约用车</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "CarsList",
  props: {
    height: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.cars-item {
  width: 505px;
  height: 257px;
  background-color: #fff;
  margin: auto;
  box-sizing: border-box;
  padding: 30px 30px 0px 30px;
  border-radius: 24px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
}

.cars-item-detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .column {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 19px;
    font-size: 20px;
    color: #34393f;
    border-bottom: 1px solid #e1e1e1;
    .close {
      position: absolute;
      right: 0px;
      top: 0px;
      display: block;
      width: 26px;
      height: 26px;
      cursor: pointer;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1px;
        margin-top: -10px;
        height: 28px;
        border-left: 2px solid #999c9f;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
.select-car-btn {
  position: absolute;
  left: 50%;
  margin-left: -42px;
  bottom: -42px;
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
}

header {
  display: flex;
  h4,
  p {
    flex: 1;
  }
}

.cars-header {
  img {
    display: inline-block;
    height: 34px;
    vertical-align: middle;
    margin-right: 10px;
  }
}

.cars-name {
  font-size: 16px;
  opacity: 0.5;
  text-align: center;
  line-height: 34px;
}

.cars-content {
  position: relative;
  margin: 11px 0 7px;
  &:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    overflow: hidden;
  }
  img {
    float: right;
    height: 120px;
  }
  .info {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .cars-number {
    font-size: 18px;
  }
  .cars-electric {
    padding-top: 10px;
    display: inline-block;
    li {
      display: inline-block;
      width: 7px;
      height: 24px;
      margin-right: 3px;
      background-color: #e1e1e1;
      border-radius: 100px;
      &.actice {
        background: linear-gradient(#17abfa, #108dd9);
      }
    }
  }
}

.distance {
  margin-left: 5px;
  display: inline-block;
  strong {
    margin: 0 5px;
    font-size: 22px;
  }
  sub {
    position: relative;
    top: -2px;
  }
  sub:nth-child(1) {
    opacity: 0.8;
  }
}

.clearboth {
  &:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    overflow: hidden;
  }
}

.distance2 {
  float: right;
}

.cars-number2 {
  float: left;
  font-size: 24px;
}

.cars-parking {
  position: relative;
  display: block;
  border-top: 1px solid #e1e1e1;
  color: $color-main;
  opacity: 0.8;
  line-height: 53px;
  &:after {
    content: "";
    position: absolute;
    right: 0px;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -8px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    transform: rotate(45deg);
  }
}

.cars-electric-box {
  padding: 15px;
  margin-top: 17px;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .e-bg {
    display: block;
    height: 8px;
    background-color: #e1e1e1;
    border-radius: 100px;
  }
  .e-high {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #0f9cee;
    height: 100%;
    width: 80%;
    border-radius: 100px;
  }
}
.rel {
  position: relative;
}

.hint-info {
  margin: 32px 0 28px;
  color: $color-main;
  text-align: center;
}

.cars-type-list {
  li {
    height: 43px;
    margin-bottom: 15px;
    padding: 0 17px 0 20px;
    background-color: #f3f3f3;
    border-color: #f3f3f3;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 43px;
    &.current {
      border-color: #0f9cee;
    }
  }
}
.name {
  float: left;
}
.price {
  float: right;
}

.scroll-swap {
  overflow-y: auto;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: #cccccc;
  &.current {
    background-color: $color-main;
  }
  &:before {
    content: "";
    display: block;
    width: 8px;
    height: 4px;
    margin: 6px 0 0 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
  }
}

</style>