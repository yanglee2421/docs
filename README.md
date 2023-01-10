# 随记
## Hyper Text Markup Language
- 事件属性（`on`开头的）的值会被识别为JavaScript文本
~~~html
<span onclick="console.log('测试文本')">点我一下</span>
~~~
- `a`标签`href`属性的值也可以被识别为JavaScript文本
~~~html
<a href="javascript:console.log('测试文本');"></a>
~~~
***
## Cascading Style Sheets
***
## JavaScript
- 在JS文件第一行声明`"use strict"`，即开启严格模式，严格模式下的JS运行效率更好
- 使用了模块化语句的JS会自动开启严格模式
***
## Vue2-3
- 在Vue2使用`v-on`绑定的事件默认是组件的自定义事件，需要使用原生事件时使用`.native`修饰符，且不需要在`emits`配置项中声明自定义事件