# 标志
- `g`
- `i`
- `m`
- `s`
- `u`
~~~js
/**
 * 用来正确处理大于\uFFFF的Unicode字符
 * 
 */
const reg = /\u{4e00}/u
~~~
# 转义
- `\d`
- `\p`or`\P`
~~~js
/**
 * unicode属性类
 * 需要开启u标志
 */
/\p{Script=Greek}/ //匹配希腊文
/\p{sc=Han}/ //匹配所有汉字
/\p{Number}/ //Unicode中所有表示数字的字符
/\p{Block=Arrows}/ //unicode中所有表示箭头的字符
/\p{White_Space}/ //unicode中所有的空格
~~~
# 