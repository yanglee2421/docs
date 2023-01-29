# Boolean

## falsy & truthy

- JS 中有八个值，在进行布尔运算时视为 false
- 除以上八个值外，其余值均为 thruthy

```js
undefined;
null;
false;
0;
-0;
NaN;
0n;
("");
```

## 函数本身

- 用来作类型转换

```js
const boolean = Boolean("用来生成布尔的值");
boolean == true; //true
boolean === true; //true
```

## 构造器

- 原始类型不是`new`出来的
- `new`出的是对象，不是原始类型

```js
const boolean = new Boolean("用来生成布尔的值");
boolean == true; //true
boolean === true; //false
```
