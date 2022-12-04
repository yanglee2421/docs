# grid 布局

## 网格容器

- grid-template
  1. grid-template-rows
  2. grid-template-columns
- grid-auto-rows
- grid-auto-columns
- grid-auto-flow
- grip-template-areas
- gap
  1. rows-gap
  2. columns-gap
- place-content
  1. align-content
  2. justify-content
- place-items
  1. align-items
  2. justify-items

### 是否需要斜线

- grid-template 需要用`/`分隔行和列，`/`前是行，`/`后是列
- gap 不需要分隔

```css
.grid-box {
  display: grid;
  grid-template: auto/repeat(2, minmax(100px, 1fr));
  gap: 10px 20px;
}
```

### 布局流和 dense

- row（default）从左往右模着排
- column 从上向下竖着排
- 设置 dense 表示尽可能不空置网格

```css
.grid-box {
  grid-auto-flow: row;
  grid-auto-flow: column;
  /* item间不允许有空格 */
  grid-auto-flow: row dense;
  grid-auto-flow: column dense;
}
```

### content 和 items 的可选值

- 两者都有的
  1. stretch
  2. start
  3. center
  4. end
- content 独占
  1. space-between
  2. space-around
  3. space-evenly

## 网格项

- grid-row
  1. grid-row-start
  2. grid-row-end
- grid-column
  1. grid-column-start
  2. grid-column-end
- grid-area
- place-self
  1. align-self
  2. justify-self

### 斜线和 span

- grid-row 和 grid-column 需要用`/`分隔 start 和 end
- span 关键字指定 item 所占的行或列的个数

```css
.grid-item {
  grid-row: 1 / span 2;
  grid-column: span 1 / 3;
}
```

## 函数

### repeat

```css
div {
  padding: repeat(3, 10px);
}
```

### minmax

```css
div {
  /* 
  最小不能小于100px
  最大不能大于1fr
  flex长度不能作为minValue
   */
  width: minmax(100px, 1fr);
}
```

### min

```css
div {
  /*
  选取参数中最小值返回 
  用来指定最大值
   */
  height: min(100px, 50%);
}
```

### max

```css
div {
  /*
  选取参数中最大值返回 
  用来指定最小值
   */
  height: max(100px, 50%);
}
```
