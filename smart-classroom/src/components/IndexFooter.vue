<template>
  <div class="flex contain">
    <div class="flex contain-flex">
      <div class="flex footer-contain">
        <div class="footer-left">
          <div class="left-title">平台相关</div>
          <div class="flex nav">
            <template v-for="(item,index) in listSrc">
              <div class="text-center">
                <a :src="item.src" :class="{space: true, 'border': item.title == '申诉' ? true : false}">{{item.title}}</a>
              </div>
            </template>
          </div>
          <div class="footer-extra">数据来源：XXXXXXXXXXXXXX  XXXXXXXXXXXX</div>
        </div>
        <div class="footer-right">
          <div class="right-title">公众号二维码</div>
          <div class="right-code">
            <div class="flex code-img">
              <img src="../assets/code.png" alt="" class="code">
              <img src="../assets/code.png" alt="" class="code">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexFooter.vue",
    data(){
      return{
        listSrc: [
          {
            title: '关于我们',
            src: '#'
          },
          {
            title: '我们的服务',
            src: '#'
          },
          {
            title: '合作入口',
            src: '#'
          },
          {
            title: '备案',
            src: '#'
          },
          {
            title: '版权声明',
            src: '#'
          },
          {
            title: '友情链接',
            src: '#'
          },
          {
            title: '申诉',
            src: '#'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .contain{
    width: 100%;
    height: 273px;
    margin-top: 0px;
    justify-content: center;
  }
  .contain-flex{
    justify-items: center;
    align-items: center;
    width: 1280px;
    height: 273px;
  }
  .footer-contain{
    width: 100%;
    height: 178px;
    padding: 0px 15px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    justify-content: space-between;
  }
  .left-title{
    font-size: 18px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 30px;
  }
  .footer-extra{
    text-align: left;
    font-size: 14px;
    margin-top: 70px;
    margin-left: 5px;
    color: rgba(255,255,255,0.5);
  }
  .space{
    font-size: 14px;
    color: #ffffff;
    margin-right: 30px;
    height: 5px;
    padding-right: 30px;
    border-right: 1px solid #ffffff;
  }
  .border{
    border-right: 0px solid #ffffff;
  }
  .text-center{
    text-align: center;
  }
  .nav{
    justify-content: center;
    justify-items: center;
  }
  .footer-right{
    width: 260px;
  }
  .right-title{
    font-size: 18px;
    text-align: left;
  }
  .code{
    width: 124px;
    height: 124px;
  }
  .code-img{
    justify-content: space-between;
    margin-top: 15px;
  }
</style>