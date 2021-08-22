<template>
  <div class="skills-soft">
    <h2 class="ta-c">Навыки</h2>
    <p class="skills__text ta-c">Я умею работать в таких программах, как:</p>
    <ul class="skills-soft-list">
      <li
        class="skills-soft-list__item"
        v-for="program in programs"
        :key="program.id"
      >
        <img
          :src="program.path"
          alt="Figma"
          class="skills-soft-list__item-img"
        />
        <p class="skills-soft-list__item-name ta-c" v-html="program.name"></p>
        <div class="stars">
          <div
            v-for="star in stars.max"
            :key="star.id"
            :class="{
              'stars__item--active': star <= program.starsActive,
            }"
            class="stars__item"
          >
            <img
              :src="stars.link"
              alt="Звезда рейтинга"
              class="stars__item-img"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Program",

  data() {
    return {
      programs: [
        {
          name: "Adobe </br> Photoshop",
          path: require("../assets/img/3-Skills/photoshop.svg"),
          starsActive: 4,
        },
        {
          name: "Adobe </br> Illustrator",
          path: require("../assets/img/3-Skills/illustrator.svg"),
          starsActive: 3,
        },
        {
          name: "GitHub",
          path: require("../assets/img/3-Skills/github.svg"),
          starsActive: 3,
        },
        {
          name: "Figma",
          path: require("../assets/img/3-Skills/figma.svg"),
          starsActive: 4,
        },
      ],
      stars: {
        max: 5,
        link: require("../assets/img/3-Skills/star.svg"),
      },
    };
  },
};
</script>
