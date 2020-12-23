<template>
  <div class="container">
    <!--  主题内容标题   -->
    <div class="flex contain-header">
      <div class="contain-title">关注和粉丝</div>
    </div>

    <!--  表格头部标签页  -->
    <div class="tag-page">
      <a-tabs default-active-key="1" @change="callback">
        <!--    我的关注      -->
        <a-tab-pane key="1" tab="我的关注">
          <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
            <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
              <div slot="extra">
                <div class="more-list">
                  <div class="more">
                    更多 >>
                  </div>
                </div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="vedio" class="image">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="vedio" class="image">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="vedio" class="image">
              </div>
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
        <!--   我的粉丝     -->
        <a-tab-pane key="2" tab="我的粉丝" force-render>
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
  //我的粉丝
  for (let i = 0; i < 100; i++) {
    data.push({
      title: `李丽`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: '吉林珠海大学计算机学院老师',
      course: '4',
    });
  }


  export default {
    name: "FollowsFans.vue",
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

<style scoped>
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
    align-content: center;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 194px;
    height: 118px;
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
    margin-top: 30px;
  }
  .list-con{

  }
</style>