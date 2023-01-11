# 条件分支语句

## if...else if...else

```js
let i = 0;
if (i === 1) {
  i + 1;
} else if (i === 2) {
  i - 1;
} else if (i === 3) {
  i++;
} else {
  ++i;
}
```

## switch

```js
/**
 * case关键字后面必须是一个字面量，不能是表达式
 */
let i = 0;
switch (i) {
  case 1:
    i + 1;
    break;
  case 2:
    i - 1;
    break;
  default:
    i++;
}
```

## 卫函数

```js
function fun() {
  if (i === 1) {
    return;
  }
  if (i === 2) {
    return;
  }
}
```
