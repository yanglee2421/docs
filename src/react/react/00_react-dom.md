# ReactDom

## CreateRoot

```jsx
import ReactDom from "react-dom/client";
const dom = document.querySelector("#root");
const root = ReactDom.createRoot(dom);
root.render(<App />);
root.unmount();
```

::: danger
React 生成的是 ReactNode 不是真实 dom
:::

## Portals

```jsx
import ReactDom from "react-dom";
const jsx = <div class="dialog"></div>;
const dom = document.querySelector("body");
function Dialog() {
  return ReactDom.createPortal(jsx, dom);
}
```

::: tip
类似 Vue3 中的 teleport 组件，用于手动指定 ReactNode 挂载的位置
:::
