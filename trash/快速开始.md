# 变量
## 声明
~~~scss
:root{
  $var:10px;
  $var-2:20px;
}
~~~
## 引用
~~~scss
div{
  height:$var;
}
~~~
## 中划线还是下划线
~~~scss
:root{
  $var_1:10px;
  $var-1:20px;
}
/*
以上两个声明指向同一个变量
结果取后声明的那个
*/
~~~
# 嵌套
## `&`
~~~scss
.father{
  $height:10px
  &:hover{
    height:$height;
  }
}
/* 编译结果如下 */
.father:hover{
  height:10px
}
~~~
## 群组
~~~scss
.bor1, .bor2, .bor3{
  .son{ height:10px; }
}
/* 编译结果如下 */
.bor1 .son { height:10px }
.bor2 .son { height:10px }
.bor3 .son { height:10px }
/* -------------------反过来也是一样------------ */
.bor{
  .son1, .son2, .son3{ height:10px }
}
/* 结果如下 */
.bor .son1 { height:10px }
.bor .son2 { height:10px }
.bor .son3 { height:10px }
~~~
## `>、+、~`
- `>`，儿子们
- `+`，紧跟着的弟弟
- `~`，弟弟们
## 嵌套属性
~~~scss
div{
  margin:{
    top:0;
    right:0;
    bottom:0;
    left:0;
  }
}
~~~
# 导入
## `@import './file'`
~~~scss
@import "./flex"
~~~
## 变量默认值
~~~scss
$height:100px !default;
/* 此次声明之前若已经存在$height则此句不生效 */
~~~
## 嵌套导入
~~~scss
div{
  @import './index'
}
~~~
## 导入CSS
~~~scss
@import "./index.css"
~~~
# 注释
## 单行
~~~scss
//单行不会被编译到css文件中
~~~
## 多行
~~~scss
/*
多行会被编译到css文件中
第二行
第三行
*/
~~~
# 混合器
## `@mixin`
~~~scss
@mixin seletor{
  border:1px red solid;
}
~~~
## `@include`
~~~scss
div{
  @include seletor
}
~~~
## 混合器中写规则
~~~scss
@mixin seletor {
  div{
    border:1px green dashed;
  }
}
~~~
## 混合器传参
~~~scss
@mixin seletor($height, $width) {
  width:$width;
  height:$height;
}
div{
  @include seletor(10px, 20px)
}
~~~
## 混合器参数默认值
~~~scss
@mixin seletor(
  $width:10px,
  $height:20px
)
{
  width:$width;
  height:$height;
}
~~~
# 继承
## 实质
~~~scss
.a{ height:10px }
.b{ width:10px }
.c{
  @extend.a;
  @extend.b;
}
//编译结果如下
.a, .c { height:10px }
.b, .c { width:10px }
~~~
## 继承与混合器
- 混合器将内容重复写一遍
- 继承仅仅是在被继承的类后添加选择器
- 继承性能更好
# `@`
- `@for`
~~~scss
@for $i from 1 through 10{
  .height-#{$i} {
    height:#{$i}0px;
  }
}
//使用to时不包含最后一个数
@for $i from 1 to 10{
  .height-#{$i} {
    height:#{$i}0px;
  }
}
~~~
- `@each`
~~~scss
$arr:10px, 20px, 30px;
@each $item in $arr{
  $index:index($arr, $item);
  .width-#{#index} {
    width:$item;
  }
}
~~~
- `@while @if、@else if、@else`
~~~scss
$i:0;
@while $i < 100 {
  .item-#{$i}{width:#{$i + 'px'}}
  $i:$i + 1
}
@if $i >　10 {
  .item-#{$i}{width:#{$i + 'px'}}
}
@else if $i > 5 {
  .item-#{$i}{width:#{$i + 'px'}}
}
@else {
  .item-#{$i}{width:#{$i + 'px'}}
}
~~~
- `random(255)`
- `and or not == !=`