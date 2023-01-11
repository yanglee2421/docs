# 常规

## 弹出框

```js
confirm("message");
/**
 * 根据用户点击确定或是取消，返回一个布尔
 */
alert("message");
/**
 * 只有确定
 */
prompt("message");
/**
 * 返回用户输入的字符串
 */
```

## 定时器

### setTimeout

```js
const num = setTimeout(() => {
  // 100ms后，将此回调推入宏任务栈
}, 100);
clearTimeout(num);
```

### setInterval

```js
const num = setInterval(() => {
  // 每隔100ms，将此回调推入宏任务栈一次
}, 100);
clearInterval(num);
```

## 媒体查询

```js
const res = window.matchMedia("any-hover");
res = {
  matches: true,
  media: "any-hover",
  onchange: null,
};
```
