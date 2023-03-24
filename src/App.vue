<template>
  <div id="app" class="app">
    <PosterBg :poster="posterBg" />
    <Navbar
      @search="searchMovie"
    />
    <MoviesList
      v-if="!isPostLoading"
      :moviesList="moviesList"
      @remove="removeMovie"
      @changePoster="onChangePoster"/>
    <Loader v-else/>
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
import PosterBg from "@/components/PosterBg";
import Loader from '@/components/UI/Loader';

export default {
  data: () => ({
    moviesList: [],
    pageLimit: 12,
    currentPage: 1,
    top250IDs: IDs,
    totalPages: 0,
    posterBg: "",
    isPostLoading: false,
  }),
  components: {
    Navbar,
    MoviesItem,
    MoviesList,
    PosterBg,
    Loader,
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
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
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
          this.isPostLoading = false;
        }, 1000)
      } catch (e) {
        alert('error')
      } finally {

      }
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
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    async searchMovie(value) {
      let link = `http://www.omdbapi.com/?=${value}&apikey=e1b88ce`;
      const response = await axios.get(link)
      console.log(response)
      // setTimeout(()=> {
      //   this.moviesList.forEach(movie => {
      //   if (movie.Title.toLowerCase().includes(value))
      //     console.log(movie.Title)
      //   });
      // },500)
    }
  }
}
</script>

<style>
.app {
  position: relative;
  /* background-image: linear-gradient(90deg, rgba(9,8,47,1) 0%, rgba(84,20,119,1) 100%); */
}
.observer {
  height: 30px;
}
</style>
