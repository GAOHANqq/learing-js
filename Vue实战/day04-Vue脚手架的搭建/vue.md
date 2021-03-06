# VueJS框架



## 一、 插件或框架的好处






​	从久远的时代到现在，我们的网页更加动态化与强大，大家在学习的过程中，发现或了解过很多很多的插件或框架，用过的都知道，方便、快速、重用性高、维护成本低、兼容性好、稳定性强

​	这些插件或框架的出现，是因为JavaScript的强大，在之前我们开发大型的项目，由于业务逻辑非常复杂，html网页结构累赘，css样式庞大，造成了资源的浪费，性能低下，体验差，开发维护成本大，没有正规的组织形式，所以大佬们为了解决传统开发项目导致的问题，我们所熟知的这些框架就应运而生了，例如前端三大框架 angularJS，vueJS，reactJS等

​	

## 二、 三大框架对比

​	

### 1. angularJS




 + 是一个比较完善的前端MV*框架，包含模板，数据双向绑定，路由，模块化，服务，过滤器，依赖注入等所有功能，依赖注入和自定义directive非常灵活，功能强大
 + 框架偏重，太庞大了，学习路线长
 + 主要提供更多的是一整套解决方案，vue和react更像是一个生态

### 2. reactJS 和 VueJS

​	有很多的相似之处：

 +  使用 Virtual DOM

 +  提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件

 +  将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库

 +  react采用的JSX语法，angular推崇使用typescript，也可以直接用js写。配合上ts还是很爽，后端的也能很快习惯ts的开发。react更注重的是在view层，用state的改变去re-render页面。angular是双向绑定，更加注重的是model层，更加擅长对数据的处理和业务逻辑。

 +  React和Vue都有`props`的概念，`props`在组件中是一个特殊的属性，允许父组件往子组件传送数据

 +  React和Vue都有自己的构建工具，你可以使用它快速搭建开发环境

 +  SSR(server side render) 服务器端渲染

 +  [官方声明对比](https://cn.vuejs.org/v2/guide/comparison.html)

    ​

    vueJS：

    + 都是组件化思想
    + 模板的使用和数据渲染非常灵活，层次结构鲜明
    + 简单的语法并能够简单快速构建一个项目
    + 轻量级，体积小渲染速度更快
    + Vue采用的脚手架工具是：vue-cli
    + 初期是尤雨溪维护，现在有加入的团队组织个人提供技术一同维护迭代更新
    + Vue中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元 —— 有自己的视图样式和数据逻辑

    ​

    reactJS:

 - 庞大的生态系统，背后是强大的FB团队，野心更大，angularJS和react是竞争对手，都想取代对方
 - 组件有两个核心概念：props,state。 一个组件就是通过这两个属性的值在 render 方法里面生成这个组件对应的 HTML 结构
 - 数据流单向
 - react采用的是自己开发的脚手架：create-react-app，全局安装
 - react是通过递归的方式去遍历DOM树,vue是自带检查机制
 - react推广了Virtual DOM，并创造了新的语法——JSX，JSX允许开发者在JavaScript中书写HTML
 - react 认为组件才是王道，而组件是和模板紧密关联的，组件模板和组件逻辑分离让问题复杂化了。所以就有了 JSX 这种语法，就是为了把 HTML 模板直接嵌入到 JS 代码里面，这样就做到了模板和组件关联，但是 JS 不支持这种包含 HTML 的语法，所以需要通过工具将 JSX 编译输出成 JS 代码才能使用（可以进行跨平台开发的依据，通过不同的解释器解释成不同平台上运行的代码，由此才有RNAPP和React开发桌面客户端）



## 三、 基本指令

```js
指令

自己练习的过程中 一定要写笔记！！！

v-text
v-html
v-show
v-if
v-else
v-else-if
v-for
v-on
v-bind
v-model
v-pre
v-cloak
v-once
```



## 四、全局Api

```javascript
Vue.extend
	> 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
	> data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数
Vue.nextTick
	> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
Vue.set
	> Vue.set( target, key, value )
    返回值：设置的值。
	向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。
	它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性
	注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
Vue.delete
	删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。
Vue.directive
	注册或获取全局指令。
Vue.filter
	注册或获取全局过滤器。
Vue.component
	注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
Vue.use
	安装插件
Vue.mixin
	全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。
Vue.compile
	在 render 函数中编译模板字符串。只在独立构建时有效
	Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。
Vue.version
	提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。
```





## 五、选项 / 数据

```javascript
data
	> 类型：Object | Function
	> 限制：组件的定义只接受 function。
    > Vue 实例的数据对象
    > 实例创建之后，可以通过 vm.$data 访问原始数据对象
props
	> Array<string> | Object
	> 可以是数组或对象，用于接收来自父组件的数据。
    > 可以是简单的数组，或使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
propsData
	> 限制：只用于 new 创建的实例中。
	> 创建实例时传递 props。主要作用是方便测试。
computed
	> 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
    > 注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。
methods
	methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
    注意，不应该使用箭头函数来定义 method 函数
    是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
watch
	一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

slot
    用于标记往哪个具名插槽中插入子组件内容。
```



## 六、实例方法 / 事件

```js
vm.$on
	> 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
vm.$once
	> 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。
vm.$off
	> 移除自定义事件监听器。
vm.$emit
	> 触发当前实例上的事件。附加参数都会传给监听器回调。
```



## 七、`vue-cli` 脚手架项目构建工具

​	

```javascript
 会用到vue全家桶
 vue vue-cli axios vue-router vue-vueX
 vue-cli
    脚手架
        一个基于vue的构建工具
        搭建vue项目的环境
    好处
        兼容
        方便
        快速
   	完成遵循前后端分离
    	前端只做前端的事情
        和后端没关系
     vue开发单文件项目非常好 （SPA  ） single page app
        
    可以不用 脚手架（vue-cli）
    就可以基于 webpack 打包工具 ，要自己去进行配置
    各个版本兼容问题
    前端 有一个[配置工程师]
	webpack最终会把整个项目打包成一个js文件	
	
    下载
        模块管理工具, 下载模块
        npm
        cnpm
        yarn
    下载任何模块都可以在 npm官网上搜索得到

    先下载node

        node -v
        npm -v
    最好配置一下淘宝镜像
    npm install -g cnpm --registry=https://registry.npm.taobao.org


    https://www.npmjs.com/package/vue-cli

     cnpm i -g vue-cli

     vue -V

    先cd 到 项目文件夹里
    vue init webpack 你的项目文件夹名
------------------------	
	别安装
	esline testing  n
	Unit testing	n
	e2e  testing   n
----------------------------

    file -> setting -> director -> exclude 排除 node_moudeles文件
    开启 node 核心库
        好处 有提示 有语法高亮提示 有语法检测
        enabled
    安装 vue 语法检测插件
    file -> settings -> plugin -> browse 搜索 vue.js


	
	src目录  
    	是存放着人能够看得懂的代码 
    static
    	第三方的一些 图片 css js插件 阿里图标
	dist目录 
    	打包完成后所存放的项目，计算机能够看着懂的程序
     package.json
		开发项目，必须有，记录项目所依赖的模块
        cnpm install 安装项目的依赖模块
     package-lock.json
		描述依赖的模块的详情，比package.jso安装速度快很多
     开发环境
     	例如开发项目
        	webstorm开发软件，浏览器。。
     生产环境
     	例如 上线
        	代码上传到服务器，需要在服务器里安装浏览器，开发软件？？？不需要
```



## 八、666



		1. 组件使用
		2. 父组件传值
		3. DOM元素获取
		4. 子组件通信 
		5. 文档分类
		6. vue-router 404
		7. router-link路由参数
		8. 路径重定向
		9. 编程导航
		10. 多视图
		11. 嵌套路由
		12. axios






```css


ElementUI
介绍：Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
链接：https://element-cn.eleme.io/#/zh-CN

Mint UI
介绍：基于 Vue.js 的移动端组件库
链接：https://mint-ui.github.io/#!/zh-cn


Mui
介绍：最接近原生APP体验的高性能前端框架
链接：http://dev.dcloud.net.cn/mui/ui/

Aui 框架
介绍：使用了大量弹性响应式布局，采用容器+布局结构+控件的嵌套形式,借鉴了市场上其他优秀UI框架
链接：http://www.auicss.com/


we-vue
介绍：使用 Vue2.x + weui1.x 开发的组件
链接：https://github.com/tianyong90/we-vue

Vue-Layout
介绍：vue可视化布局
链接：https://jaweii.github.io/Vue-Layout/dist/#/

muse-ui
https://muse-ui.org/#/zh-CN/tabs



```



​	





























