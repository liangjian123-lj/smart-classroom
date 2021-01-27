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
          <div class="tag-content">
              <a-list :grid="{ gutter: 34, column: 4 }" :data-source="data" :pagination="pagination">
                <a-list-item slot="renderItem" slot-scope="item, index" class="column-space">
                      <div class="list-item">
                        <a-list-item-meta :description="item.description" >
                          <div slot="title" class="header">
                            <div>
                              <img :src="item.img" alt="vedio" class="image">
                              <img src="../../assets/hot.png" class="hot-img">
                            </div>
                            <div class="item-title">
                              <template v-if="item.isCollected">
                                <div class="title-text" :title="item.title">{{ item.title }}</div>
                                <div class="flex collect">
                                  <a-icon type="star" theme="filled" :style="{color: '#1bcbb4'}" class="icon-star"/>
                                  <span class="collect-text">已收藏</span>
                                </div>
                              </template>
                              <template v-else>
                                <div class="title-text title-width" :title="item.title">{{ item.title }}</div>
                                <div class="flex collect">
                                  <a-icon type="star"  class="icon-star"/>
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
        </a-tab-pane>
        <!-- 物理学 -->
        <a-tab-pane key="2" tab="物理学" force-render>
          物理学
        </a-tab-pane>
        <!-- 生物技术 -->
        <a-tab-pane key="3" tab="生物技术">
          生物技术
        </a-tab-pane>
        <!-- 金融分析 -->
        <a-tab-pane key="4" tab="金融分析">
          金融分析
        </a-tab-pane>
        <!-- 现代文学 -->
        <a-tab-pane key="5" tab="现代文学">
          现代文学
        </a-tab-pane>
        <!-- 科学与应用 -->
        <a-tab-pane key="6" tab="科学与应用">
          科学与应用
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
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
