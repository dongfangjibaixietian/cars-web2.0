<template>
  <div class="cars-wrap">
    <section class="cars-item">
      <header>
          <h4 class="cars-header">
              <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
              <span>Mustang 2019款</span>
          </h4>
          <p class="cars-name">新能源汽车  5座</p>
      </header>
      <div class="cars-content"></div>
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
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
}

header {
    display: flex;
    h4, p {
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
    opacity: .5;
    text-align: center;
    line-height: 34px;
}

</style>
