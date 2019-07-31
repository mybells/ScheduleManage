<template>
<div class="scard">
  <el-card class="box-card" v-for="item in data" :key="item._id" @click.native="updateCard(item._id)">
    <div slot="header">
      <span>{{new Date(item.time).toLocaleDateString().replace(/\//g,'-')}}</span>
      <el-button class="delete" icon="el-icon-delete" type="text" @click="deleteData(item._id,$event)"></el-button>
    </div>
    <!-- <div class="text" v-html="$options.filters.contentFilter(item.content)"> -->
    <div class="text" v-html="item.content">
    </div>
  </el-card>
  <updateCard v-if="updateDialog" :updateDialog.sync="updateDialog" :id="id"></updateCard>
</div>
</template>

<script>
import {deleteData} from '../api/api'
import updateCard from './UpdateCard'
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      id: '',
      updateDialog: false
    }
  },
  components: {
    updateCard
  },
  // filters: {
  //   contentFilter(val){
  //     return val.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;")
  //   }
  // }
  methods: {
    updateCard(id){
      this.id = id;
      this.updateDialog = true;
    },
    deleteData(id,e){
      e.stopPropagation();
      this.$axios.get(`${deleteData}/${id}`).then(res=>{
        if (res.status === 200){
          this.$emit('reload')
        } else {
          this.$message.error('删除失败！');
        }
      })
    }
  },
}
</script>

<style>
.scard {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.text {
  font-size: 14px;
  text-align: left;
}
.scard .el-card__body:hover{
  cursor: pointer;
}
.scard .el-card__body {
  height: 162px;
  overflow-y: auto;
  overflow-x: auto;
}

.scard .el-card__header {
  padding: 14px 20px;
}

.delete {
  float: right;
  padding: 1px
}

.box-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .5);
}

.box-card {
  width: 300px;
  height: 250px;
  margin: 10px;
}

/*定义滚动条轨道*/
.scard .el-card__body::-webkit-scrollbar {
  border-radius: 10px;
  width: 4px;
  height: 4px;
}

.scard .el-card__body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #8CC5FF;
  height: 4px;
  width: 4px;
}

.scard .el-card__body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #E4E7ED;
  height: 4px;
  width: 4px;
}
</style>
