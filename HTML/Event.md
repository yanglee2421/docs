# Event

## 实例属性

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

## 实例方法

```js
event.preventDefault();
event.stopPropagation();
```

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

## 中止控制器

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
