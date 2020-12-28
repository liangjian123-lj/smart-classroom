<template>
  <div>
    <header-bar></header-bar>
    <div class="banner" >
      <slide-show></slide-show>
    </div>
    <div id="components-layout-demo-basic" :style="{marginTop:'19px'}">
      <a-layout :style="{width:'1180px',margin:'0 auto',}">
        <a-layout>
          <a-layout-header :style="{width:'900px',height:'50px',padding:'0px'}">
            <a-menu v-model="current" mode="horizontal" :style="{width: '900px',height:'50px',lineHeight:'50px',border:'1px solid #eeeeee',borderRadius:'4px', }">
              <a-menu-item key="all" :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">全部</a>
              </a-menu-item>
              <a-menu-item key="live" :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">直播</a>
              </a-menu-item>
              <a-menu-item key="preview" :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">直播预告</a>
              </a-menu-item>
              <a-menu-item key="spaced " :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">点播</a>
              </a-menu-item>
              <a-menu-item key="curriculum " :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">课程评比</a>
              </a-menu-item>
              <a-menu-item key="download" :style="{marginRight:'50px'}">
                <a href="#" target="_blank" rel="noopener noreferrer">课件下载</a>
              </a-menu-item>
            </a-menu>
          </a-layout-header>
          <a-layout-content :style="{marginRight:'20px',marginTop: '34px'}">Content</a-layout-content>
        </a-layout>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>

    </div>
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import SlideShow from "../components/SlideShow";
export default {
  name: "Index.vue",
  components: {
    SlideShow,
    HeaderBar
  },
  data() {
    return {
      current: ['all'],
    }
  }
}
</script>

<style scoped>
.banner{
  margin-top:20px;
}
#components-layout-demo-basic {

  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>





