import axios from "axios";
import { ref, onMounted } from "vue";

export function fetchMovies(IDs, pageLimit) {

  const moviesList = ref([])
  const totalPages = ref(0)
  const isPostLoading = ref(true)
  const currentPage = ref(1)
  const top250IDs = IDs
  const fetching = async () => {
    try {
        setTimeout(async () => {
          const from = currentPage.value * pageLimit - pageLimit;
          const to = currentPage.value * pageLimit;
          const moviesToFetch = top250IDs.slice(from, to);
          totalPages.value = Math.ceil(top250IDs.length / pageLimit);
          moviesToFetch.forEach(async id => {
            let link = "http://www.omdbapi.com/?i=" + id +"&apikey=e1b88ce";
            let response = await axios.get(link);
            moviesList.value.push(response.data);
            }
          )
          isPostLoading.value = false;
        }, 1000)
      } catch (e) {
        alert('error')
      } finally {
    }
  }

  onMounted(fetching)

  return {
    moviesList,
    totalPages,
    isPostLoading,
    currentPage
  }
}