<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <img  class="logo__icon" src="@/assets/icon-movie.png">
        <span class="logo__title">MovieDB</span>
      </div>
      <div class="search" @click="removeSearchInput" >
        <input class="search__input" placeholder="Search..." v-model.lazy="searchValue" @keyup.enter="$emit('search', this.searchValue)"/>
        <div class="search__close"
          @click="$emit('removeSearch', this.searchValue)"
          >&#x2715; </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  methods: {
    removeSearchInput() {
      this.searchValue = '';
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 70px;
  background: rgba(36, 9, 52, 0.7);
}
.search {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-right: 8px;

}
.search__close {
  color: #443B54;
  margin: 5px;
  cursor: pointer;
  font-weight: 900;
}
.search__close:hover {
  color:#a9a3b3;
}
.search__input {
  width: 100%;
  border-radius: 5px;
  height: 35px;
  padding: 5px;
  background: #443B54;
  color: #fff;
  cursor: pointer;
  border: none;
}
.search__input:hover {
  background:#8f84a2;
  border: none;
  outline: none;
}
.search__input:focus-visible {
  background:#8f84a2;
  border: none;
  outline: none;
}

.logo__icon {
  height: 35px;
  margin: -7px 5px 0 20px;
}
.logo__title {
  color: white;
  font-size: 16px;
}

</style>
