<template>
  <div class="contain">
    <div class="flex contain-flex">
      <div class="flex header-left">
        <div>
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="avatar"/>
        </div>
        <div class="title">清华大学</div>
        <div class="flex">
          <a-input placeholder="请输入关键词" allow-clear @change="onChange" />
          <icon-svg name="iconchaxun" class="search_icon"/>
        </div>
      </div>
      <div class="header-right">
        <a-button>
         登录/注册
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexHeader.vue",
    data(){
      return{
        count: 5,
        show: true
      }
    }
  }
</script>

<style lang="less" scoped>
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
    background-color: #5dd5c8;
    box-shadow: 0px 1px 13px 0px #bababa;
    margin-top: 0px;
  }
  .contain-flex{
    justify-content: space-between;
    width: 1280px;
    height: 50px;
    background-color: #5dd5c8;
  }
  .header-left{
    justify-content: space-between;
  }
  .header-right{
    margin-right: 10px;
  }
  .title{
    width: 120px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 1px;
    color: #1a1918;
    margin-left: 12px;
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
    width: 60px;
    height: 60px;
  }
  .search_icon{
    color: #5dd5c8;
    width: 35px;
    height: 35px;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-left: 10px;
    font-size: 11px;
    cursor: pointer;
  }
  .search_icon:hover{
    background-color: #1bcbb4;
    color: #ffffff;
    border: 1px solid #ffffff;
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

  /*覆盖ant默认input样式*/
  .flex {
    :global(.ant-input){
      padding: 18px;
      width: 300px;
    }
  }
  .header-right{
    :global(.ant-btn){
      background-color: #5dd5c8;
      border: 1px solid #ffffff;
      color: #ffffff;
      padding: 18px 10px;
      vertical-align: middle;
      line-height: 3px;
    }
    :global(.ant-btn:hover){
      background-color: #ffffff;
      color: #1bcbb4;
      border: 1px solid #1bcbb4;
    }
  }
</style>