<template>
  <div>
    <!--  名师讲坛  -->
    <div class="side-item">
      <div class="flex header">
        <div class="flex flex-center">
          <icon-svg name="iconmingshihuicui" class="nav-icon"/>
          <div class="title">名师讲坛</div>
        </div>
        <div class="more">更多>></div>
      </div>
      <div class="fammous-con">
        <div v-for="(item,index) in famousCourse" :key="index" class="fammous-con box">
          <div class="img-con">
            <img :src="item.img" alt="vedio" class="image">
          </div>
          <div class="famous-title" :title="item.title">{{item.title}}</div>
          <div class="famous-presenter">讲师： {{item.presenter}}</div>
        </div>
        <div class="reload-con">
          <a-icon type="sync" class="reload-icon"/>
          <span class="reload">换一批</span>
        </div>
      </div>
    </div>
    <!--  名师课程表  -->
    <div class="course-con">
      <a-table :columns="columns" :data-source="data" class="course-table" :pagination=false>
<!--        <template slot="name" slot-scope="text">-->
<!--          <a>{{ text }}</a>-->
<!--        </template>-->
      </a-table>
    </div>
  </div>
</template>

<script>
  const famousCourse = [];
  //名师课程表
  const columns = [
    {
      title: '主讲人',
      dataIndex: 'person',
      width: '27%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'person' },
    },
    {
      title: '课程名称',
      width: '42%',
      className: 'courseName',
      dataIndex: 'courseName',
      ellipsis: true,
      align: 'center',
    },
    {
      title: '专业',
      width: '30%',
      className: 'profession',
      dataIndex: 'profession',
      ellipsis: true,
      align: 'center',
    },
  ];
  const data = [
    {
      key: '1',
      person: '郭涛',
      courseName: '零基础高数学基础',
      profession: '软件开发',
    },
    {
      key: '2',
      person: '李丽红',
      courseName: '零基础美术基础',
      profession: '软件开发',
    },
    {
      key: '3',
      person: '李丽红',
      courseName: '零基础高数学基础',
      profession: '软件开发',
    },
    {
      key: '4',
      person: '李丽红',
      courseName: '零基础高数学基础',
      profession: '软件开发',
    },
    {
      key: '5',
      person: '郭涛',
      courseName: '零基础高数学基础',
      profession: '软件开发',
    },
    {
      key: '6',
      person: '李丽红',
      courseName: '零基础高数学基础',
      profession: '软件开发',
    },
  ];
  //视频
  for (let i = 0; i < 4; i++) {
    famousCourse.push({
      title: `零基础高效学习插画高数零基础高效学习插画高数`,
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      presenter: '李丽',
    });
  }
  export default {
    name: "SideBar.vue",
    data(){
      return{
        famousCourse,
        data,
        columns,
      }
    }
  }
</script>

<style lang="less" scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .flex-center{
    justify-content: center;
    align-items: center;
  }
  .side-item{
    background-color: #ffffff;
  }
  .header{
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .nav-icon{
    color: #5dd5c8;
    font-size: 10px;
  }
  .more{
    font-size: 12px;
    color: #999999;
    cursor: pointer;
  }
  .more:hover{
    color: #1bcbb4;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-left: 6px;
  }
  .img-con{
    overflow: hidden;
  }
  .image{
    width: 100px;
  }
  .fammous-con{
    display: inline-block;
  }
  .box{
    width: 110px;
    margin: 0 10px 10px 10px;
    border: 2px solid #ffffff;
    border-radius: 3px;
    padding: 3px;
    cursor: pointer;
  }
  .box:hover{
    border: 2px solid #1bcbb4;
  }
  .famous-presenter{
    font-size: 12px;
    color: #222222;
    text-align: left;
    margin-top: 5px;
  }
  .famous-title{
    font-size: 14px;
    color: #222222;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    text-align: center;
    font-weight: 600;
  }
  .reload{
    font-size: 12px;
    color: #999999;
    margin-right: 10px;
  }
  .reload:hover{
    color: #4087F2;
  }
  .reload-icon{
    color: #4087F2;
  }
  .reload-con{
    text-align: right;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .reload-con:hover{
    color: #4087F2;
  }
  /* 课程表格样式 */
  .course-con{
    background-color: #ffffff;
    padding: 14px 20px;
    margin-top: 1px;
  }
  .course-table{
    border-radius: 4px;
    border: solid 1px #dddddd;
    text-align: center;
  }

  /* 覆盖ant默认样式 */
  .course-con{
    :global(.ant-table-thead > tr > th){
      padding: 7px 1px;
      background-color: #D7E6FC;
      text-align: center;
    }
    :global(.ant-table-tbody > tr > td ){
      padding: 7px 1px;
      text-align: center;
    }
    :global(.ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td){
      background-color: #EBF2FD !important;
    }
  }
</style>