<template>
  <div class="container">
    <div class="title">IMDB Top 250</div>
    <div class="moviesList">
      <div class="row" style="margin: 0;">
        <div class="col-md-3 col-sm-6" v-for="movie in moviesList" :key="movie.id" >
          <MoviesItem  :movie="movie" @remove="$emit('remove', movie)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesItem from '@/components/MoviesItem';

export default {
  components: {
    MoviesItem,
  },
  props: {
    moviesList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style>

</style>