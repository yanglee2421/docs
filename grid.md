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
# 2. grid-item