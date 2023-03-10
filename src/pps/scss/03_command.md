# Command

## 引入

- `@use`
- `@forward`
- `@import`（即将废弃）

```scss
/*
 * 引入规则
 * 引入变量，但当前模块被其它 scss 引用时不会向外转发引入的变量
 * 支持引用css
 * 省略 as 时，默认取 fileName 作为命名空间
 * 不需要命名空间时，as *
 */
@use "./path/fileName.scss" as *;
/**
 * 引入规则
 * 转发变量，这些变量在当前模块不能使用，其它模块引用此模块时才可用
 * 可用 as 为当前为转发的变量添加前缀
 * 省略 as 时，引用的变量没有前缀
 */
@forward "./path" as head-*;
/**
 * 变量名以中划线开头时，该变量为私有变量，不会被其它scss引入
 */
$-var: 10px;
/**
 * 不能直接导入css
 */
@import "@/assets/scss/index.scss";
```

## 混合器

- `@mixin`
- `@include`

```scss
@mixin mixin($bg: #000) {
  background: $bg;
}
div {
  @include mixin(#fff);
}
```

## 继承

- `@extend`

```scss
.border {
  border: 1px red solid;
}
div {
  @extend.border;
}
```

## 媒体查询

- `@media`

```scss
div {
  @media (min-width: 700px) and (max-width: 1100px) {
  }
  @media (any-hover: none) {
  }
  @media (any-hover: hover) {
  }
  @media (any-pointer: none) {
  }
  @media (any-pointer: coarse) {
  }
  @media (any-pointer: fine) {
  }
}
```

## 条件分支

- `@if`
- `@else if`
- `@else`

```scss
$var: 1;
@if ($var==1) {
  $let: 1;
} @else if($var==2) {
  $let: 2;
} @else {
  $let: 3;
}
```

## 循环

- `@for`
- `@while`

```scss
@for $i from 1 to 100 {
  // 1-99
}
@for $i from 1 through 100 {
  // 1-100
}
$i: 1;
@while ($i<5) {
  $i: $i + 1;
}
```

## 遍历

- `@each`

```scss
$arr: 1, 2, 3;
@each $item in $arr {
  $index: index($arr, $item);
}
```
