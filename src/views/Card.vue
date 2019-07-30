<template>
<div class="scard">
  <el-card class="box-card" v-for="(item, index) in 1" :key="index">
    <div slot="header">
      <span>2019-07-18</span>
      <el-button class="delete" icon="el-icon-delete" type="text"></el-button>
    </div>
    <div v-for="o in 10" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  created() {
    this.$axios.post('http://localhost:3000/insert',{time: new Date(),content: 'test'}).then(res=>{
      debugger
      console.log(res)
    })
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
}

.item {
  margin-bottom: 18px;
}

.scard .el-card__body {
  height: 162px;
  overflow: auto;
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
}

.scard .el-card__body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #8CC5FF;
  width: 4px;
}

.scard .el-card__body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #E4E7ED;
  width: 4px;
}
</style>
