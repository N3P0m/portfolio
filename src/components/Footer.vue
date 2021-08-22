<template>
  <footer class="wrapper-outer wrapper-contacts">
    <div class="wrapper-inner">
      <h2 class="ta-c">Контакты</h2>
      <p class="contact-text ta-c">
        Хотите связаться со мной ? <br />
        Ищите меня здесь
      </p>
      <div class="socials">
        <a
          class="socials__item"
          v-for="social in socials"
          :key="social.id"
          :href="social.link"
          target="_blank"
          rel="noopener"
        >
          <img :src="social.icon" :alt="social.alt" class="socials__item-img" />
        </a>
      </div>
      <a class="mail" href="mailto:neeepom@gmail.com">neeepom@gmail.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      socials: [
        {
          link: "https://t.me/N3P0m",
          icon: require("../assets/img/5-Contacts/telegram.svg"),
          alt: "Telegram",
        },
        {
          link: "https://www.instagram.com/neeepom/",
          icon: require("../assets/img/5-Contacts/instagram.svg"),
          alt: "Instagram",
        },
        {
          link: "https://vk.com/dima_tomin",
          icon: require("../assets/img/5-Contacts/vk.svg"),
          alt: "VK",
        },
      ],
    };
  },
};
</script>
