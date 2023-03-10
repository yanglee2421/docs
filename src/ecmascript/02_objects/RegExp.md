# RegExp

## 构造器

```js
const reg = new RegExp("string", "sign");
```

## 实例方法

### `test(string)`

## 标志

| 标志 |          作用          |
| :--: | :--------------------: |
| `g`  |        全局匹配        |
| `i`  |       忽略大小写       |
| `u`  |   开启 unicode 模式    |
| `m`  | 使`^`和`$`能够匹配多行 |
| `s`  |   使`.`能够匹配`\n`    |

## 转义

- `\d`
  | 字符 | 作用 |
  | :--: | :---------------: |
  | `^` | 字符串开始 |
  | `$` | 字符串结束 |
  | `\n` | 匹配换行符 |
  | `.` | 同`[^\n]` |
  | `\b` |匹配单词和空格之间 |
  | `\B` |同`[^\b]` |
  | `\d` | 同 `[0-9]` |
  | `\D` |同`[^\d]` |

## 量词

|  字符   |             作用              |
| :-----: | :---------------------------: |
|   `?`   |          同 `{0,1}`           |
|   `*`   |           同`{0,}`            |
|   `+`   |           同`{1,}`            |
|  `{n}`  |          出现 `n` 次          |
| `{n,m}` | 出现`n` - `m`次(包含`n`和`m`) |

## 贪婪匹配

- 默认贪婪，需要+`?`开启非贪婪

```js
const reg1 = /^.*&/;
const reg01 = /^.*?&/;
const reg2 = /^.+&/;
const reg02 = /^.+?&/;
```

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
