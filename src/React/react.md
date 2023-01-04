# React

## memo

- 默认情况下，父组件函数执行时，其子组件也会重新执行
- 被 React.memo 返回的高阶组件仅在自身 props 和 state 发生变化时执行

```jsx
const App = () => <></>;
export default React.memo(App);
```

## forwardRef

1. ref 不属于 props，不能直接转发
2. 用于转发组件接收到的 ref 到 dom 实例上
3. 也可以配合 useImperativeHandle()自定义 ref 曝露的对象

```jsx
const MyComp = React.forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});
const MyComp02 = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    func: () => {},
    message: "要外传的信息",
  }));
  return <></>;
});
```

## lazy & Suspense

1. React.lazy 返回的组件需要在 React.Suspense 节点下调用

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

## createContext

1. 用于祖先向后代传参

```jsx
/**
 * 1.创建Context组件
 * 2.Context.Provider提供数据
 * 3.useContext()接收数据
 * 4.Context.Customer接收数据
 */
const context = React.createContext();
function App() {
  const [data, setData] = useState({ message: "一些数据" });
  return (
    <Context.Provider value={{ data, setData }}>
      <Children />
    </Context.Provider>
  );
}
function Children() {
  const { data, setData } = useContext(context);
  return (
    <Context.Customer>
      {({ data, setData }) => <div>{data.message}</div>}
    </Context.Customer>
  );
}
```
