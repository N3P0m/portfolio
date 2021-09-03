<template>
  <section ref="portfolio" class="wrapper-outer wrapper-portfolio section">
    <Scroll-progress />
    <div class="wrapper-inner">
      <h2 class="portfolio-heading ta-c">Портфолио</h2>
      <div class="calculator">
        <Calculator class="calculator__body" />
        <div class="calculator__description">
          <h3 class="calculator__description-heading ta-c">Калькулятор</h3>
          <p class="calculator__description-text">
            Обыкновенный калькулятор. Логика работы осуществлена на фреймворке
            Vue.js. Реализован ввод с клавиатуры:
          </p>
          <ul class="calculator__keys-list">
            <li
              class="calculator__keys-item"
              v-for="key in keys"
              :key="key.id"
              v-html="key.text"
            ></li>
          </ul>
          <Project-link :link="`https://github.com/N3P0m/calculator`" />
        </div>
      </div>
      <div class="to-do-list">
        <Todolist />
        <Project-link :link="`https://github.com/N3P0m/to-do-list`" />
      </div>
      <Sites-swiper />
    </div>
  </section>
</template>

<script>
import Calculator from "./Calculator.vue";
import ScrollProgress from "./ScrollProgress.vue";
import SitesSwiper from "./SitesSwiper.vue";
import Todolist from "./To-do-list/Todolist.vue";

export default {
  components: {
    Calculator,
    Todolist,
    SitesSwiper,
    ScrollProgress,
  },
  data() {
    return {
      keys: [
        {
          text: `<kbd class="key">Backspace ⟵</kbd> - удалить`,
        },
        {
          text: `<kbd class="key">Enter ↵</kbd> - равно`,
        },
        {
          text: `<kbd class="key">С</kbd> - очистить`,
        },
      ],
    };
  },
};
</script>
