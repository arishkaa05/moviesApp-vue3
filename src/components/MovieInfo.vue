<template>
  <div class="movie__info-modal">
    <div class="row">
      <div class="col-md-3">
        <div class="movie-poster-wrap">
          <div class="movie__poster" :style="setPoster"></div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="movie__title" >{{ this.movieInfo.Title }}</div>
        <div class="movie__plot">{{ this.movieInfo.Plot }}</div>
        <div class="movie__info-mini">
          <div class="movie__mini">{{ this.movieInfo.Year }}</div>
          <div class="movie__mini">{{ this.movieInfo.Country }}</div>
          <div class="movie__mini">{{ this.movieInfo.Runtime }}</div>
          <div class="movie__mini">{{ this.movieInfo.Language }}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
    }
  },
  computed: {
    setPoster() {
      return {
        "background-image": `url(${this.movieInfo.Poster})`,
      }
    }
  },
}
</script>

<style scoped>
.movie__info-modal {
  padding: 20px;
}
.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.movie__poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.movie__title {
  font-size: 24px;
  font-weight: 600;
}
.movie__info-mini {
  display: flex;
}
.movie__mini {
  margin: 0 5px;
  background: #187434;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  border-radius: 9px;

}
</style>