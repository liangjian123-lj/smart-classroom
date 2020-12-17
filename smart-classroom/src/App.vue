<template>
  <div id="app">
    <header-bar></header-bar>
    <main-content class="margin-top"></main-content>
  </div>
</template>

<script>
  import HeaderBar from "./components/HeaderBar";
  import MainContent from "./components/MainContent";
export default {
  name: 'App',
  components: {
    HeaderBar,
    MainContent
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #F6F6F6;
  }
  .margin-top{
    margin-top: 20px;
  }
</style>
