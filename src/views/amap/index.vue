<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :events="events" class="amap-demo"> </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "amap",
  data() {
    return {
      map: null,
      zoom: 18,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom, //初始化地图层级
      });
    });
  },
  watch: {
    "$store.state.location.selfLocation": {
      handler() {
        console.log(888);
      },
    },
  },
};
</script>

<style scoped>
.amap-wrap {
  height: 100vh;
}
</style>