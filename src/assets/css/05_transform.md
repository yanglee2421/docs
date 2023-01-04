# 过渡效果

## transform-origin

- 用于设置旋转的圆心的坐标
- 可依次设置 x y z 三个值
- x、y、z 的可选值：
  1. center
  2. top
  3. right
  4. bottom
  5. left
  6. 百分比
  7. 长度值

## transform-style

- 用于设置子元素的转换 2D 还是 3D
- 可选值
  1. flat
  2. preserve-3d

## perspective

- 3D 下摄像机的距离

```css
.trans-box {
  transform-style: preserve-3d;
  perspective: 1200px;
}
.trans-box > .trans-item {
  transform: translateZ(100px);
}
```

## transform

### 平移

- 此处的 x、y、z 均为长度
- 若 x、y、z 为百分比，则取元素自身的宽度为 100%，而不是包含块
  1. translate(x, y)
  2. translateX(x)
  3. translateY(y)
  4. translateZ(z)
  5. translate3d(x, y, z)

### 旋转

- 此处和 x、y、z 均为小数
  1. rotate(45deg)
  2. rotateX(45deg)
  3. rotateY(45deg)
  4. rotateZ(45deg)
  5. rotate3d(x, y, z, 45deg)

### 缩放

- 此处的 x、y、z 均为小数
  1. scale(x, y)
  2. scaleX(x)
  3. scaleY(y)
  4. scaleZ(z)
  5. scale3d(x, y, z)
