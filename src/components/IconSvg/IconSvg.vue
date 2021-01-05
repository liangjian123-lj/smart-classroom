<template>
  <div>
    <span class="iconfont" :class="iconTag"></span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "IconSvg",
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      iconTag() {
        return `${this.name}`;
      }
    }
  }
</script>

<style scoped>
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 2em;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>