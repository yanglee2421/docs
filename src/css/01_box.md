# 盒模型

## box-sizing

- ie 盒下：width or height = content + padding + border
- w3c 盒下：width or height = content

```css
* {
  /* ie盒模型 */
  box-sizing: "border-box";
}
```

## content

- width
- height

## padding

- 值为百分比时，以 box 的 width 为 100%
- padding
  1. padding-top
  2. padding-right
  3. padding-bottom
  4. padding-left
- padding-inline
  1. padding-inline-start
  2. padding-inline-end
- padding-block
  1. padding-block-start
  2. padding-block-end

## border

- border
  1. border-width
  2. border-style
  3. border-color
- border-inline
  1. border-inline-start
  2. border-inline-end
- border-block
  1. border-block-start
  2. border-block-end

## border-radius

- border-radius
  1. border-top-left-radius
  2. border-top-right-radius
  3. border-bottom-right-radius
  4. border-bottom-left-radius

```css
.box {
  border-radius: 1px 3px 5px 7px / 2px 4px 6px 8px;
  border-top-left-radius: 1px 2px;
  border-top-right-radius: 3px 4px;
  border-bottom-right-radius: 5px 6px;
  border-bottom-left-radius: 7px 8px;
}
```

## margin

- 值为百分比时，以 box 的 width 为 100%
- margin
  1. margin-top
  2. margin-right
  3. margin-bottom
  4. margin-left
- margin-inline
  1. margin-inline-start
  2. margin-inline-end
- margin-block
  1. margin-block-start
  2. margin-block-end

## box-shadow

1. x 偏移
2. y 偏移
3. 模糊半径
4. 扩散半径
5. 颜色?
6. inset 关键字?

```css
/* 多个阴影用,分隔 */
.box {
  box-shadow: 3px 3px red, -1em 0 0.4em olive;
}
```
