# Event

## 事件监听器

```js
const fun = () => {};
dom.addEventListener("click", fun, {
  capture: true,
  once: true,
});
dom.removeEventListener("click", fun, {
  capture: false, //仅此项影响移除监听能否成功
}); //移除失败
dom.removeEventListener("click", fun, {
  capture: true, //仅此项影响移除监听能否成功
}); //移除成功
```

### 中止控制器

```js
/**
 * 控制器移除监听法
 */
const controller = new AbortController();
const { signal } = controller;
dom.addEventListener("click", () => {}, {
  signal,
});
controller.abort();
```

## 事件对象

### 阻止默认行为

```js
event.preventDefault();
```

### 停止冒泡

```js
event.stopPropagation();
```

### 事件委托

```js
// 指向触发事件的元素
event.target;
// 指向绑定该handler的元素
event.currentTarget;
```

### 指针坐标

- 以下案例属性仅 MouseEvent 具有

```js
// 相对于浏览器视口
event.clientX;
event.clientY;
// 相对于DOM盒子
event.offsetX;
event.offsetY;
// 相对于HTML文档
event.pageX;
event.pageY;
```
