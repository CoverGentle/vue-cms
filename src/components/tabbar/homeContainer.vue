<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话一定要使用key -->
      <mt-swipe-item v-for="item in listPic" :key="item.img">
        <img  :src="item.img" alt="">
      </mt-swipe-item>   
    </mt-swipe>
    <!-- 九宫格到六宫格 -->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatboxes"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>

		        </ul> 
		</div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      listPic: []
    };
  },
  created() {
    this.getPic();
  },
  methods: {
    getPic() {
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          //成功
          this.listPic = result.body.message
          // Toast("加载成功")
          
          
        } else {
          Toast({
            message: "请求失败",
            position: "bottom",
            duration: 2000
          });
        }
        
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
  }
}
img{
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
}
</style>
