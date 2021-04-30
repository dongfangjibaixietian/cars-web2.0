<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "APP",
  mounted() {
    document.addEventListener("mouseup", (e) => {
      var userdiv = document.getElementById("router-wrap");
      var carsdiv = document.getElementsByClassName("cars-wrap")[0];
      if (carsdiv && !carsdiv.contains(e.target)) {
        const isRequestCarsList = this.$store.state.app.isRequestCarsList;
        if(!isRequestCarsList) {
          this.$store.commit("app/SET_CARS_LIST_STATUS",false)
        }
        this.$router.push({
          name: "Index",
        });
      }
      // 打印后会发现。e.target显示的是当前点击的具体div块的内容
      console.log(e.target);
      if (userdiv && !userdiv.contains(e.target)) {
        this.$router.push({
          name: "Index",
        });
      }
    });
  },
}
</script>
<style lang="scss">
#app {}

</style>
