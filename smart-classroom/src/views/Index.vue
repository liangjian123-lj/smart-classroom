<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <index-header></index-header>
      </a-layout-header>
      <div class="carousel-space">
        <slide-show></slide-show>
      </div>
      <div class="layout-con">
        <div class="layout-contain">
          <a-layout>
            <a-layout-content>Content</a-layout-content>
            <a-layout-sider>Sider</a-layout-sider>
          </a-layout>
        </div>
      </div>
      <a-layout-footer>
        <index-footer></index-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import IndexHeader from "../components/IndexHeader";
  import IndexFooter from "../components/IndexFooter";
  import SlideShow from "../components/SlideShow";
  export default {
    name: "Index.vue",
    components: {
      IndexFooter,
      IndexHeader,
      SlideShow
    }
  }
</script>

<style scoped>
  /*自定义样式*/
  .carousel-space{
   margin: 20px 0px;
  }
  .layout-con{
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-bottom: 20px;
  }
  .layout-contain{
    width: 1280px;
  }

  /*layout格局样式*/
  #components-layout-demo-basic {
    text-align: center;
  }
  #components-layout-demo-basic .ant-layout-header{
    background: #5DD5C8;
    height: 68px;
  }
  #components-layout-demo-basic .ant-layout-footer {
    background: #262f38;
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