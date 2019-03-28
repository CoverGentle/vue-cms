# learnWebpack和vue项目
学习webpack
ES6导入模块，
使用import 模块名称 from ‘模块标识符’  
//导入如  .css .js等等
import‘路径’

ES6向外暴露对象
export default 和 export向外暴露对象


通过Babel可以帮助我们将高级语法转换为低级的语法
在webpack中可以运行两套命令，安装Babel相关loader
第一套包： npm i babel-core babel-loader babel-plugin-transform-runtime -D
第二套包：npm i babel-preset-env babel-preset-stage-0 -D
打开webpack的配置文件 在module节点下的rules数组 添加一个新的匹配规则
{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
通过exclude排除掉node_modules目录
在项目根目录中新建一个叫做.babelrc的Babel配置文件，这个配置文件属于JSON格式
所以在写.babelrc配置的时候，必须规范JSON语法，不能写注释，字符串必须使用双引号
.babelrc配置如下
{
    "preset":["env","stage-0"],
    "plugins":["transform-runtime"]
}

