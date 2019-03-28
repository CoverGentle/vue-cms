    
    
<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="首页"></mt-header>

    <!-- 中间路由router-view -->
    <h1>123</h1>

    <!-- 底部tabbar区域 -->
    <mt-tabbar v-model="selected">    
      <mt-tab-item id="首页">
        <img slot="icon" src="./images/shouye.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="./images/wodejuhuasuan.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="./images/gouwuche.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" src="./images/sousuo.png">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>



<script>
</script>
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>
