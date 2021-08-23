<template>
  <div ref="stack">
    <p class="skills__text ta-c">В работе использую следующий стек:</p>
    <div class="skills-stack">
      <div
        v-for="circle in circles"
        :key="circle.id"
        class="progress"
        :class="'progress-' + circle.number"
        ref="krug"
        @click="circleBar($event, circle)"
      >
        <svg
          class="progress-ring"
          :class="{
            'progress-ring--big': circle.number <= 3,
            'progress-ring--sm': circle.number > 3,
          }"
        >
          <circle class="progress-ring__circle progress-ring__circle-inner" />
          <circle
            class="progress-ring__circle progress-ring__circle-outer"
            :style="circle.circleStyleOuter"
          />
        </svg>
        <img
          :src="circle.path"
          :alt="circle.name"
          :class="{
            'progress-ring__img--big': circle.number <= 3,
            'progress-ring__img--sm': circle.number > 3,
          }"
        />
        <span class="progress__name">{{ circle.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      circles: [
        {
          name: "HTML5",
          path: require("../assets/img/3-Skills/html5.svg"),
          number: "1",
          percent: 280,
          circumference: Math.floor(2 * Math.PI * 92),
          circleStyleOuter: {
            strokeDasharray: `${578} ${578}`,
            strokeDashoffset: -578,
          },
        },
        {
          name: "CSS",
          path: require("../assets/img/3-Skills/css.svg"),
          number: "2",
          percent: 280,
          circumference: Math.floor(2 * Math.PI * 92),
          circleStyleOuter: {
            strokeDasharray: `${578} ${578}`,
            strokeDashoffset: -578,
          },
        },
        {
          name: "JavaScript",
          path: require("../assets/img/3-Skills/js.svg"),
          number: "3",
          percent: 260,
          circumference: Math.floor(2 * Math.PI * 92),
          circleStyleOuter: {
            strokeDasharray: `${578} ${578}`,
            strokeDashoffset: -578,
          },
        },
        {
          name: "Gulp",
          path: require("../assets/img/3-Skills/gulp.svg"),
          number: "4",
          percent: 260,
          circumference: Math.floor(2 * Math.PI * 72),
          circleStyleOuter: {
            strokeDasharray: `${452} ${452}`,
            strokeDashoffset: -452,
          },
        },
        {
          name: "SASS/SCSS",
          path: require("../assets/img/3-Skills/sass.svg"),
          number: "5",
          percent: 270,
          circumference: Math.floor(2 * Math.PI * 72),
          circleStyleOuter: {
            strokeDasharray: `${452} ${452}`,
            strokeDashoffset: -452,
          },
        },
        {
          name: "Vue.js",
          path: require("../assets/img/3-Skills/vue.svg"),
          number: "6",
          percent: 250,
          circumference: Math.floor(2 * Math.PI * 72),
          circleStyleOuter: {
            strokeDasharray: `${452} ${452}`,
            strokeDashoffset: -452,
          },
        },
      ],
    };
  },
  methods: {
    circleBar() {
      this.circles.forEach((element) => {
        element.circleStyleOuter.strokeDashoffset =
          -1 *
          (element.circumference -
            (element.percent / 100) * element.circumference);
      });
    },

    scrollTrigger() {
      ScrollTrigger.create({
        trigger: this.$refs.stack,
        onEnter: () => this.circleBar(),
        start: "top 20%",
        end: "bottom 80%",
      });
    },
  },

  /* eslint-disable no-unused-vars */
  mounted() {
    window.addEventListener("scroll", this.scrollTrigger());
  },
  unmounted() {
    window.remooveEventListener("scroll", this.scrollTrigger());
  },
  /* eslint-enable no-unused-vars */
};
</script>
