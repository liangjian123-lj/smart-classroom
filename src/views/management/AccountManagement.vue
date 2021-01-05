<template>
  <div class="container">
    <!--  主题内容标题   -->
    <div class="flex contain-header">
      <div class="contain-title">账号管理</div>
    </div>
     <div class="user-avatar"><img src="../../assets/su.jpeg"></div>
     <div class="reset-username" >
       <div class="user-name">张昌硕</div>
       <div class="icon-contain">
         <icon-svg name="iconbianji" class="resetusername-icon" />
       </div>
     </div>
     <span class="base-information">基本信息</span>
     <div class="red-point"></div><span class="sex">性别</span>
    <a-radio-group name="radioGroup" :default-value="1">
    <a-radio :value="1">
      男
    </a-radio>
    <a-radio :value="2">
     女
    </a-radio>
  </a-radio-group>
  <div class="name-course">
     <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" >
        <a-row>
              <a-col :span="12" >
      <a-form-model-item label="姓名"  >
      <a-input v-model="form.name" />
    </a-form-model-item>
     </a-col>
              <a-col :span="12">
     <a-form-model-item label="任教课程" >
      <a-input v-model="form.name" />
    </a-form-model-item>
    </a-col>
    <a-col :span="12">
     <a-form-model-item label="职称" >
      <a-input v-model="form.name" />
    </a-form-model-item>
    </a-col>
    <a-col :span="12">
     <a-form-model-item label="职龄" >
      <a-input v-model="form.name" />
    </a-form-model-item>
    </a-col>
     <span class="base-information">联系方式</span>
     <a-col :span="12">
     <a-form-model-item label="手机号码" >
      <a-input v-model="form.name" />
    </a-form-model-item>
    </a-col>
    <a-col :span="12">
     <a-form-model-item label="邮箱" >
      <a-input v-model="form.name" />
    </a-form-model-item>
    </a-col>
        </a-row>
        <div class="submit-button">
          <a-form-model-item >
          <a-button type="primary" size="300px">
           保存
         </a-button>
         </a-form-model-item>
        </div>
     </a-form-model> 
    
  </div>
  </div>
</template>

<script>

  export default {
    name: "AccountManagement.vue",
    data() {
      return {
        labelCol: { span: 5 },
       wrapperCol: { span: 16 },
       form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
      
    methods: {
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
    /* border:1px solid red; */
  }
  .container{
    width: 1032px;
    height: 996px;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    padding: 5px 13px;
    /* border:1px solid orange; */
  }
  .contain-header{
    justify-content: space-between;
    align-items: center;
    /* border:1px solid green; */
  }
  .contain-title{
    font-family: MicrosoftYaHei;
    font-size: 19px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #1bcbb4;
    margin-top: 10px;
    /* border:1px solid pink; */
  }
   .user-avatar{
    text-align:center; 
  }
  .user-avatar img{
    width: 120px;
    height: 120px;
    border-radius:100px;
    /* border:1px solid black; */
  }
  
  .user-name{
  
   /* margin-top: 10px; */
   /* text-align:center;
   position: absolute;
   left: 50%;
   transform: translate(-50%); */
  
   font-size: 20px;

   /* display: inline-block; */
  }
  .icon-contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
  }
  .resetusername-icon{
    font-size: 8px;
    margin-left: 5px;
   
    /* display: inline-block; */
  }
 .reset-username{
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
 } 
 .base-information{
   margin-bottom: 18px;
  margin-left: 10px;
  display: block;
	font-family: MicrosoftYaHei;
	font-size: 19px;
	font-weight: bold;
	font-stretch: normal;
	line-height: 40px;
	letter-spacing: 1px;
	color: #333333;
 }
 .sex{
   color: #000;
   font-size: 14px;
   margin-left: 10px;
   margin-right: 20px;
 }
 .red-point{
   margin-left: 20px;
   margin-bottom: 3px;
   width: 6px;
   height: 6px;
   border-radius: 10px;
   display: inline-block;
   background-color: red;
 }
 
 .name-course{
   margin-top: 20px;
   width: 100%;
   height: 300px;
   /* border:1px solid red; */
 }
 .submit-button{
   /* border:1px solid red; */
   width: fit-content;
   margin:100px auto;
 }

 
</style>