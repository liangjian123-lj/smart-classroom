<template>
  <div class="contain">
    <div class="flex contain-flex">
      <div class="flex header-left">
        <div>
          <icon-svg name="iconjiaozhigongxinxibiangeng" class="search_icon"/>
        </div>
        <div class="title">教职工会员中心</div>
        <div class="return">&#60;&#60;返回首页界面</div>
      </div>
      <div class="flex header-right">
        <div>
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="avatar"/>
        </div>
        <div class="flex username">李莉教师</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBar.vue"
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
  }
  .contain{
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 68px;
    background-color: #1bcbb4;
    box-shadow: 0px 1px 13px 0px #bababa;
  }
  .contain-flex{
    justify-content: space-between;
    width: 1270px;
    height: 50px;
    background-color: #1bcbb4;
  }
  .header-left{
    justify-content: space-between;
  }
  .header-right{

  }
  .title{
    width: 120px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 1px;
    color: #f6f6f6;
    margin-left: 12px;
  }
  .return{
    width: 130px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #f6f6f6;
    cursor: pointer;
    margin-left: 48px;
  }
  .username{
    width: 30px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #f6f6f6;
    margin-left: 10px;
  }
  .avatar{
    border: 2px solid #ffffff;
    width: 44px;
    height: 44px;
  }
  .search_icon{
    color: #ffffff;
    width: 40px;
    height: 38px;
  }
</style>