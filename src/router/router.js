
//1导入vue-router包
import VueRouter from 'vue-router'
//导入tabbar栏组件
import homeContainer from '../components/tabbar/homeContainer.vue'
import memberVipContainer from '../components/tabbar/memberVipContainer.vue'
import shopcarContainer from '../components/tabbar/shopcarContainer.vue'
import searchContainer from '../components/tabbar/searchContainer.vue'

//3.创建路由对象
var router = new VueRouter({
   routes:[
       { path:'/home',component:homeContainer},
       { path:'/memberVip',component:memberVipContainer},
       { path:'/shopCar',component:shopcarContainer},
       { path:'/search',component:searchContainer},
       
   ],
   linkActiveClass:'mui-active'  //覆盖默认的路由高亮的类 默认的类叫做router-link-active
})

//把路由对象给暴露出去
export default router