
const ConsoleLogOnBuildWebpackPlugin = require('./modules/ConsoleLogOnBuildWebpackPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
// const webpack = require('webpack'); //访问内置的插件
const {resolve} = require('path');
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin.js');
module.exports = {
    entry: {
        index:'./src/main.js'
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'./dist/')
    },
    devServer: {  //这是dev-server命令参数的的形式
        port: 5210,    //设置启动时候的运行端口
        contentBase: resolve(__dirname, 'dist'),  //指定托管的更目录
        open: true,  //自动打开浏览器
        
    },
    

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                 use: [
                "style-loader", // 将 JS 字符串生成为 style 节点
                "css-loader", // 将 CSS 转化成 CommonJS 模块
                "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
                use: [
                 'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
            
        ]
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin(),
        new HtmlWebpackPlugin({  //创建一个内存中生成HTML页面插件

            //指定模板页面，将来会根据指定的页面路劲，去生成内存中的页面
            template: './src/index.html',
            filename: 'index.html'  //3.x版本是用来指定页面名称

        }),
        new VueLoaderPlugin(),
        
      

    ],
    
    resolve:{
        //设置vue被导入时候的包的路径
        alias:{
             "vue$":'vue/dist/vue.js'
        }
    }
};