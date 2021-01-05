<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!--  首页头部    -->
      <a-layout-header>
        <index-header></index-header>
      </a-layout-header>
      <!--  轮播图    -->
      <div class="carousel-space">
        <slide-show></slide-show>
      </div>
      <!--   主体内容   -->
      <div class="layout-con">
        <div class="layout-contain">
          <a-layout>
            <a-layout-content>
              <div class="tab-contain">
                <a-tabs default-active-key="1" @change="callback">
                  <a-tab-pane key="1" tab="全部">
                    <all></all>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="直播" force-render>
                    <live-broadcast></live-broadcast>
                  </a-tab-pane>
                  <a-tab-pane key="3" tab="直播预告">
                    <live-preview></live-preview>
                  </a-tab-pane>
                  <a-tab-pane key="4" tab="点播">
                    <on-demand></on-demand>
                  </a-tab-pane>
                  <a-tab-pane key="5" tab="课程评比">
                    <course-evaluation></course-evaluation>
                  </a-tab-pane>
                  <a-tab-pane key="6" tab="课件下载">
                    <courseware-download></courseware-download>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-layout-content>
            <a-layout-sider style="flex: 0 0 280px;max-width: 280px;width: 280px;">
              <side-bar></side-bar>
            </a-layout-sider>
          </a-layout>
        </div>
      </div>
      <!--  页脚    -->
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
  import All from "./IndexTab/All";
  import CourseEvaluation from "./IndexTab/CourseEvaluation";
  import CoursewareDownload from "./IndexTab/CoursewareDownload";
  import LiveBroadcast from "./IndexTab/LiveBroadcast";
  import LivePreview from "./IndexTab/LivePreview";
  import OnDemand from "./IndexTab/OnDemand";
  import SideBar from "../components/SideBar";

  export default {
    name: "Index.vue",
    components: {
      IndexFooter,
      IndexHeader,
      SlideShow,
      All,
      CourseEvaluation,
      CoursewareDownload,
      LiveBroadcast,
      LivePreview,
      OnDemand,
      SideBar
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
    box-sizing: border-box;
    overflow: hidden;
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
      margin: 0 50px 0 40px;
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
      /*width: 100%;*/
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
      background: #f6f6f6;
      color: #fff;
    }
    .ant-layout-content {
      background-color: #f6f6f6;
      color: #333333;
      min-height: 120px;
      line-height: 120px;
      margin-right: 20px;
    }
  }

</style>