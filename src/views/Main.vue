<template>
  <div class="main">
      <el-button type="primary">主要按钮</el-button>
    <!-- <el-calendar v-model="value"></el-calendar> -->
  </div>
</template>
<script>
export default {
  name:'main',
  components: {
  },
  data() {
    return {
      value:new Date()
    }
  },
  created() {
    this.$axios.get('http://localhost:3000/ss').then(res=>{
      debugger
      console.log(res)
    })
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
