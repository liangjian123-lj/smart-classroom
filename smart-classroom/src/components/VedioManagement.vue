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
              <a-button type="primary"  @click="search" icon="search">
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
          <a-table :columns="columns" :data-source="data" bordered class="column">
            <template
              v-for="col in ['workshop', 'machine', 'equitment','equitmentCode','model','factory','operation']"
              :slot="col"
              slot-scope="text, record, index"
            >
              <div :key="index" class="column-content" slot="title" :title="text">
                {{ text }}
              </div>
            </template>
            <template slot="operation" slot-scope="text, record, index">
              <div class="editable-row-operations">
               <span class="oper">
                  <a @click="() => createRepair(record,text)">新增</a>
                  <a @click="() => editDev(record,text)">编辑</a>
                  <a-popconfirm title="是否确定删除?" cancelText="取消" okText="确定" @confirm="() => deleteDev(record.key)">
                    <a>删除v</a>
                  </a-popconfirm>
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
      title: '车间',
      dataIndex: 'workshop',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'workshop' },
    },
    {
      title: '机台',
      dataIndex: 'machine',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'machine' },
    },
    {
      title: '设备名称',
      dataIndex: 'equitment',
      width: '16%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equitment' },
    },
    {
      title: '设备编码',
      dataIndex: 'equitmentCode',
      width: '16%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equitmentCode' },
    },
    {
      title: '型号',
      dataIndex: 'model',
      width: '16%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'model' },
    },
    {
      title: '厂家',
      dataIndex: 'factory',
      width: '16%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'factory' },
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
      workshop: `车间 ${i}`,
      machine: `机台 ${i}`,
      equitment: `铝合金夹梅花联轴器-${i}`,
      equitmentCode: `${i}50143046324`,
      model: `型号. ${i}`,
      factory: `厂家. ${i}`
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .container{
    width: 1032px;
    height: 962px;
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
</style>
