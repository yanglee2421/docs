# 值与单位

## 长度

### 绝对长度

| 单位 |   含义    |
| :--: | :-------: |
|  cm  |   厘米    |
|  mm  |   毫米    |
|  Q   | 0.25 毫米 |
|  in  |   英寸    |
|  pc  | 1/6 英寸  |
|  pt  | 1/72 英寸 |
|  px  |   像素    |

### 相对长度

| 单位 |                       含义                        |
| :--: | :-----------------------------------------------: |
|  em  |                元素内的 font-size                 |
|  ex  |                   字符`x`的高度                   |
|  ch  |                   字符`0`的宽度                   |
| rem  |                html 内的 font-size                |
|  lh  |               元素内的 line-height                |
|  vw  |                    视口宽的 1%                    |
|  vh  |                    视口高的 1%                    |
| vmin |                 视口较小尺寸的 1%                 |
| vmax |                 视口较大尺寸的 1%                 |
| xxx% | 相对于包含块的宽高（在不为 auto 的情况下）的 xxx% |

### calc

```css
.box {
  width: 100px;
  height: calc(100vw - 100px);
}
```

## 颜色

### 关键字

```css
span {
  color: red;
  background: blue;
}
```

### 十六进制

```css
span {
  color: #f00;
  background: #1b1a1c;
}
```

### RGB&RGBA

```css
.div {
  color: rgb(255, 0, 0);
  background: rgba(0, 0, 0, 0.5);
}
```
