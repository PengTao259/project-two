<template>
  <div class="hello">
    <h1>hello</h1>
    <el-button type="primary">测试</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <i class="fa fa-user"></i>
    
  </div>
</template>

<script>
export default { 
  name: 'HelloWorld'
}
</script>

<style lang="scss">
  .hello {
    background: yellow;
  }
</style>