# Function

## if

- scss 中的三元运算符

```scss
$i: if(true, 1, 2);
```

## rgba

- 提供一种简化的写法

```scss
div {
  color: rgba(#f00, 0.5);
}
```

## random

- 生成随机数

```scss
$i: random();
```

## $list

### index

```scss
$list: 1, 2, 3;
@each $item in $list {
  $index: index($list, $item);
}
```

### nth

- scss 中的索引是从 1 开始的

```scss
$list: 1, 2, 3;
$item-1: nth($list, 1);
```

### set-nth

```scss
$list: 1, 2, 3;
$item-1: set-nth($list, 1, "一个值");
```

### length

- 返回数组的长度

```scss
$list: 1;
$length: length($list); //1
```

### append

```scss
$list: 1;
$item: append($list, "要插入的值", ",");
```

### join

```scss
$list01: 1;
$list02: 1;
$list: join($list01, #list02);
```

### is-bracketed

```scss
$list: 1;
$boolean: is-bracketed($list);
```
