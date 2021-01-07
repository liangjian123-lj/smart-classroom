<template>
  <div>
    <a-list :grid="{ gutter: 34, column: 3 }" :data-source="data" :pagination="pagination">
      <a-list-item slot="renderItem" slot-scope="item, index" class="column-space">
        <template>
          <div class="list-item">
            <a-list-item-meta :description="item.description" >
              <div slot="title" class="flex header">
                <div>
                  <img :src="item.img" alt="vedio" class="image">
                  <img src="../../assets/hot.png" class="hot-img">
                </div>
                <div class="item-title-live">
                  <div class="title-text-live" :title="item.title">{{ item.title }}</div>
                  <div class="living">正在直播中…</div>
                  <div class="footer-presenter-live">
                    <span>主讲人：</span>
                    <span>{{item.presenter}}</span>
                  </div>
                </div>
              </div>
            </a-list-item-meta>
            <div class="flex item-footer">
              <div>
                <span>教室： </span>
                <span>{{item.classroom}}</span>
              </div>
              <div class="flex">
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
                <div class="flex margin-live">
                  <template v-if="item.isCollected">
                    <div class="flex collect">
                      <a-icon type="star" theme="filled" :style="{color: '#1bcbb4'}" class="icon-star"/>
                      <span class="collect-text">已收藏</span>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex collect">
                      <a-icon type="star"  class="icon-star"/>
                      <span class="collect-text">收藏</span>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  const data = [];
  //视频
  for (let i = 0; i < 9; i++) {
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
    name: "LiveBroadcast.vue",
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
  .hot-img{
    position: absolute;
    top: 0px;
    left: 17px;
  }

  .title-text-live{
    font-size: 15px;
    font-weight: 600;
    color: #222222;
    width: 145px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;
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
  .margin-live{
    margin-left: 10px;
  }
  .living{
    font-size: 12px;
    color: #f91a44;
    font-weight: 600;
  }
  .item-title-live{
    margin-left: 4px;
    text-align: left;
  }
  .footer-presenter-live{
    font-size: 12px;
    color: #222222;
    margin-top: 20px;
  }
</style>
