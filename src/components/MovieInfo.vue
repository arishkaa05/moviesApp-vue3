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
        <StarRating :rating="this.movieInfo.imdbRating"/>
        <template v-if="this.movieInfo.Country">
          <div class="movie__plot">{{ this.movieInfo.Plot }}</div>
          <div class="movie__info-mini">
            <div class="movie__mini">{{ this.movieInfo.Year }}</div>
            <div class="movie__mini">{{ this.movieInfo.Country }}</div>
            <div class="movie__mini">{{ this.movieInfo.Runtime }}</div>
            <div class="movie__mini">{{ this.movieInfo.Language }}</div>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ this.movieInfo.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ this.movieInfo.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ this.movieInfo.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ this.movieInfo.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ this.movieInfo.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ this.movieInfo.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/StarRating";

export default {
  props: {
    movieInfo: {
      type: Object,
    }
  },
  components: {
    StarRating,
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
  font-size: 30px;
}
.movie__plot {
  font-size: 18px;
  margin-bottom: 10px;
}
.movie__info-mini {
  display: flex;
  margin: 15px 0;
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