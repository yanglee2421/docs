# 全屏

## 进入全屏

```js
dom.requestFullscreen();
```

## 退出全屏

```js
document.exitFullscreen();
```

## 全屏事件

```js
dom.onfullscreenchange = () => {};
dom.addEventListencer("fullscreenchange", () => {});
```

## 全屏状态

```js
document.fullscreenEnabled;
document.fullscreenElement;
```
