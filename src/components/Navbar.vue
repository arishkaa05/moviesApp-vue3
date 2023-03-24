<template>
  <div class="navbar">
    <div class="logo"></div>
    <div class="search" @input="$emit('search', this.searchValue)">
      <input class="search__input" placeholder="Search..." :value="searchValue" @input="onSearchValueChange"/>
    </div>
    <div class="btn__add">Add movie</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  methods: {
    onSearchValueChange(event) {
      this.searchValue = event.target.value;
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 100px;
  background: rgba(36, 9, 52, 0.7);
}
.search {
  width: 50%;
}
.search__input {
  width: 100%;
  border-radius: 5px;
  height: 35px;
  padding: 5px;
  background: #443B54;
  cursor: pointer;
  border: none;
}
.search__input:focus-visible {
  border: none;
  transform: scale(1.02);
}
</style>