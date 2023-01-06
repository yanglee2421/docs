# ReactDom 上的 API

## CreateRoot

- 把 ReactNode 挂载到真实 dom 上

```jsx
import ReactDom from "react-dom/client";
const dom = document.querySelector("#root");
const root = ReactDom.createRoot(dom);
root.render(<App />);
root.unmount();
```

## Portals

- 类似 Vue3 中的 teleport 组件
- 用于手动指定 ReactNode 挂载的位置

```jsx
import ReactDom from "react-dom";
const jsx = <div class="dialog"></div>;
const dom = document.querySelector("body");
function Dialog() {
  return ReactDom.createPortal(jsx, dom);
}
```
