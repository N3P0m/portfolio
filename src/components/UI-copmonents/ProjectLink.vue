<template>
  <a class="project-link" :href="link" target="_blank" rel="noopener">
    <img :src="choiseImgLink" alt="Ссылка на проект" />
  </a>
</template>

<script>
export default {
  name: "ProjectLink",
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    choiseImgLink() {
      let imageLink = "";
      if (this.link.includes("git")) {
        imageLink = require("@/assets/img/common/git-hub-link.svg");
      }
      if (this.link.includes("figma")) {
        imageLink = require("@/assets/img/common/figma-link.svg");
      }
      return imageLink;
    },
  },
};
</script>
