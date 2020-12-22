<template>
  <div class="container">
    <!--  主题内容标题   -->
    <div class="flex contain-header">
      <div class="contain-title">视频管理</div>
      <div class="flex contain-left">
        <div><icon-svg name="iconadd-dashboard" class="nav-icon" /></div>
        <div class="add">新增</div>
      </div>
    </div>
    <!--  查询    -->
    <a-form class="form" :form="form" @submit="handleSearch">
      <a-row :gutter="24">
        <a-col
          v-for="(item,index) in label"
          :key="index"
          :span="21"
          class="margin-bottom"
        >
          <div class="flex-center">
            <a-col :span="2">
              {{item.title}}：
            </a-col>
            <a-col :span="6">
              <a-input :placeholder="item.placeholder" :name="item.name"/>
            </a-col>
            <a-col :span="2">
              时间：
            </a-col>
            <a-col :span="6">
              <a-date-picker @change="onChange" />
            </a-col>
            <a-col :span="6">
              <a-button type="primary"  @click="search" icon="search" :style="{'background-color': '#54aef2',border: 'none'}">
                查询
              </a-button>
            </a-col>
          </div>
        </a-col>
      </a-row>
    </a-form>

    <!--  表格头部标签页  -->
    <div class="tag-page">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="全部">
          <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :pagination="pagination" bordered class="column">
            <template
              v-for="col in ['title', 'vedio', 'courseware','presenter','profession','time','publisher','evaluation','status']"
              slot-scope="text, record, index"
            >
              {{columns}}
              <div :key="index" class="column-content" slot="title" :title="text">
                {{ text }}
              </div>
            </template>
            <!--    表格操作列内容        -->
            <template slot="vedio" slot-scope="text, record, index">
              <div class="img-con">
                <img src="../assets/su.jpeg" alt="" class="img">
              </div>
            </template>
            <!--    表格操作列内容        -->
            <template slot="operation" slot-scope="text, record, index">
              <div class="editable-row-operations">
               <span class="oper">
                 <div class="flex icon-flex">
                    <a @click="() => editDev(record,text)" class="flex edit"><icon-svg name="iconbianji" class="icon-oper" />编辑</a>
                    <a-popconfirm title="是否确定删除?" cancelText="取消" okText="确定" @confirm="() => deleteDev(record.key)">
                      <a class="flex delete"><icon-svg name="iconshanchu" class="icon-oper" />删除</a>
                    </a-popconfirm>
                 </div>
                 <div class="flex space-icon icon-flex">
                    <a @click="() => editDev(record,text)" class="flex shield"><icon-svg name="iconbaojingpingbi-01" class="icon-oper" />屏蔽</a>
                    <a @click="() => editDev(record,text)" class="flex disable"><icon-svg name="iconjinyong" class="icon-oper" />禁用</a>
                 </div>
                </span>
              </div>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="通过" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="未通过">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'title' },
    },
    {
      title: '视频',
      dataIndex: 'vedio',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'vedio' },
    },
    {
      title: '课件',
      dataIndex: 'courseware',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'courseware' },
    },
    {
      title: '主讲人',
      dataIndex: 'presenter',
      width: '7%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'presenter' },
    },
    {
      title: '专业',
      dataIndex: 'profession',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'profession' },
    },
    {
      title: '时间',
      dataIndex: 'time',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'time' },
    },
    {
      title: '发布人',
      dataIndex: 'publisher',
      width: '8%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'publisher' },
    },
    {
      title: '是否课程评比',
      dataIndex: 'evaluation',
      width: '6%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'evaluation' },
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'status' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      title: `计算机应用管理 ${i}`,
      vedio: `机台 ${i}`,
      courseware: `计算机.pdf${i}`,
      presenter: `李莉${i}`,
      profession: `计算机 ${i}`,
      time: `2020-12-26 14:00:${i}`,
      publisher: `Elaine`,
      evaluation: `是`,
      status: `审核通过`,
    });
  }
  export default {
    name: "VedioManagement.vue",
    data() {
      return{
        label: [
          {
            title: '标题',
            placeholder: '请输入标题',
            name: 'c_name'
          }
        ],
        form: this.$form.createForm(this, { name: 'advanced_search' }),
        data,
        columns,
        pagination:{
          total:0,
          defaultPageSize:10,
          showTotal: total => `共 ${total} 条数据`,
          showQuickJumper: true,
          showSizeChanger:true,
          pageSizeOptions: ['5', '10', '15', '20'],
          // onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
        },

      }
    },
    computed: {
      rowSelection() {
        return {
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
          getCheckboxProps: record => ({
            props: {
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            },
          }),
        };
      },
    },
  }
</script>

<style lang="less" scoped>
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
  }
  .contain-left{
    align-items: center;
    cursor: pointer;
  }
  .add{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #54aef2;
    margin-left: 9px;
  }
  .nav-icon{
    color: #54aef2;
  }
  .form{
    margin-top: 15px;
  }
  .tag-page{
    margin-top: 40px;
    text-align: left;
  }
  .column{
    background-color: #ffffff;
  }
  .icon-oper{
    font-size: 5px;
    margin-right: 6px;
    margin-left: 10px;
  }
  .edit{
    color: #12c5f8;
  }
  .delete{
    color: #f8334f;
  }
  .shield{
    color: #e8c25b;
  }
  .disable{
    color: #f733a2;
  }
  .space-icon{
    margin-top: 10px;
  }
  .icon-flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .img-con{
    width: 100%;
  }
  .img{
    width: 100%;
    /*height: 57px;*/
  }
</style>