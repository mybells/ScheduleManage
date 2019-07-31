<template>
  <div>
    <el-dialog :visible.sync="updateDialog" width="30%" height="350px;" :before-close="handleClose">
      <el-date-picker
        style="width:150px;"
        slot="title"
        size="mini"
        format="yyyy-MM-dd"
        v-model="time"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
      <editor @onchange="updateSave" ref="editor" :htmlStr="htmlStr"></editor>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="updateSave('')" :loading="loading">{{loadtext}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {updateData} from '../api/api'
  import {getDataById} from '../api/api'
  import editor from '../components/Editor'
  import Bus from '../components/common/bus'
  export default {
    props: {
      id: {
        type: String
      },
      updateDialog: {
        type: Boolean
      }
    },
    data() {
      return {
        loading: false,
        htmlStr: '',
        time: new Date()
      }
    },
    components: {
      editor
    },
    computed: {
      loadtext(){
        return this.loading ? '保存中' : '保存';
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        this.$axios.get(`${getDataById}/${this.id}`).then(res=>{
          if (res.status === 200){
            this.htmlStr = res.data.content;
            this.time = res.data.time;
          } else {
            this.$message.error('获取数据错误！');
          }
        })
      },
      handleClose() {
        this.$emit('update:updateDialog',false)
      },
      updateSave(editor) {
        this.loading = true;
        this.$axios.post(`${updateData}/${this.id}`,{time: this.time ? this.time : new Date(),content: this.$refs.editor.content}).then(res=>{
          if (res.status === 200){
            this.getData();
            this.loading = false;
            Bus.$emit('reload');
            if (!editor){
              this.handleClose();
            }
          } else {
            this.$message.error('更新失败！');
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.el-dialog__body{
  padding: 10px !important;
}
.el-dialog__header{
  display:flex !important;
}
</style>