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
      </div>
    </div>
  </div>
</template>

<script>
  const famousCourse = [];
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
        famousCourse
      }
    }
  }
</script>

<style scoped>
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
</style>