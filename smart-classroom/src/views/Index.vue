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
            <a-layout-content>
              <div class="tab-contain">
                <a-tabs default-active-key="1" @change="callback">
                  <a-tab-pane key="1" tab="全部">
                    全部
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="直播" force-render>
                    Content of Tab Pane 2
                  </a-tab-pane>
                  <a-tab-pane key="3" tab="直播预告">
                    Content of Tab Pane 3
                  </a-tab-pane>
                  <a-tab-pane key="4" tab="点播">
                    Content of Tab Pane 1
                  </a-tab-pane>
                  <a-tab-pane key="5" tab="课程评比">
                    Content of Tab Pane 2
                  </a-tab-pane>
                  <a-tab-pane key="6" tab="课件下载">
                    Content of Tab Pane 3
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-layout-content>
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
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    }
  }
</script>

<style lang="less" scoped>
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
  .tab-contain{
    text-align: center;
  }

  /* 覆盖默认的ant样式 */
  .tab-contain{
    :global(.ant-tabs-nav .ant-tabs-tab){
      font-family: MicrosoftYaHei;
      font-size: 15px;
      padding: 15px 5px;
      font-weight: 500;
      margin: 0 62px 0 50px;
    }
    :global(.ant-tabs-nav-container){
      background-color: #ffffff;
      border-radius: 4px;
      border: 2px solid #eeeeee;
    }
  }

  /*layout格局样式*/
  #components-layout-demo-basic {
    text-align: center;
    .ant-layout-header{
      width: 100%;
      background: #5DD5C8;
      height: 68px;
      padding: 0px;
    }
    .ant-layout-footer {
      background: #262f38;
      color: #fff;
      padding: 0px;
      line-height: 1.5;
    }
    .ant-layout-sider {
      background: #3ba0e9;
      color: #fff;
      line-height: 120px;
    }
    .ant-layout-content {
      /*background: rgba(16, 142, 233, 1);*/
      color: #333333;
      min-height: 120px;
      line-height: 120px;
      margin-right: 20px;
    }
  }

</style>