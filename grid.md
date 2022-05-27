# 1. grid-box
## 网格之外
- `display`
>- `grid`
>- `inline-grid`
- `repeat()`
~~~css
div{
    padding:repeat(3, 10px)
}
.grid-box {
    grid-template-rows:repeat(auto-fill, 100px)
}
~~~
## 模板
~~~css
.grid-box {
    grid-template-columns:100px 1fr;
    grid-template-rows:auto 1fr auto;
    /* 新增网格的行列 */
    grid-auto-columns:100px;
    grid-auto-rows:1fr;
}
~~~
>- `100px`
>- `10%`
>- `auto`
>- `1fr`
>- `minmax(min, max)`
>- `[lineName]`
~~~css
.grid-box {
    grid-template-areas:
    'a a . b'
    'a a . c'
    'd . e c';
}
~~~
- `a-start`&`a-end`
~~~css
.grid-box {
    grid-template:rows/columns;
    grid-template:none;
}
~~~
## 间距
~~~css
.grid-box {
    grid-gap:10px 10px;
    grid-row-gap:20px;
    grid-column-gap:30px;
    grid-gap:15px;
}
~~~
## 流
~~~css
.grid-box {
    grid-auto-flow:row;
    grid-auto-flow:column;
    /* item间不允许有空格 */
    grid-auto-flow:row dense;
    grid-auto-flow:column dense;
}
~~~
## 对齐
~~~css
.grid-box {
    /* 网格在content中的对齐方式 */
    justify-content:stretch;
    align-content:stretch;
    place-content:align justify;
    /* item在网格中的对齐方式 */
    justify-items:stretch;
    align-items:stretch;
    place-items:align justify;
}
~~~
>- `stretch`
>- `start`
>- `center`
>- `end`
- `content`独有的
>- `space-between`
>- `space-evenly`
>- `space-around`
# 2. grid-item
## 指定
~~~css
.grid-items {
    grid-row-start:1;
    grid-row-end:2;
    grid-row:1/2;
    grid-column-start:2/span 2;
    grid-column-end:2;
    grid-column:1/2;
    grid-area:a;
}
~~~
>- `number`
>- `[lineName]`
>- `span`，默认是1
## 对齐
~~~css
/* 用来覆盖grid-box上的place-items */
.grid-items {
    justify-self:stretch;
    align-self:stretch;
    place-self:align justify;
}
~~~