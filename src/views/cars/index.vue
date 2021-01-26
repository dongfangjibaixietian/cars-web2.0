<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><CarsList /></swiper-slide>
        <swiper-slide><CarsList /></swiper-slide>
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
        slidesPerView: 2,
        spaceBetween: 70,
        navigation: {
          nextEl: "button-next",
          prevEl: "button-prev",
        },
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
  .swiper-button-prev,
  .swiper-container {
    overflow: initial;
  }
  .swiper-button-next {
    top: 50%;
    width: 60px;
    height: 100px;
    margin-top: -50px;
    border-radius: 100px;
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
    transition: all .3s ease 0s;
    &.swiper-button-disabled {
      opacity: 1;
    }
    &:hover {
      background-color: $color-main;
    }
  }

  .swiper-button-prev {
    left: 53px;
    &:after {
      content: "";
      width: 17px;
      height: 17px;
      margin-left: 5px;
      border-left: 3px solid #000;
      border-top: 3px solid #000;
      transform: rotate(-45deg);
    }
    &:hover {
      &:after {
        border-left: 3px solid $color-blur;
        border-top: 3px solid $color-blur;
      }
    }
  }
  .swiper-button-next {
    right: 53px;
    &:after {
      content: "";
      width: 17px;
      height: 17px;
      margin-right: 5px;
      border-right: 3px solid #000;
      border-top: 3px solid #000;
      transform: rotate(45deg);
    }
    &:hover {
      &:after {
        border-right: 3px solid $color-blur;
        border-top: 3px solid $color-blur;
      }
    }
  }
}
</style>
