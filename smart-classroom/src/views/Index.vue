<template>
  <div>
    <index-header></index-header>
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
          <a-layout-content :style="{marginRight:'20px',marginTop: '34px',width:'899px',lineHeight: normal }">
            <div style="width: 899px;height:25px; ">
              <div style="width: 104px;height: 25px;float: left">
                <div style="width: 27px;height: 25px;float: left;">
                  <img src="../assets/sheying.png" style="line-height: 25px">
                </div>
                <div class="zhibo">直播预告</div>
              </div>
              <div class="geng"><a href="#" style="color: #999999">更多>></a></div>
            </div>



            <div>
              <a-list :grid="{ gutter: 34, column: 4 }" :data-source="data" :pagination="pagination">
                <a-list-item slot="renderItem" slot-scope="item, index" class="column-space">
                  <div class="list-item">
                    <a-list-item-meta :description="item.description" >
                      <div slot="title" class="header">
                        <img :src="item.img" alt="vedio" class="image">
                        <div class="title">
                          <template v-if="item.isCollected">
                            <div class="title-text" :title="item.title">{{ item.title }}</div>
                            <div class="flex collect">
                              <a-icon type="star" theme="filled" :style="{color: '#1bcbb4'}"/>
                              <span class="collect-text">已收藏</span>
                            </div>
                          </template>
                          <template v-else>
                            <div class="title-text title-width" :title="item.title">{{ item.title }}</div>
                            <div class="flex collect">
                              <a-icon type="star"/>
                              <span class="collect-text">收藏</span>
                            </div>
                          </template>
                        </div>
                      </div>
                    </a-list-item-meta>
                    <div class="decoration">
                      <div>
                        <span>{{item.startTime}}</span>
                        <span>开始</span>
                      </div>
                      <div>
                        <span>教室： </span>
                        <span>{{item.startTime}}</span>
                      </div>
                    </div>
                    <div class="flex item-footer">
                      <div class="footer-presenter">
                        <span>主讲人：</span>
                        <span>{{item.presenter}}</span>
                      </div>
                      <div>
                        <template v-if="item.isFollow">
                          <span><a-icon type="heart" theme="filled"/></span>
                          <span>已关注</span>
                        </template>
                        <template v-else>
                          <span><a-icon type="heart"/></span>
                          <span>关注</span>
                        </template>
                      </div>
                    </div>
                  </div>
                </a-list-item>
              </a-list>
            </div>

            <div style="width: 899px;height:25px; ">
              <div style="width: 104px;height: 25px;float: left">
                <div style="width: 27px;height: 25px;float: left;">
                  <img src="../assets/sheying.png" style="line-height: 25px">
                </div>
                <div class="zhibo">直播</div>
              </div>
              <div class="geng"><a href="#" style="color: #999999">更多>></a></div>
            </div>
            <div>
              <a-list :grid="{ gutter: 16, column: 3 }" :data-source="data_1">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <div class="list-item">
                    <a-list-item :description="item.description">
                      <div slot="">

                      </div>
                    </a-list-item>
                  </div>
                </a-list-item>
              </a-list>
            </div>

          </a-layout-content>
        </a-layout>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>

    </div>
  </div>
</template>

<script>
import IndexHeader from "../components/IndexHeader";
import SlideShow from "../components/SlideShow";
const listData = [];
const data = [];
const data_1=[];

for (let i = 0; i < 8; i++) {
  data.push({
    title: `理财公益免费VIP直播课程`,
    img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    isCollected: true,
    startTime: '5月26日 22：00',
    classroom: '明德楼 A101',
    presenter: '李丽',
    isFollow: false,
  });
}
for (let i=0;i<3;i++){
data_1.push({
  title: `理财公益免费VIP直播课程`,
  img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  isCollected: true,
  startTime: '5月26日 22：00',
  classroom: '明德楼 A101',
  presenter: '李丽',
  isFollow: false,
  });
}
export default {
  name: "Index.vue",
  components: {
    SlideShow,
    IndexHeader
  },
  data() {
    return {
      current: ['all'],
      listData,
      data,
      data_1,
    }
  },
  // computed: {
  //   rowSelection() {
  //     return {
  //       // onChange: (selectedRowKeys, selectedRows) => {
  //       //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //       // },
  //       getCheckboxProps: record => ({
  //         props: {
  //           disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //           name: record.name,
  //         },
  //       }),
  //     };
  //   },
  // },
  methods: {
    selectStyle(){

    }
  }
}
</script>

<style lang="less" scoped>
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
  /*background: rgba(16, 142, 233, 1);*/
  color: #fff;
  min-height: 120px;
  /*line-height: 120px;*/
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.zhibo{
  width: 77px;
  height: 25px;
  font-family: MicrosoftYaHei;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 1px;
  color: #333333;

}
.geng{
  width: 43px;
  height: 12px;
  font-family: MicrosoftYaHei;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 1px;
  color: #999999;
  float: right;
}
.flex{
  display: flex;
  flex-direction: row;
}
.container{
  width: 1032px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  padding: 5px 13px;
}
.contain-header{
  justify-content: space-between;
  align-items: center;
}
.contain-title{
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #1bcbb4;
  margin-top: 10px;
}
.tag-page{
  margin-top: 30px;
  text-align: left;
}
.avatar{
  border: 2px solid #1bcbb4;
  width: 80px;
  height: 80px;
}
.title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}
.title-text{
  font-family: MicrosoftYaHei;
  font-size: 15px;
  font-weight: 600;
  color: #222222;
  width: 152px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title-width{
  width: 170px;
}
.collect{
  align-items: center;
}
.collect-text{
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #666666;
  margin-left: 5px;
}
.item-footer{
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #666666;
  border-top: 1px dashed #eaeaea;
  justify-content: space-between;
  padding: 5px;
}

.course{
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #999999;
  margin-left: 15px;
  margin-right: 15px;
}
.followed{
  margin-left: 98px;
  margin-top: -10px;
}
.image{
  width: 100%;
  /*height: 128px;*/
}
.more{
  display: inline-block;
  font-size: 13px;
  cursor: pointer;
}
.more-list{
  margin-top: -10px;
  margin-bottom: 5px;
  text-align: right;
}
.more:hover{
  color: #1bcbb4;
}
.column-space{
  margin-top: 12px;
}
.list-item{
  border-radius: 4px;
  border: solid 1px #eeeeee;
  padding: 5px;
  cursor: pointer;
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

/* 覆盖默认的ant样式 */
.tag-vedio{
:global(.ant-tabs-nav .ant-tabs-tab){
  font-family: MicrosoftYaHei;
  font-size: 17px;
  padding: 8px 1px;
  font-weight: 500;
}
:global(.ant-tabs-ink-bar){
  height: 4px;
}
}

</style>





