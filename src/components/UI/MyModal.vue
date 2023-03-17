<template>
  <div v-if="show" class="modal" @click="hideModal">
    <div class="modal__content" @click.stop>
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
.modal__content {
  margin: auto;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 450px;
  width: 720px;
  cursor: pointer;
}
</style>
