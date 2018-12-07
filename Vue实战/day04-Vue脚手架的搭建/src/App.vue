<!--suppress ALL -->
<template>
  <div id="app" ref="abc">
    <hd-nav title="主页头部"></hd-nav>
    <hr>
    <router-view/>
    <hr>
    <ft-nav ref="footer" tip="主页底部"></ft-nav>
  </div>
</template>

<script>
  export default {
      name: 'App',
      // 组件创建后,数据已经完成初始化,但是DOM还未完成
      created(){

      },
      // 各种数据渲染到DOM上,DOM全部加载完成  window.onload
      mounted(){
        // DOM操作
        console.log(this.$refs.abc);
        this.$refs.abc.style.backgroundColor = "hotpink"
        console.log(this.$refs.footer.$el);
        this.$refs.footer.$el.style.backgroundColor = "skyblue"
      }
  }
</script>

<style>
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
  }
</style>

