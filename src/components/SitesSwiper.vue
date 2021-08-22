<template>
  <div class="sites">
    <swiper
      class="sites-container swiper-container"
      :grabCursor="true"
      :navigation="{
        nextEl: '.sites__btn-next',
        prevEl: '.sites__btn-prev',
      }"
      :controller="{ control: controlledSwiper }"
    >
      <swiper-slide
        class="sites__item swiper-slide"
        v-for="slide in slides"
        :key="slide.id"
      >
        <img class="sites__item-img" :src="slide.img" alt="" />
        <a class="sites__link" target="_blank" rel="noopener" :href="slide.link"
          >Открыть</a
        >
      </swiper-slide>
    </swiper>
    <button class="sites__btn sites__btn-next">
      <img
        class="sites__btn-img"
        src="@/assets/img/4-Portfolio/btn-next.svg"
        alt="Сдедующий слайд"
      />
    </button>
    <button class="sites__btn sites__btn-prev">
      <img
        class="sites__btn-img"
        src="@/assets/img/4-Portfolio/btn-prev.svg"
        alt="Предыдущий слайд"
      />
    </button>
  </div>

  <swiper @swiper="setControlledSwiper" :allow-touch-move="false">
    <swiper-slide class="links-slide" v-for="link in slides" :key="link.id">
      <Project-link :link="link.projecLinks.git" />
      <Project-link :link="link.projecLinks.figma" />
    </swiper-slide>
  </swiper>
</template>

<script>
/* eslint-disable no-unused-vars */

import SwiperCore, { Navigation, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Navigation, Controller]);

/* eslint-enable no-unused-vars */

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          img: require("@/assets/img/4-Portfolio/image-1.webp"),
          link: "https://n3p0m.github.io/productivity_for_portfolio/",
          projecLinks: {
            git: "https://n3p0m.github.io/",
            figma:
              "https://www.figma.com/file/cy10u3edK8RvVOqRLb3tVi/clean_and_simple_website_freebie_work_file-(Copy)?node-id=0%3A1&viewport=241%2C48%2C1",
          },
        },
        {
          img: require("@/assets/img/4-Portfolio/portfolio-thumb.webp"),
          link: "https://n3p0m.github.io/productivity_for_portfolio/",
          projecLinks: {
            git: "https://n3p0m.github.io/",
            figma:
              "https://www.figma.com/file/cy10u3edK8RvVOqRLb3tVi/clean_and_simple_website_freebie_work_file-(Copy)?node-id=0%3A1&viewport=241%2C48%2C1",
          },
        },
      ],
      controlledSwiper: null,
    };
  },
  methods: {
    setControlledSwiper(swiper) {
      this.controlledSwiper = swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
.links-slide {
  display: flex;
  max-width: 100%;
  padding: 20px 0;
}
.swiper-slide {
  transition: 0.2s;
  opacity: 0;
  &-active {
    opacity: 1;
  }
}
</style>
