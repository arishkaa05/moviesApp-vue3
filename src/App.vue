<template>
  <div id="app" class="app">
    <PosterBg :poster="posterBg" />
    <Header
      @search="searchMovie"
      @removeSearch="removeSearch"
    />
    <div v-if="isError" class="msgError">{{ msgError }}</div>
    <template v-else>
      <MoviesList
        v-if="!isPostLoading"
        :movieTitle="listTitle"
        :moviesList="listOfMovie"
        @remove="removeMovie"
        @changePoster="onChangePoster"/>
      <Loader v-else/>
    </template>

    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import IDs from "@/store/imdb_top250";
import MoviesList from '@/components/MoviesList';
import MoviesItem from '@/components/MoviesItem';
import Header from '@/components/Header'
import PosterBg from "@/components/PosterBg";
import Loader from '@/components/UI/Loader';

export default {
  components: {
    Header,
    MoviesItem,
    MoviesList,
    PosterBg,
    Loader,
  },
  data: () => ({
    moviesList: [],
    searchList: [],
    pageLimit: 12,
    currentPage: 1,
    top250IDs: IDs,
    totalPages: 0,
    posterBg: "",
    isPostLoading: false,
    isError: false,
    msgError: '',
  }),
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
  computed: {
    listTitle() {
      return this.searchList.length > 0 ? "Search result" : "IMDB Top 250";
    },
    listOfMovie() {
      return this.searchList.length > 0 ? this.searchList : this.moviesList;
    }
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
      this.isPostLoading = true;
      try {
        setTimeout(async () => {
          let link = "https://www.omdbapi.com/?s=" + value+"&apikey=e1b88ce";
          let response = await axios.get(link)
          if (response.data.Response !== 'False') {
            response.data.Search.forEach(element => {
            this.searchList.push(element)
            this.isPostLoading = false;
            });
          }
          else {
            this.isError = true;
            this.msgError = response.data.Error;
            this.isPostLoading = false;
          }
        }, 500)
      } catch (e) {
      alert('error')
      }
    },
    removeSearch() {
      this.isError = false;
      this.msgError = '';
      this.searchList = []
    }
  }
}
</script>

<style>
.app {
  position: relative;
}
.observer {
  height: 30px;
}
.msgError{
  color: white;
  font-size: 36px;
  text-align: center;
  margin: 40px;
  padding-bottom: 800px;
}
</style>
