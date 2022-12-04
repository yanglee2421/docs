# 两种组件中都需要的 API

## React

### Context

- 用于祖先向后代传参

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
      <Children></Children>
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

### ForwardRef

1. ref 不属于 props，不能直接转发
2. 用于转发组件接收到的 ref 到 dom 实例上
3. 也可以配合 useImperativeHandle()自定义曝露的对象

```jsx
const MyComp = React.forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});
function App() {
  // myCompRef.current的值为上面的div
  const myCompRef = useRef(null);
  return <MyComp ref={myCompRef}></MyComp>;
}
const MyComp02 = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    func: () => {},
    message: "要外传的信息",
  }));
  return <div></div>;
});
```

### Suspense

- React.lazy 返回的组件需要在 React.Suspense 节点下调用

```jsx
const MyComp = React.lazy(() => import("./MyComp"));
export default () => {
  return (
    <React.Suspense fallback={<p>MyComp未加载时显示这段文字</p>}>
      <MyComp></MyComp>
    </React.Suspense>
  );
};
```

## ReactDom

### CreateRoot

- 把 ReactNode 挂载到真实 dom 上

```jsx
ReactDom.createRoot(document.querySelector("#root")).render(<App></App>);
```

### Portals

- 类似 Vue3 中的 teleport 组件
- 用于手动指定 ReactNode 挂载的位置

```jsx
function Dialog() {
  return ReactDom.createPortal(
    <div>
      <p>弹框内容</p>
    </div>,
    document.querySelector("body")
  );
}
```
