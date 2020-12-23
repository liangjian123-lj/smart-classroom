<template>
  <div class="container">
    <!--  主题内容标题   -->
    <div class="flex contain-header">
      <div class="contain-title">我的收藏</div>
    </div>

    <!--  表格头部标签页  -->
    <div class="tag-vedio">
      <a-tabs default-active-key="1" @change="callback">
        <!--    视频      -->
        <a-tab-pane key="1" tab="视频">
          <a-list :grid="{ gutter: 34, column: 4 }" :data-source="data" :pagination="pagination">
            <a-list-item slot="renderItem" slot-scope="item, index" class="column-space">
              <div class="list-item">
                <a-list-item-meta :description="item.description" >
                  <div slot="title" class="header">
                    <img :src="item.img" alt="vedio" class="image">
                    <div class="title">
                      <div class="title-text" :title="item.title">{{ item.title }}</div>
                      <div class="flex collect">
                        <a-icon type="star" theme="filled" :style="{color: '#1bcbb4'}"/>
                        <span class="collect-text">收藏</span>
                      </div>
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
                    <span><a-icon type="heart" theme="filled"/></span>
                    <span>已关注</span>
                  </div>
                </div>
              </div>
            </a-list-item>
          </a-list>
        </a-tab-pane>
        <!--   课件     -->
        <a-tab-pane key="2" tab="课件" force-render>
          <a-list :grid="{ gutter: 66, column: 3 }" :data-source="data" :pagination="pagination">
            <a-list-item slot="renderItem" slot-scope="item, index" class="column-space">
              <a-list-item-meta :description="item.description">
                <div slot="title" class="header">
                  <div class="title">
                    <div>{{ item.title }}</div>
                    <div class="course">课程数： {{item.course}}</div>
                    <a-tag color="#1bcbb4">
                      已关注
                    </a-tag>
                  </div>
                </div>
                <a-avatar slot="avatar" :src="item.avatar" class="avatar"/>
              </a-list-item-meta>
              <div class="followed">
                <a-button>取消关注</a-button>
              </div>
            </a-list-item>
          </a-list>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
  const listData = [];      //我的关注
  //我的粉丝
  const data = [];
  //我的关注
  for (let i = 0; i < 100; i++) {
    listData.push({
      title: `李丽`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: '吉林珠海大学计算机学院老师',
      course: '3',
    });
  }
  //视频
  for (let i = 0; i < 100; i++) {
    data.push({
      title: `理财公益免费VIP直播课程`,
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      isCollected: true,
      startTime: '5月26日 22：00',
      classroom: '明德楼 A101',
      presenter: '李丽',
      isFollow: true,
    });
  }

  export default {
    name: "Favorites.vue",
    data() {
      return {
        listData,
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
    },
    computed: {
      rowSelection() {
        return {
          // onChange: (selectedRowKeys, selectedRows) => {
          //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          // },
          getCheckboxProps: record => ({
            props: {
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            },
          }),
        };
      },
    },
    methods: {
      selectStyle(){

      }
    }
  }
</script>

<style lang="less" scoped>
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
    width: 170px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
  .header{

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