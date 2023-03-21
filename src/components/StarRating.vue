<template>
  <div class="star-rating">
    <span
      v-for="star in starLimit"
      :key="star"
      class="star star--outlined"
    >
    </span>
    <div :style="`width: ${ratingWidth};`" class="star-rating__colored">
    <span
      v-for="star in starLimit"
      :key="star"
      class="star star--colored"
    >
    </span>


  </div>
  </div>
  <span class="ratingAll">{{ this.rating }}/10</span>
</template>

<script>

export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 4
    }
  },
  data: () => ({
    starLimit: 10,
  }),
  computed: {
    ratingWidth() {
      console.log(this.rating / this.starLimit * 100)
      return this.rating / this.starLimit * 100 + '%';
    }
  }
}
</script>

<style scoped>
.star-rating {
  position: relative;
  display: inline-block;
}
.star-rating__colored {
  display: inline-flex;
  position: absolute;
  width: 0;
  height: 100%;
  top: 2px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
}
.star--colored {
    background: url('@/assets/star-yellow.png');
}
.star--outlined {
  background: url('@/assets/star-outline.png');
}
.ratingAll {
  color: #333;
  font-size: 20px;
  margin-left: 20px;
}

</style>