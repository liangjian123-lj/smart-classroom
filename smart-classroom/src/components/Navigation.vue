<template>
  <div class="menu">
    <template v-for="(item,index) in navList">
      <div class="menu-item" :class="{'selected': item.selected ? true : false}" @click="navPage(item.path)">
        <div class="list-item">
          <div class="space-between">
            <div class="icon">
              <icon-svg :name="item.iconName" class="nav-icon" :class="{'selected': item.selected ? true : false}"/>
            </div>
            <div class="nav-title" :class="{'selected': item.selected ? true : false}">{{item.title}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Navigation.vue",
    data(){
      return{
        navList: [
          {
            iconName: 'icontubiaozhizuomoban',
            title: '视频管理',
            path: '/vedioManagement',
            selected: false
          },
          {
            iconName: 'iconkeben',
            title: '课件管理',
            path: '/coursewareManagement',
            selected: false
          },
          {
            iconName: 'iconguanzhu',
            title: '关注和粉丝',
            path: '/followsFans',
            selected: false
          },
          {
            iconName: 'iconshoucang',
            title: '我的收藏',
            path: '/favorites',
            selected: false
          },
          {
            iconName: 'iconzhanghaoguanli',
            title: '账号管理',
            path: '/accountManagement',
            selected: false
          },
        ]
      }
    },
    created() {
      this.initNav()
    },
    //监听路由变化
    watch:{
      $route(to,from){
        this.initNav()
      }
    },
    methods: {
      //初始化导航栏跳转显示
      initNav(){
        this.navList.forEach((item) => {
          item.selected = false
        })
        if (this.$route.path == '/vedioManagement'){
          this.navList[0].selected = true
        }
        else if(this.$route.path == '/coursewareManagement'){
          this.navList[1].selected = true
        }
        else if(this.$route.path == '/followsFans'){
          this.navList[2].selected = true
        }
        else if(this.$route.path == '/favorites'){
          this.navList[3].selected = true
        }
        else if(this.$route.path == '/accountManagement'){
          this.navList[4].selected = true
        }
      },
      // 页面跳转
      navPage(path){
        this.$router.push(path)
        this.initNav()
      },

    }
  }
</script>

<style scoped>
  .menu{
    width: 218px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .nav-icon{
    color: #999999;
    font-size: 12px;
  }
  .menu-item{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 58px;
    cursor: pointer;
  }
  .list-item{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 170px;
    border-bottom: 1px solid rgba(221,221,221,0.2);
  }
  .space-between{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    align-content: center;
    width: 130px;
  }
  .nav-title{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 51px;*/
    letter-spacing: 1px;
    color: #333333;
    margin-left: 12px;
  }
  .menu-item:hover{
    background-color: rgba(27,203,180,0.1);
  }
  .selected{
    background-color: #1bcbb4;
    color: #ffffff;
  }
  .selected:hover{
    background-color: #1bcbb4;
  }
</style>