<template>
<div class="side">
  <el-button @click="createCard" class="roundbtn" type="primary" icon="el-icon-plus" :round="width==='300px'" v-if="width==='300px'">创建</el-button>
  <el-button @click="createCard" class="circlebtn" type="primary" icon="el-icon-plus" :circle="width==='86px'" v-if="width==='86px'"></el-button>
</div>
</template>

<script>
import {insertData} from '../api/api'
export default {
  props: {
    width: {
      type: String
    }
  },
  methods: {
    createCard(){
      this.$axios.post(insertData,{time: new Date(),content: ''}).then(res=>{
        if (res.status === 200){
          this.$emit('reload')
        } else {
          this.$message.error('创建失败！');
        }
      })
    }
  },
}
</script>

<style lang="scss">
.side {
  display: flex;
  .roundbtn {
    margin: 10px;
  }
  .circlebtn {
    margin: 5px auto;
    .el-icon-plus{
      font-size:20px;
    }
  }
}
</style>
