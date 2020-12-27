<template>
  <div>
    <!--  新增  -->
    <a-modal :visible="modalVisible" :title="title" @ok="handleCreate(data.actionText)" @cancel="handleCancel" cancelText="取消" :okText="title" v-if="title=='新增'">
      <div v-if="data.createData">
        <!--  输入    -->
        <a-row v-for="(item,index) in data.createData" :key="index">
          <a-form :form="form" :label-col="{ span: 4,offset: 1 }" :wrapper-col="{ span: 17,offset: 1 }">
            <a-form-item :label="item.label">
              <template v-if="item.label == '使用寿命'">
                <a-input-number v-model="value" :min="0" @change="onChange" allowClear :ref="item.name" v-decorator="[item.name, { rules: [{ required: true, message: '该字段不能为空，请输入!' }] }]"/> 天
              </template>
              <template v-else-if="item.label == '开始使用时间'">
                <a-date-picker show-time placeholder="请选择时间" @change="selectTime" :default-value="moment()" :format="dateFormat" :ref="item.name" v-decorator="[item.name, { rules: [{ required: true, message: '该字段不能为空，请输入!' }] }]"/>
              </template>
              <template v-else-if="item.label == '密码'">
                <a-input-password placeholder="请输入密码"  allowClear :ref="item.name" v-decorator="[item.name, { rules: [{ required: true, message: '该字段不能为空，请输入!' }] }]"/>
              </template>
              <template v-else-if="item.label == '用户角色'">
                <a-tree-select
                  v-model="value"
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择用户角色"
                  allow-clear
                  tree-default-expand-all
                  :ref="item.name"
                  v-decorator="[item.name, { rules: [{ required: true, message: '该字段不能为空，请选择!' }] }]"
                >
                  <a-tree-select-node key="random1" value="操作工">
                    <div slot="title">操作工</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="管理员">
                    <div slot="title">管理员</div>
                  </a-tree-select-node>
                </a-tree-select>
              </template>
              <template v-else>
                <a-input :placeholder="`请输入${item.label}`" :rows="3" allowClear :ref="item.name" v-decorator="[item.name, { rules: [{ required: true, message: '该字段不能为空，请输入!' }] }]"/>
              </template>
            </a-form-item>
          </a-form>
        </a-row>
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "ActionModal",
    props: ['data','modalVisible','title'],
    data(){
      return{

      }
    }

  }
</script>

<style scoped>

</style>