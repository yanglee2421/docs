# RegExp

## 构造器

```js
const reg = new RegExp("string", "sign");
```

## 实例方法

### `test(string)`

## 标志

| 标志 |       作用        |
| :--: | :---------------: |
| `g`  |     全局匹配      |
| `i`  |                   |
| `u`  | 开启 unicode 模式 |
| `m`  |                   |
| `s`  |                   |

## 转义

- `\d`

## Unicode 属性类

```js
/**
 * 用来正确处理大于\uFFFF的Unicode字符
 */
const reg = /\u{4e00}/u;
/**
 * unicode属性类（需要开启u标志）
 */
/\p{Script=Greek}/u //匹配希腊文
/\p{sc=Han}/u //匹配所有汉字
/\P{Number}/u //Unicode中所有表示数字的字符
/\P{Block=Arrows}/u //unicode中所有表示箭头的字符
/\P{White_Space}/u //unicode中所有的空格
```
