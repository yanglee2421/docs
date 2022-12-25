# ReactDom 上的 API

## CreateRoot

- 把 ReactNode 挂载到真实 dom 上

```jsx
const dom = document.querySelector("#root");
ReactDom.createRoot(dom).render(<App />);
```

## Portals

- 类似 Vue3 中的 teleport 组件
- 用于手动指定 ReactNode 挂载的位置

```jsx
const jsx = <div class="dialog"></div>;
const dom = document.querySelector("body");
function Dialog() {
  return ReactDom.createPortal(jsx, dom);
}
```
