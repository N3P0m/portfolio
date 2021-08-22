<template>
  <button class="form__btn" @click="$emit('validate')">
    <img
      class="form__btn-img"
      src="~@/assets/img/4-Portfolio/close-card.svg"
      alt="Кнопка добавить задачу"
    />
  </button>
</template>

<script>
export default {
  name: "addTaskBtn",
};
</script>
