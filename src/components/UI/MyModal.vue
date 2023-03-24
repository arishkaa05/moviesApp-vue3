<template>
  <div v-if="show" class="modal" @click="hideModal">
    <div class="modal__content" @click.stop>
      <div class="modal__head">
        <span>Movie view </span>
        <span @click="hideModal">&#x2715; </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false)
    }
  }

};
</script>

<style scoped>
.modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
}
.modal__head {
  background: linear-gradient(90deg, rgba(9,8,47,1) 0%, rgba(84,20,119,1) 100%);
  padding: 15px;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}
.modal__content {
  margin: auto;
  background: #f8f9fa;
  min-height: 450px;
  width: 720px;
  cursor: pointer;
}
</style>
