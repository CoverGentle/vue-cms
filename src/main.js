//入口文件
import Vue from 'vue'
// //导入mui的样式
// import './lib/mui/css/mui.min.css'
//导入app组件
import app from './app.vue'
//导入mint ui 的样式
import 'mint-ui/lib/style.css'
//导入mint ui 组件
import {Header} from 'mint-ui'
//手动安装到vue中去
Vue.component(Header.name, Header)
//导入tabbar组件
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


var vm = new Vue({
    el:'#app',
    render(createElements) { //render 会把el指定的容器中，所有的内容都清空覆盖
        return createElements(app)

    },
})
