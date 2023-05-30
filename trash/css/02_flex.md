# flex 布局

## flex-box

- flex-flow
  1. flex-wrap
  2. flex-direction
- justify-content
- align-items

## flex-item

- flex
  1. flex-grow
  2. flex-shrink
  3. flex-basis
- aligin-self

## 示例

### flex-box

```css
.flex-column {
  flex-flow: wrap row-reverse;
  flex-wrap: nowrap;
  flex-direction: column;
}
.between-start {
  justify-content: space-between;
  align-items: start;
}
.around-center {
  justify-content: space-around;
  align-items: center;
}
.evenly-end {
  justify-content: space-evenly;
  align-items: end;
}
```

### flex-item

```css
.flex-1 {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  align-self: stretch;
}
```
