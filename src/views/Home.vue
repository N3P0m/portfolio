<template>
  <div>
    <transition @beforeEnter="beforeEnterHeader" @enter="enterHeader">
      <Header
        v-show="show"
        @scroll="scroll"
        :linkActiveClass="linkActiveClass"
      />
    </transition>
    <home-section class="section" id="home" :show="show" />
    <about class="section" id="about" />
    <Skills class="section" id="skills" />
    <div class="section" id="portfolio"></div>
    <portfolio />
    <div class="section" id="portfolio"></div>
    <Footer class="section" id="contacts" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HomeSection from "@/components/HomeSection.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

import gsap from "gsap";

export default {
  name: "Home",
  components: {
    Header,
    HomeSection,
    About,
    Skills,
    Portfolio,
    Footer,
  },

  data() {
    return {
      show: false,
      linkActiveClass: "home",
      keyValue: "",
    };
  },

  methods: {
    showing() {
      this.show = true;
    },

    scroll(link) {
      window.scrollTo({
        top: document.getElementById(link).offsetTop - 80,
        behavior: "smooth",
      });
    },

    beforeEnterHeader(el) {
      el.style.transform = "translateY(-100%)";
    },
    enterHeader(el, done) {
      gsap.to(el, {
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "bounce.out",
        onComplete: done,
      });
    },
  },

  mounted() {
    window.addEventListener("load", this.showing);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.linkActiveClass = entry.target.id;
          }
        });
      },
      {
        rootMargin: "0px 0px -19% 0px",
        threshold: 0.5,
      }
    );
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  },
  unmounted: function () {
    window.removeEventListener("load", this.showing);
  },
};
</script>
