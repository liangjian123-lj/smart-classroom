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
          <a-badge :count="count" :number-style="{
            fontSize: '11px',
            marginLeft: '-20px',
            marginTop: '4px'
          }">
            <icon-svg name="iconlingdang" class="msg_icon"/>
          </a-badge>
        </div>
        <div class="space-avatar">
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="avatar"/>
        </div>
        <div class="flex username">李莉教师</div>
        <div class="flex caret-down">
          <a-dropdown :trigger="['click']" placement="bottomRight">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-icon type="caret-down" class="white"/>
            </a>
            <a-menu slot="overlay" class="dropdown-top">
              <a-menu-item key="0">
                <a href="http://www.alipay.com/">退出登录</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBar.vue",
    data(){
      return{
        count: 5,
        show: true
      }
    }
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
  }
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 68px;
    background-color: #1bcbb4;
    box-shadow: 0px 1px 13px 0px #bababa;
    margin-top: 0px;
  }
  .contain-flex{
    justify-content: space-between;
    width: 1280px;
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
    font-size: 15px;
    /*font-weight: bold;*/
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
  .space-avatar{
    margin-left: 46px;
  }
  .msg_icon{
    color: #f6f6f6;
    font-size: 16px;
    border-radius: 50%;
  }
  .caret-down{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid #f6f6f6;
    color: #F6F6F6;
    margin-left: 20px;
    margin-right: 10px;
  }
  .white{
    color: #f6f6f6;
  }
  .dropdown-top{
    margin-top: 10px;
  }
</style>