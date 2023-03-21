<template>
  <div class="movie">
    <div class="movie__poster" :style="setPoster"
      @mouseenter="isShow=!isShow"
      @mouseleave="isShow=!isShow"
      @mouseover="$emit('setPosterBg', this.movie.Poster)"
    >
      <div class="movie__info" v-if="isShow">
        <div class="movie__title">
          {{ movie.Title }}
          <div class="movie__year">{{ movie.Year }}</div>
        </div>
        <div class="movie__btns">
          <div class="movie__btn"
            @click="modalVisible"
          >
            Info
          </div>
          <div class="movie__btn" @click="$emit('remove', movie)" @click.prevent>Delete</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import MyModal from "@/components/UI/MyModal";

export default {
  data: () => ({
    isShow: false
  }),
  components: {
    MyModal,
  },
  props: {
    movie: {
      type: Object,
      requared: true,
    }
  },
  computed: {
    setPoster() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      }
    }
  },
  methods: {
    modalVisible() {
      this.$emit("modalVisible", this.movie.imdbID);
    }
  }


}
</script>

<style scoped>
.movie {
  margin-bottom: 25px;
  color: #fff;
}
 .movie__poster {
  height: 440px;
  max-width: 300px;
}

.movie__info {
  padding: 10px;
  height: 100%;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.movie__info:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  display: flex;

}
.movie:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

.movie__btns {
  display: flex;
  justify-content: space-around;
}

.movie__btn {
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 5px 25px;
  margin-bottom: 10px;
  cursor: pointer;
}
.movie__btn:hover{
  background: #f8f9fa;
  color: #000;
}
.movie__title {
  font-size: 24px;
}
.movie__year {
  font-size: 16px;
}

</style>