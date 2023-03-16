<template>
  <div id="app" class="app">


    <Navbar />
    <MoviesList :moviesList="moviesList" @remove="removeMovie"/>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import IDs from "@/store/imdb_top250";
import MoviesList from '@/components/MoviesList';
import MoviesItem from '@/components/MoviesItem';
import Navbar from '@/components/Navbar'

export default {
  data: () => ({
    moviesList: [],
    pageLimit: 12,
    currentPage: 1,
    top250IDs: IDs,
    totalPages: 0,
  }),
  components: {
    Navbar,
    MoviesItem,
    MoviesList,
  },
  mounted() {
    this.fetchMovies();
    const options = {

    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMoreMovies()
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  methods: {
    async fetchMovies() {
      const from = this.currentPage * this.pageLimit - this.pageLimit;
      const to = this.currentPage * this.pageLimit;
      const moviesToFetch = this.top250IDs.slice(from, to);
      this.totalPages = Math.ceil(this.top250IDs.length / this.pageLimit);
      moviesToFetch.forEach(async id => {
        let link = "http://www.omdbapi.com/?i=" + id +"&apikey=e1b88ce";
        let response = await axios.get(link);
        this.moviesList.push(response.data);
        }
      )
    },
    async loadMoreMovies() {
      this.currentPage +=1;
      const from = this.currentPage * this.pageLimit - this.pageLimit;
      const to = this.currentPage * this.pageLimit;
      const moviesToFetch = this.top250IDs.slice(from, to);
      this.totalPages = Math.ceil(this.top250IDs.length / this.pageLimit);
      moviesToFetch.forEach(async id => {
        let link = "http://www.omdbapi.com/?i=" + id +"&apikey=e1b88ce";
        let response = await axios.get(link);
        this.moviesList.push(response.data);
        }
      )
    },
    removeMovie(movie) {
      this.moviesList.forEach(element => {
        if (element.imdbID == movie.imdbID)
          this.moviesList = this.moviesList.filter(p => p.imdbID !== movie.imdbID)
      });
    }
  }
}
</script>

<style>
.app {
  background: #340A4D;
}
.title {
  color: #fff;
  margin: 0 20px 20px;
  font-size: 40px;
}
</style>
