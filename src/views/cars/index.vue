<template>
  <div class="cars-wrap">
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
      <footer></footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  methods: {
    // changeUse() {
    //   this.$router.push({
    //     path: "/user",
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.cars-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}

.cars-item {
  width: 505px;
  height: 257px;
  background-color: #fff;
  margin: auto;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
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
        content: '.';
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
        background: linear-gradient(#17aBfa,#108dd9);
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
      opacity: .8;
    }
  }
}
</style>
