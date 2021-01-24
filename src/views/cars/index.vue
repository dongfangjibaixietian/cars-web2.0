<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><CarsList /></swiper-slide>
        <swiper-slide><CarsList /></swiper-slide>
        <swiper-slide><CarsList /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import CarsList from "../../components/carslist/index";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    CarsList,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    };
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
.cars-swiper-wrap {
  padding: 0px 155px;
}
</style>
