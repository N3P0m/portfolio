<template>
  <div class="circles">
    <div
      class="circles__img object"
      v-for="circle in circles"
      :key="circle.id"
      :class="circle.className"
      :data-index="circle.id"
      :ref="getArray"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: [
        {
          className: "circles__img-1",
          id: "-6",
        },
        {
          className: "circles__img-2",
          id: "2",
        },
        {
          className: "circles__img-3",
          id: "-2",
        },
        {
          className: "circles__img-4",
          id: "3",
        },
        {
          className: "circles__img-5",
          id: "7",
        },
        {
          className: "circles__img-6",
          id: "4",
        },
      ],
      circlesRef: [],
    };
  },

  methods: {
    getArray(el) {
      this.circlesRef.push(el);
    },
    parallax(event) {
      this.circlesRef.map((circle) => {
        let coeff = circle.getAttribute("data-index");
        let x = (event.clientX * coeff) / 200;
        let y = (event.clientY * coeff) / 200;

        circle.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    },
  },
  mounted: function () {
    window.addEventListener("mousemove", this.parallax);
  },
  unmounted: function () {
    window.removeEventListener("mousemove", this.parallax);
  },
};
</script>
