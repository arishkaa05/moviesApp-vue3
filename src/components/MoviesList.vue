<template>
  <div class="container">
    <div class="title">IMDB Top 250</div>
    <div class="moviesList">
      <div class="row" style="margin: 0;">
        <div class="col-md-3 col-sm-6" v-for="movie in moviesList" :key="movie.id" >
          <MoviesItem
            :movie="movie"
            @remove="$emit('remove', movie)"
            @setPosterBg="onMoueOver(movie.Poster)"
            @modalVisible="onModalVisible"
          />
        </div>
      </div>
    </div>
    <MyModal
      v-model:show="modalVisible"
    >{{ selectedMovie }}
      <MovieInfo :movieInfo="movieModal"> </MovieInfo>
    </MyModal>
  </div>
</template>

<script>
import MoviesItem from '@/components/MoviesItem';
import MovieInfo from '@/components/MovieInfo';
import MyModal from './UI/MyModal';

export default {
  components: {
    MoviesItem,
    MovieInfo,
    MyModal,
  },
  data: () => ({
    modalVisible: false,
    selectedMovieID: "",
    movieModal: "",
  }),
  props: {
    moviesList: {
      type: Array,
      required: true,
    }
  },
  methods: {
    onMoueOver(poster) {
      this.$emit("changePoster", poster);
    },
    onModalVisible(id) {
      if (id) this.modalVisible=!this.modalVisible;
      this.selectedMovieID = id;
    },

  },
  computed: {
    selectedMovie() {
      this.moviesList.forEach(movie => {
        if (movie.imdbID === this.selectedMovieID) {
          this.movieModal=movie
          console.log(movie)
        }
      });
    }
  }
}
</script>

<style scoped>
.title {
  color: #fff;
  margin: 20px;
  font-size: 40px;
}
</style>