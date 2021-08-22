<template>
  <section class="wrapper-outer wrapper-home">
    <transition @beforeEnter="beforeEnterDa" @enter="enterDa">
      <div v-show="show"><Circle /></div>
    </transition>
    <div class="wrapper-inner home">
      <transition @beforeEnter="beforeEnterDa" @enter="enterDa">
        <div class="home-content" v-show="show">
          <span class="home-content__name"> Томин<br />Дмитрий </span>
          <span class="home-content__des"
            >Фронтенд разработчик<br />23 года</span
          >
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import Circle from "@/components/Circle.vue";

export default {
  components: {
    Circle,
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    beforeEnterDa(el) {
      el.style.transform = "translateY(200%) scale(2)";
      el.style.opacity = 0;
    },
    enterDa(el, done) {
      gsap.to(el, {
        y: 0,
        scale: 1,
        opacity: 1,
        // height: 1000,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: done,
      });
    },
  },
};
</script>
