<template>
<el-container>
  <el-header>
    <el-button type="primary" @click="asideWidth = asideWidth === '300px' ? '86px' : '300px';" icon="el-icon-s-fold" circle class="collapse"></el-button>
  </el-header>
  <el-container>
    <el-aside :width="asideWidth">
      <side :width="asideWidth" @reload="reload"></side>
    </el-aside>
    <el-container>
      <el-main>
        <allCard :data="data" @reload="reload"></allCard>
      </el-main>
    </el-container>
  </el-container>
</el-container>

</template>
<script>
import allCard from './AllCard'
import side from './Side'
import {getData} from '../config/api/schedule'
import Bus from '../config/common/bus.js'
export default {
  components: {
    allCard,
    side
  },
  data() {
    return {
      asideWidth: '300px',
      data: []
    }
  },
  created() {
    let _this = this;
    this.getData();
    Bus.$on('reload',()=>{_this.reload()});
  },
  methods: {
    getData(){
      this.$axios.get(getData).then(res=>{
        this.data = res.data || []
      })
    },
    reload(){
      this.getData();
    }
  },
  beforeDestroy() {
    Bus.$off('reload');
  },
};
</script>
<style lang="scss">
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

  .collapse{
    .el-icon-s-fold{
      font-size:20px;
    }
  }
</style>
