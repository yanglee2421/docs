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
8. 了解 `Node.js`，能使用 `Express` 进行接口开发，能使用 `Yarn` 包管理工具
9. 会经常封装一些公用组件、公用函数以及公用 Hook 以提高开发效率
10. 在项目中，对于代码优化、打包优化、请求优化等优化措施有大量实践
11. 喜欢思考问题，并进行知识输出，撰写的技术文章收获 `1200+` 阅读

## 工作经历

## 项目经验

## 教育背景

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
