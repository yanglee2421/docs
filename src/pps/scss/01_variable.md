# Variable

## 声明

```scss
$var: null;
```

## 作用域

- 有块级作用域

```scss
$var: 1;
div {
  $var: 2;
  // 这里$var的值为2
  $let: 3;
}
// 这里$var的值为1，且这里访问不了$let
```

## 默认值

```scss
$var: 2;
div {
  // 若$var已存在，不会覆盖变量的值
  $var: 1 !default;
}
```
