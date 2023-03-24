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
      "linear-gradient(90deg, rgba(9,8,47,1) 0%, rgba(84,20,119,1) 100%)"
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
  background-image: linear-gradient(90deg, rgba(9,8,47,1) 0%, rgba(84,20,119,1) 100%);
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