# Nesting

## 实质

- 嵌套的实质是后代选择器的语法糖

```scss
div {
  span {
    text-align: center;
  }
}
// 结果如下：
div span {
  text-align: center;
}
```

## 群组

```scss
div,
p {
  span {
    text-align: center;
  }
}
// 结果如下
div span {
  text-align: center;
}
p span {
  text-align: center;
}
// 另一种情况
div {
  p,
  span {
    text-align: center;
  }
}
// 结果如下
div p {
  text-align: center;
}
div span {
  text-align: center;
}
```

## 父代选择器

- `&`

```scss
div {
  &:hover {
    word-break: break-all;
  }
}
// 结果如下：
div:hover {
  word-break: break-all;
}
```

## 关系选择器

- `>`
- `~`
- `+`

```scss
div {
  > p {
    background-clip: text;
  }
  + input {
    background-attachment: fixed;
  }
  ~ span {
    background-size: cover;
  }
}
```

## 属性嵌套

```scss
div {
  border: {
    color: #fff;
    width: 1px 1px 0 0;
  }
}
```
