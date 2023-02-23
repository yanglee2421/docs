# 简历

## 个人信息

- [Email](mailto:yanglee2421@outlook.com)
- [Phone](tel:18872082421)
- [短信](sms:18872082421)

## 专业技术

1. 能使用 `HTML5 + CSS3`，并结合 `Sass/Less` 等预处理器进行设计稿还原
2. 熟练掌握 `JavaScript、TypeScript`，能使用 `ES6、ES7` 等高级语法进行高效开发
3. 多次使用 `Vue 全家桶 + Element-UI` 进行项目开发，并对 `MVVM` 架构的设计思想有较为深入的研究
4. 熟悉 `React`，有使用 `React 全家桶 + ant-design` 进行项目开发的经历
5. 了解 `Webpack、Vite`，能独立搭建符合规范的脚手架，对前端工程化有一定程度的理解和实践
6. 熟悉 `Git` 分布式下的协作开发，熟悉 Git 常用命令
7. 参与过`微信小程序`项目，对 `uni-app` 和 `H5 移动端`有一定的实操经验
8. 了解 `NodeJS`，曾使用 `NestJS` 进行接口开发，掌握`Npm`、`Yarn` 包管理工具
9. 会经常封装一些公用组件、公用函数以及公用 Hook 以提高开发效率
10. 在项目中，对于代码优化、打包优化、请求优化等优化措施有大量实践
11. 喜欢思考问题，并进行知识输出，撰写的技术文章已收获 `1500+` 阅读

## 工作经历

### 武汉发网科技有限公司 <Badge text="2022.03-2022.11"/>

<p style="text-indent:2em">
负责公司前端项目的开发和维护。在职期间成功解决 CRM 和 PMS 中累计 20 多个页面在交互上长期存在的各种痛点、大幅提高页面整体美观度、优化老旧代码的可维护性和规范性。参与各类前端项目迭代累计 20 多次，并根据业务需要不断学习 React、TypeScript、微信小程序、uni-app 等各类前端技术，持续总结项目经验，将复现率高的代码封装为简单易用的公共组件，并在项目中推进 TypeScript，建立统一的代码风格，月绩效多次达到 90 以上。
</p>

## 项目经验

### FAPD 敏捷开发平台 <Badge text="2022.09-2022.11"/>

<p style="text-indent:2em">
服务于软件开发人员的 ERP 系统，类似腾讯 TAPD，旨在解决敏捷开发流程中业务不规范、沟通交流复杂的问题，为开发流程中的项目排期、产品需求规范化，Bug 点收集整理提供专业的解决方案
</p>

- 技术栈：vue3 全家桶、Element-Plus、TypeScript、Sass
- 要点：
  > 1. 编写登录模块，支持自动注销、组件鉴权、登录状态持久化等功能
  > 2. 编写 axios 实例，支持加载动画、取消请求、请求超时、错误信息拦载等
  > 3. 根据业务需求封装了树组件，支持添加，搜索，编辑等
  > 4. 封装了下拉组件，支持分页、远程搜索、字段回显
  > 5. 封装了 useDark 钩子，用以实现暗夜模式跟随浏览器主题
  > 6. 封装了 useResize 钩子，解决了 dom 没有 resize 事件的问题
  > 7. 改进生成柱形图、折线图、饼图等 echarts 图的公用函数，实现图表尺寸的自适应
  > 8. 模拟 bootstrap 编写全局 Scss 工具类和混合器

### LMS 劳务工系统 <Badge text="2022.07-2022.08"/>

<p style="text-indent:2em">
主要面向有大批量人员管理需求的企业管理者，着重解决大型公司中人员数量庞大、部门交错繁多、组织结构复杂的问题，目前该系统中有近5万+的人员数据，已有多家企业采用该系统进行人员管理
</p>

- 技术栈：Vue3 全家桶、Element-Plus、TypeScript、Sass
- 要点：
  > 1. 处理了上传图片的逻辑，支持图片裁切、图片转 base64
  > 2. 处理大文件分片上传的逻辑，解决 100M 以上文件不能上传的问题
  > 3. 处理了将页面数据导出为 excel 的逻辑
  > 4. 由于旧版组件库缺功能，手写了 el-switch 组件
  > 5. 封装了消息轮播组件，支持滚动播放、自动播放
  > 6. 封装了 input 组件，解决 Firefox 中 input 并不限制输入字符的问题
  > 7. 封装了 image 组件，针对图片加载失败的情况显示替代内容
  > 8. 为旧代码编写类型声明，解决项目在从 JavaScript 转向 TypeScript 的过程中，部分代码缺少类型声明的问题

### TMS 运输流程系统 <Badge text="2022.05-2022.06"/>

<p style="text-indent:2em">
服务于供应链型企业，着重解决因客户需求不统一，产品类目繁多，运输线路复杂等引发的运输事故，为产品运输过程中的发车线路规划，流程节点管理，运输人员部署等需求提供解决方案
</p>

- 技术栈：Vue3 全家桶、Element-Plus、TypeScript、Sass
- 要点：
  > 1. 处理了网页埋点的逻辑，能够收集用户事件、页面曝光时间、跳转情况
  > 2. 处理复杂动态表单的校验，统一对失败的情况给出提示
  > 3. 编写了防抖节流工具类，规避多次发起网络请求拖慢服务器的问题
  > 4. 封装 v-drag 指令，实现动态表单项拖拽排序功能
  > 5. 封装用于日期格式化的公用函数
  > 6. 封装 v-collapse 指令，实现自定义折叠动画

### CRM 客户关系系统 <Badge text="2022.03-2022.04"/>

<p style="text-indent:2em">
面向客户、销售人员以及销售管理者的数据交互平台，方便管理者及时
了解产品的销售进度和维护销售和客户间的对应关系，为客户提供产品介绍、
合同速览等功能，为销售人员提供数据收集整理功能
</p>

- 技术栈：Vue2、Element-UI、Vuex、Sass
- 要点：
  > 1. 封装滚动条组件，解决 Chrome 和 Firefox 中滚动条样式不统一的问题
  > 2. 在 Vue2 中还原 teleport 组件，实现多级菜单
  > 3. 在 MVC 架构下实现页面跳转时的相互传参
  > 4. 封装表单、表格、分页、弹出框等组件简化开发流程
  > 5. 调整旧有页面实现自适应布局，解决长期以来网页排版混乱的问题

## 教育背景

- 院校：武昌工院 <Badge text="2018-2022"/>
- 专业：计算机科学与技术
- 主修课程：计算机网络、数据库系统原理、数据结构、操作系统等
- 曾获荣誉：校奖学金

## 自我评价

吃苦耐劳:sweat_drops:，接受加班:ok_hand:。

## 踩坑记

- 在`try`中`return Promise.reject()`不会触发`catch`，`await Promise.reject()`会
- `createHashRouter`的`basename`会被拼到 hash 而不是 path 中
- `try...catch...finally`中`finally`的`return`会覆盖前两者的`return`或`throw`，即使前两者执行了`return`或`throw`，`finally`块也会执行
- 函数内部若依赖于一些外部变量，那么函数提升可能会带来一些问题
- 原始类型是没有属性和方法的，但大部分原始值仍然表现得像有一样。当在原始值上访问属性时，JavaScript 自动将值装入包装器对象中，并访问该对象上的属性。例如，"foo".includes("f") 隐式创建了一个 String 包装对象，并在该对象上调用 String.prototype.includes()。
- `Boolean`、`Number`、`BigInt`、`String`、`Symbol`被`new`调用时，返回一个与原始值对应的包装对象而非原始值本身
- 隐式类型转换依赖于原始值包装对象
- 包装对象浅等于对应的原始值
- 不存在用来包装`undefined`和`null`的对象，故从它们身上访问属性或方法时，会抛出`TypeError`
- github pages 默认使用 jekyll 进行部署，jekyll 会忽略`_`开头的文件，需要添加`_config.yml`文件指定要包含的文件
- `_config.yml`要放到 github pages 的部署目录下
- 也可以在部署目录下生成一个`.nojekyll`文件，以关闭 jeklly 部署
- CssModule 会编译伪类中的类名、`:global`指令里的类名不会被编译
- `touchmove`事件在移动端（IOS 上没有）有一个默认行为，input 的内容可以被滑动，可以使用[pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)、[touch-action](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)禁用它
- form 标签可以用`FormData`类和`formdata`事件收集其中的数据
- `input[type=reset]`可以将 form 中的 input 的 value 还原为其 value 属性上写定的值
- 每当组件函数执行时，调用的 hook 数必须一致
- border-box 的使用场合：需要给子元素设置 padding、border 或百分比的宽高
- JS 可以使用`getComputedStyle()`访问到 CSS 为元素设置的样式
- vue 中：只有 dom 更新才会触发 update 钩子，更新的 dom 属于哪个组件，哪个组件的 update 钩子就触发
- 除了已开启定位的元素外，`z-index`也对 flex-item 生效
- fixed 定位并不总是相对于视口，当元素祖先的 transform、perspective、filter 或 backdrop-filter 属性非 none 时，容器由视口改为该祖先。
- 不能从 React.MouseEvent 上直接访问 offsetX/offsetY、需通过 e.nativeEvent 先访问原生事件
- MouseEvent：client 系相对于视口、offset 系相对于盒元素、screen 系相对于屏幕、page 系相对于网页
- 函数访问变量时，先找自身作用域、自身作用域没的找闭包、闭包也没有的找外层作用域
- JSON 的两个方法仅适用于可序列化的数据，更合理的深克隆方案是[structuredClone](https://developer.mozilla.org/zh-CN/docs/web/api/structuredClone)
- antd：Table 不能没有 rowkey
- vue3：watch、watchEffect 提供了用于清除 effect 的 API
- vue3：watch 执行栈：clearFn(sync)-->watcher(sync)-->clearFn(pre)-->watcher(pre)-->beforeUpdate-->clearFn(post)-->watcher(post)-->updated-->nextTick
- antd：Modal 里套 Form 时，需要指定 forceRender
- antd：Form.Item 会接管内部 Input 的 value，需要以 form.setFieldValue 改值
- http：browser 端的 get 不支持 body，server 端则普遍支持（node 上的 fetch 除外）
- browser：dom 的 id 可以当变量在控制台输出 dom（默认行为）
- structuredClone 不能处理 proxy 实例
- 不能用`let`、`const`重新声明已被`var`声明过变量，`let`、`const`会销毁块作用域内已存在的同名变量

```js
var a = 1;
if (a) {
  console.log(a); //Cannot access 'a' before initialization
  const a = 1;
}
```

- yarn3 安装的依赖由于是压缩的无法直接被 typescript 识别
- `==`运算符将对象转化为基本类型时，会调用`@toPrimitive`、`valueOf`、`toString`
- 需自动生成多个`then`时，可以使用`reduce`
- React 中`props.children`的`props`不能值接修改，但可以使用`React.cloneElement`的二参复制一个具有不同`props`的元素
- 微信开发者工具测试蓝牙情况时，相比正式版小程序会有更大的响应延迟
- `new URL`第二个参数`/`及后的部分会被舍弃
