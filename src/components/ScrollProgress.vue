<template>
  <div class="scroll-progress">
    <div
      class="scroll-progress__text"
      :class="{ 'scroll-progress__text--hide': text.top == '100%' }"
      :style="text"
    >
      Demo zone
    </div>
    <div class="scroll-progress__outer">
      <div class="scroll-progress__inner" :style="progressSize"></div>
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
      progressSize: {
        height: "0",
      },
      text: {
        top: "0",
      },
      scrollik: "10%",
      showing: false,
    };
  },
  methods: {
    progressBar() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-portfolio",
          //   markers: true,
          onEnter: () => (this.showing = true),
          start: "top 20%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          onUpdate: (self) => {
            this.text.top = `${self.progress * 100}%`;
            this.progressSize.height = `${self.progress * 100}%`;
          },
        },
      });
      tl.set(".scroll-progress__outer", { x: "300%" })
        .set(".scroll-progress__text", {
          transformOrigin: "top left",
          rotate: 45,
          opacity: 0,
        })
        .to(".scroll-progress__outer", { opacity: 1 })
        .to(".scroll-progress__outer", {
          x: 0,
          duration: 0.5,
          ease: "bounce.out",
        })
        .to(".scroll-progress__text", {
          transformOrigin: "top left",
          rotate: 0,
          duration: 1.6,
          ease: "elastic.out(1, 0.3)",
          opacity: 1,
        })
        .set(".scroll-progress__text", { transition: 0.6 });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.progressBar());
  },
  unmounted() {
    window.remooveEventListener("scroll", this.progressBar());
  },
};
</script>

<style></style>
