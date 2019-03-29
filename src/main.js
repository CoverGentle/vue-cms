//入口文件
import Vue from 'vue'
//导入app组件
import app from './app.vue'
//index.css
import './css/index.css'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入axios vue-axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入路由模块
import router from './router/router.js'
//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入mint ui 的样式
import 'mint-ui/lib/style.css'
//导入mint ui 组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)  //手动安装到vue中去
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);   //手动安装到vue中去
Vue.component(SwipeItem.name, SwipeItem);   //手动安装到vue中去



var vm = new Vue({
    el:'#app',
    render(createElements) { //render 会把el指定的容器中，所有的内容都清空覆盖
        return createElements(app)
    
    },
    router :router
})
