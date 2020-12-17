<template>
  <div class="contain">
    <div class="nav-side">
      <navigation></navigation>
    </div>

  </div>
</template>

<script>
  import Navigation from "./Navigation";
  export default {
    name: "MainContent.vue",
    components: {
      Navigation
    }
  }
</script>

<style scoped>
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .nav-side{
    width: 1280px;
    background: #f6f6f6;
  }
</style>