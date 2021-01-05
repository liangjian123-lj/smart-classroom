<template>
  <div>
    <!--  新增  -->
    <a-modal :visible="modalVisible" :title="title" @ok="handleCreate(data.actionText)" @cancel="handleCancel" cancelText="取消" okText="提交" width="950px">
      <div v-if="data.createData">
        <!--  输入    -->
        <a-form :form="form" layout="vertical">
          <a-row :gutter="24">
            <template v-for="(item,index) in data.createData">
              <a-col :span="6" v-if="item.label == '类型' || item.label == '标题' || item.label == '主讲人' || item.label == '专业'">
                <a-form-item :label="item.label">
                  <template v-if="item.label == '类型'">
                    <a-select style="width: 200px" @change="handleChange" placeholder="请选择" v-decorator="[item.name,{ rules: [{ required: true, message: '请选择类型' }] },]">
                      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                      </a-select-option>
                    </a-select>
                  </template>
                  <template v-else-if="item.label == '标题'">
                    <a-input :placeholder="`请输入${item.label}`" :rows="3" allowClear :ref="item.name"  v-decorator="[item.name,{ rules: [{ required: true, message: '请输入标题' }] },]"/>
                  </template>
                  <template v-else-if="item.label == '专业'">
                    <a-select style="width: 200px" @change="handleChange" placeholder="请选择">
                      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                      </a-select-option>
                    </a-select>
                  </template>
                  <template v-else>
                    <a-input :placeholder="`请输入${item.label}`" :rows="3" allowClear :ref="item.name"/>
                  </template>
                </a-form-item>
              </a-col>
              <a-col :span="24" v-else-if="item.label == '封面'">
                <a-col :span="9" :offset="-1">
                  <div class="contain-pic margin-left">
                    <a-form-item :label="item.label">
                      <template>
                        <a-upload
                          name="avatar"
                          list-type="picture-card"
                          class="avatar-uploader"
                          :show-upload-list="false"
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          :before-upload="beforeUpload"
                          @change="handleChange"
                        >
                          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                          <div v-else>
                            <a-icon :type="loading ? 'loading' : 'plus'" />
                            <div class="ant-upload-text">
                              Upload
                            </div>
                          </div>
                        </a-upload>
                      </template>
                    </a-form-item>
                    <div class="pic-info">支持：png、jpg格式 &nbsp;&nbsp;&nbsp;&nbsp; 限制5MB以内</div>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="12" v-else-if="item.label == '视频上传' || item.label == '课件上传'">
                <template v-if="item.label == '视频上传'">
                  <a-form-item>
                    <div slot="label">
                      视频上传
                      <span class="label-info">(支持扩展名为：avi,mp4 格式)</span>
                    </div>
                    <template>
                      <a-upload
                        list-type="picture"
                        action="//jsonplaceholder.typicode.com/posts/"
                        :preview-file="previewFile"
                      >
                        <a-button> <a-icon type="upload" /> 上传视频 </a-button>
                      </a-upload>
                    </template>
                  </a-form-item>
                </template>
                <template v-else-if="item.label == '课件上传'">
                  <a-form-item>
                    <div slot="label">
                      课件上传
                      <span class="label-info">(支持扩展名为：pdf,ppt 格式)</span>
                    </div>
                    <template>
                      <a-upload
                        list-type="picture"
                        action="//jsonplaceholder.typicode.com/posts/"
                        :preview-file="previewFile"
                      >
                        <a-button> <a-icon type="upload" /> 上传课件 </a-button>
                      </a-upload>
                    </template>
                  </a-form-item>
                </template>
              </a-col>
              <a-col :span="24" v-else-if="item.label == '时长'">
                <a-col :span="9">
                  <div class="contain-pic margin-left">
                    <a-form-item :label="item.label">
                      <a-input :placeholder="`请输入${item.label}`" :rows="3" allowClear :ref="item.name"/>
                    </a-form-item>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="11" v-else-if="item.label == '参与课程评比' || item.label == '参与名师讲坛'">
                <template v-if="item.label == '参与课程评比'">
                  <div class="contain-pic">
                      <div>参与课程评比</div>
                      <a-switch @change="onChange" />
                      <a-select style="width: 200px" @change="handleChange" placeholder="请选择" :disabled="isDisable">
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                          {{ (i + 9).toString(36) + i }}
                        </a-select-option>
                      </a-select>
                    </div>
                </template>
                <template v-else-if="item.label == '参与名师讲坛'">
                  <a-col :span="13">
                    <div class="contain-pic">
                      <div>参与名师讲坛</div>
                      <a-switch default-checked @change="onChangeTeacher" />
                    </div>
                  </a-col>
                </template>
              </a-col>
              <a-col :span="24" v-else-if="item.label == '评价'" class="action">
                <a-col :span="3">
                  <div class="contain-pic margin-left">
                    <div>评价</div>
                    <a-switch default-checked @change="evaluationChange" />
                  </div>
                </a-col>
              </a-col>
            </template>
          </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script>
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  export default {
    name: "ActionModal",
    props: ['data','modalVisible','title'],
    data(){
      return{
        form: this.$form.createForm(this, { name: 'coordinated' }),
        loading: false,
        imageUrl: '',
        isDisable: false,   //是否参加评比
      }
    },
    methods: {
      //上传图片
      handleChange(info) {
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
      },
      //上传封面图片前的判断
      beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          this.$message.error('封面图片仅支持jpg、png格式!');
        }
        const isLt5M = file.size / 1024 / 1024 / 1024 / 1024 /1024 < 5;
        if (!isLt5M) {
          this.$message.error('封面图片要求需在5MB以内!');
        }
        return isJpgOrPng && isLt5M;
      },
      //参与评比与否
      onChange(checked) {
        if(checked){
          this.isDisable = false
        }else{
          this.isDisable = true
        }
        console.log(`a-switch to ${checked}`);
      },
      //是否参与名师讲坛
      onChangeTeacher(checked){

      },
      //是否评价
      evaluationChange(){

      },
      //上传文件
      previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
          method: 'POST',
          body: file,
        })
          .then(res => res.json())
          .then(({ thumbnail }) => thumbnail);
      },
      //弹出层取消
      //取消按钮事件
      handleCancel(e) {
        this.form.resetFields();
        this.$emit("update:modalVisible",false)
      },
    },
  }
</script>

<style scoped>
  .contain-pic{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .margin-left{
    margin-left: -11px;
  }
  .pic-info{
    font-size: 12px;
    color: #999999;
  }
  .label-info{
    font-size: 12px;
    color: #999999;
  }
  .action{
    background-color: rgba(176,234,248,0.3);
    margin-top: 25px;
    padding: 15px;
    box-sizing: border-box;
  }
  /*图片上传样式*/
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>