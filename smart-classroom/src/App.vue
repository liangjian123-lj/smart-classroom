<template>
  <div id="app">
    <!-- 教职工会员中心页面   -->
    <template v-if="$route.meta.showNav">
      <header-bar></header-bar>
      <main-content class="margin-top"></main-content>
    </template>
    <!-- 平台门户页面   -->
    <template v-else>
      <index></index>
    </template>
  </div>
</template>

<script>
  import HeaderBar from "./components/HeaderBar";
  import MainContent from "./components/MainContent";
  import Index from "./views/Index";
export default {
  name: 'App',
  components: {
    HeaderBar,
    MainContent,
    Index
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
    height: 100vh;
  }
  .margin-top{
    margin-top: 20px;
  }
</style>
