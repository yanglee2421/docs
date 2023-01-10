# Fragment

## 完整

- 解决 React 组件必须返回一个根节点的问题
- 不会渲染为实际节点

```jsx
function App() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```

## 简写

```jsx
function App() {
  return <></>;
}
```
