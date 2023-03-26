import axios from "axios";
import { ref } from "vue";

export function searchMovies(value) {
  // this.isPostLoading = true;
  try {
    setTimeout(async () => {
      console.log(value)
      // let link = "https://www.omdbapi.com/?s=" + value+"&apikey=e1b88ce";
      // let response = await axios.get(link)
      // if (response.data.Response !== 'False') {
      //   response.data.Search.forEach(element => {
      //   this.searchList.push(element)
      //   this.isPostLoading = false;
      //   });
      // }
      // else {
      //   this.isError = true;
      //   this.msgError = response.data.Error;
      //   this.isPostLoading = false;
      // }
    }, 500)
  } catch (e) {
  alert('error')
  }



  return {
  }
}