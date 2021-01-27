<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane tab="系列课程">
      </a-tab-pane>
      <a-tab-pane key="2" tab="计算机应用" force-render>
        <computer-application></computer-application>
      </a-tab-pane>
      <a-tab-pane key="3" tab="物理学">
        <physics></physics>
      </a-tab-pane>
      <a-tab-pane key="4" tab="生物技术">
        <biotechnology></biotechnology>
      </a-tab-pane>
      <a-tab-pane key="5" tab="现代文学">
        <modern-literature></modern-literature>
      </a-tab-pane>
      <a-tab-pane key="6" tab="科学与技术">
        <science-application></science-application>
      </a-tab-pane>
    </a-tabs>
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
  for (let i = 0; i < 8; i++) {
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
          defaultPageSize: 10,
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
.flex{
  display: flex;
  flex-direction: row;
}
.header{
  justify-content: space-between;
  align-items: center;
}
.column-space{
  margin-top: 12px;
}
.list-item{
  border-radius: 4px;
  border: solid 2px #eeeeee;
  padding: 5px;
  cursor: pointer;
  background-color: #ffffff;
}
.list-item:hover{
  border: solid 2px #1bcbb4;
  box-shadow: 2px 2px 20px #dddddd;
}
.decoration{
  font-size: 12px;
  color: #666666;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
}
.footer-presenter{
  color: #222222;
  font-weight: 600;
}
.hot-img{
  position: absolute;
  top: 0px;
  left: 17px;
}
.item-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}
.title-text{
  font-size: 15px;
  font-weight: 600;
  color: #222222;
  width: 150px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title-width{
  width: 155px;
}
.collect{
  align-items: center;
}
.collect-text{
  font-family: MicrosoftYaHei;
  font-size: 11px;
  color: #666666;
  margin-left: 3px;
}
.item-footer{
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #666666;
  border-top: 1px dashed #eaeaea;
  justify-content: space-between;
  padding: 5px;
}
.header{

}
.image{
  width: 100%;
  /*height: 128px;*/
}
.icon-star{
  font-size: 13px;
}


</style>
