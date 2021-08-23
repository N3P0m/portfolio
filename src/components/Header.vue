<template>
  <header class="wrapper-outer wrapper-nav">
    <transition name="shadow">
      <div class="wrapper-nav__shadow" v-if="show.shadow" @click="burger"></div>
    </transition>
    <div class="wrapper-inner nav">
      <burger-menu @change="burger" :checked="show.shadow" />
      <transition name="nav" @enter="enterNav" @after-leave="afterLeaveNav">
        <div class="nav-container" :class="navСontainer" v-show="show.nav">
          <nav class="nav-main">
            <ul class="nav-main-list">
              <li
                v-for="(navLink, index) in navLinks"
                :key="index"
                class="nav-main-list__item"
              >
                <a
                  class="nav-main-list__link"
                  :class="{
                    'nav-main-list__link--active':
                      navLink.name == linkActiveClass,
                  }"
                  :href="'#' + navLink.name"
                  @click.prevent="$emit('scroll', navLink.name)"
                  >{{ navLink.text }}</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import BurgerMenu from "@/components/UI-copmonents/BurgerMenu.vue";

export default {
  components: {
    BurgerMenu,
  },
  props: {
    linkActiveClass: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      show: {
        shadow: false,
        nav: false,
      },
      navСontainer: {
        "nav-container--active": false,
      },
      navLinks: [
        {
          name: "home",
          text: "Главная",
        },
        {
          name: "about",
          text: "Обо мне",
        },
        {
          name: "skills",
          text: "Навыки",
        },
        {
          name: "portfolio",
          text: "Портфолио",
        },
        {
          name: "contacts",
          text: "Контакты",
        },
      ],
    };
  },

  methods: {
    burger() {
      this.show.shadow = !this.show.shadow;
      this.show.nav = !this.show.nav;
    },

    resize() {
      if (document.documentElement.clientWidth <= 768) {
        this.show.nav = false;
        this.show.shadow = false;
      } else {
        this.show.nav = true;
      }
    },
    enterNav(done) {
      this.navСontainer["nav-container--active"] = true;
      done;
    },
    afterLeaveNav(done) {
      this.navСontainer["nav-container--active"] = false;
      done;
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
  unmounted: function () {
    window.removeEventListener("resize", this.resize);
  },
};
</script>
