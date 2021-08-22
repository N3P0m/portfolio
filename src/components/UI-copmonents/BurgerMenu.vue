<template>
  <label for="check" class="btn-burger" aria-label="Burger menu">
    <input
      class="btn-burger__checkbox"
      type="checkbox"
      id="check"
      :value="checked"
    />
    <span class="btn-burger__line"></span>
    <span class="btn-burger__line"></span>
    <span class="btn-burger__line"></span>
  </label>
</template>

<script>
export default {
  name: "BurgerMenu",
  props: {
    checked: {
      type: Boolean,
    },
  },
};
</script>
