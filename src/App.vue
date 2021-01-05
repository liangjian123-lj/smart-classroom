<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <!-- 教职工会员中心页面   -->
      <template v-if="$route.meta.showNav">
        <main-content class="margin-top"></main-content>
      </template>
      <!-- 平台门户页面   -->
      <template v-else>
        <index></index>
      </template>
    </a-locale-provider>
  </div>
</template>

<script>
  import HeaderBar from "./components/HeaderBar";
  import MainContent from "./components/MainContent";
  import Index from "./views/Index";

  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';
  moment.locale('zh-cn');

export default {
  name: 'App',
  components: {
    HeaderBar,
    MainContent,
    Index
  },
  data(){
    return{
      locale: zhCN,
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #F6F6F6;
    height: 100vh;
  }
  .margin-top{
    margin-top: 20px;
  }
</style>
