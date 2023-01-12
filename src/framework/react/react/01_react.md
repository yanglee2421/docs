# React 顶层 API

## memo

```jsx
const App = () => <></>;
export default React.memo(App);
```

::: tip

- 默认情况下，父组件函数执行时，其子组件也会重新执行
- 被 React.memo 返回的组件，仅在自身 props 和 state 发生变化时执行
  :::

## forwardRef

::: code-group

```jsx [demo01.jsx]
const MyComp = React.forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});
```

```jsx [demo02.jsx]
const MyComp02 = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    func: () => {},
    message: "要外传的信息",
  }));
  return <></>;
});
```

:::
::: details

1. ref 不属于 props，不能直接转发
2. 用于转发组件接收到的 ref 到 dom 实例上
3. 也可以配合 useImperativeHandle()自定义 ref 曝露的对象

:::

## lazy & Suspense

```jsx
const MyComp = React.lazy(() => import("./MyComp"));
function App() {
  return (
    <React.Suspense fallback={<p>MyComp未加载时显示这段文字</p>}>
      <MyComp />
    </React.Suspense>
  );
}
```

::: danger
React.lazy 返回的组件只能在 React.Suspense 节点下调用
:::

## createContext

::: code-group

```jsx [parent.jsx]
const context = React.createContext();
function App() {
  const [data, setData] = useState({ message: "一些数据" });
  return (
    <Context.Provider value={{ data, setData }}>
      <Children />
    </Context.Provider>
  );
}
```

```jsx [children.jsx]
function Children() {
  const { data, setData } = useContext(context);
  return (
    <Context.Customer>
      {({ data, setData }) => <div>{data.message}</div>}
    </Context.Customer>
  );
}
```

:::
::: tip
用于祖先向后代传参
:::

## Fragment

```tsx
function App() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
// 简写
function App() {
  return <></>;
}
```

::: details

- 解决 React 组件必须返回一个根节点的问题
- Fragment 不会渲染为实际节点

:::

## Children

### map

- 返回一个数组

```js
React.Children.map(children, (thisArg) => {});
```

### forEach

```js
React.Children.forEach(children, (thisArg) => {});
```

### count

- 返回节点数

```jsx
React.Children.count(children);
```

### only

- 若 children 中只有一个子节点则返回它
- 若不是则抛出错误

```js
React.Children.only(children);
```

### toArray

- 将 children 扁平化展开
- 返回一个 array

```js
React.Children.toArray(children);
```
