<template>
  <div class="container">
    <!-- 点播列表标签页 -->
    <div class="tag-onDemand">
      <a-tabs default-active-key="1" @change="callback">
        <div slot="tabBarExtraContent">
          系列课程
        </div>
        <!-- 计算机应用 -->
        <a-tab-pane key="1" tab="计算机应用">
          <computer-application></computer-application>
        </a-tab-pane>
        <!-- 物理学 -->
        <a-tab-pane key="2" tab="物理学" force-render>
          <physics></physics>
        </a-tab-pane>
        <!-- 生物技术 -->
        <a-tab-pane key="3" tab="生物技术">
          <biotechnology></biotechnology>
        </a-tab-pane>
        <!-- 金融分析 -->
        <a-tab-pane key="4" tab="金融分析">
          <financial-analysis></financial-analysis>
        </a-tab-pane>
        <!-- 现代文学 -->
        <a-tab-pane key="5" tab="现代文学">
          <modern-literature></modern-literature>
        </a-tab-pane>
        <!-- 科学与应用 -->
        <a-tab-pane key="6" tab="科学与应用">
          <science-application></science-application>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
  import Biotechnology from "./OnDemand/Biotechnology";
  import ComputerApplication from "./OnDemand/ComputerApplication";
  import FinancialAnalysis from "./OnDemand/FinancialAnalysis";
  import ModernLiterature from "./OnDemand/ModernLiterature";
  import Physics from "./OnDemand/Physics";
  import ScienceApplication from "./OnDemand/ScienceApplication";

  const data = [];
  //点播
  for (let i = 0; i < 20; i++) {
    data.push({
      title: `理财公益免费VIP直播课程`,
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      isCollected: false,
      startTime: '5月26日 22：00',
      classroom: '明德楼 A101',
      presenter: '李丽',
      isFollow: false,
    });
  }
  export default {
    name: "OnDemand.vue",
    components: {
      Biotechnology,
      ComputerApplication,
      FinancialAnalysis,
      ModernLiterature,
      Physics,
      ScienceApplication
    },
    data(){
      return{
        data,
        pagination: {
          total: 100,
          defaultPageSize: 20,
          showTotal: total => `共 ${total} 条数据`,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '15', '20'],
        },
      }
    }
  }
</script>


<style scoped>

  /* 覆盖默认的ant样式 */
  .tag-onDemand >>> .ant-tabs-nav-container{
    background-color:transparent;
    border: none;
  }
  .tag-onDemand >>> .ant-tabs-extra-content{
    position: absolute;
    margin: 7px 20px 7px 100px;
    float: left  ! important;
    line-height: 40px;
    font-weight: bold;
    font-size: 14px;
  }
  .tag-onDemand >>> .ant-tabs-nav-wrap .ant-tabs-tab{
    margin: 0 20px;
  }
</style>
