<template>
  <section class="wrapper-outer wrapper-skills">
    <div class="wrapper-inner skills">
      <Program />
      <Stack />
    </div>
  </section>
</template>

<script>
import Program from "./Program.vue";
import Stack from "./Stack.vue";
export default {
  components: {
    Program,
    Stack,
  },
};
</script>
