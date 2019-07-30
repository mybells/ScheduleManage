<template>
<el-container>
  <el-header>
    <el-button type="primary" @click="collapse" icon="el-icon-s-fold" circle></el-button>
  </el-header>
  <el-container>
    <el-aside :width="asideWidth">Aside</el-aside>
    <el-container>
      <el-main>
        <card></card>
      </el-main>
    </el-container>
  </el-container>
</el-container>

</template>
<script>
import card from './Card'
export default {
  components: {
    card
  },
  data() {
    return {
      asideWidth: '300px'
    }
  },
  created() {
    // this.$axios.get('http://localhost:3000/ss').then(res=>{
    //   debugger
    //   console.log(res)
    // })
  },
  methods: {
    collapse(){
      this.asideWidth = this.asideWidth === "300px" ? '0' : '300px';
    }
  },
};
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    height:60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    overflow: hidden;
    color: #333;
    text-align: center;
    transition:width 0.5s;
    height: calc(100vh - 60px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
  }
</style>
