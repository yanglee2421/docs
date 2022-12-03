# Boolean

## falsy、truthy

```js
/**
 * 进行布尔运算时视为false
 * js中有八个值
 */
undefined;
null;
false;
0;
-0;
NaN;
0n;
("");
/**
 * 进行布尔运算时视为true
 * js中的值除以上八个以外全是truthy
 */
```

## 函数本身

```js
const boolean = Boolean("用来生成布尔的值");
boolean == true; //true
boolean === true; //true
```

## 构造器

```js
const boolean = new Boolean("用来生成布尔的值");
boolean == true; //true
boolean === true; //false
```
