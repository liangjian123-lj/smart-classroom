<template>
  <div class="contain">
    <header-bar></header-bar>
    <div class="con-content">
      <div class="nav-side">
        <navigation></navigation>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from "./Navigation";
  import HeaderBar from "./HeaderBar";
  export default {
    name: "MainContent.vue",
    components: {
      Navigation,
      HeaderBar
    }
  }
</script>

<style scoped>
  .contain{
    width: 100%;
    height: 100%;
    margin-top: 0px;
    /*background-color: red;*/
  }
  .nav-side{
    width: 1280px;
    background: #f6f6f6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .con-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    /*height: 100%;*/
  }
</style>