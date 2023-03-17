<template>
  <div class="poster-main-page" :style="posterStyle">
    <div v-if="this.poster" class="poster-page"></div>
  </div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)"
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
    }
  }
};
</script>

<style scoped>
.poster-page {
  opacity: 0.8;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(54, 41, 61) 100%
  );
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.poster-main-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}
</style>