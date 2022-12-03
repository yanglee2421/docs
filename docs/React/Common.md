# 两种组件中都需要的 API

## React

### Context

```jsx
/**
 * 适用于祖先向后代传参
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

```jsx
/**
 * ref不属于props，不能直接转发，需要此函数
 * 1.用于转发组件接收到的ref到dom实例上
 * 2.也可以配合useImperativeHandle()自定义曝露的对象
 */
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

## ReactDom

### CreateRoot

```jsx
/**
 * 把ReactNode挂载到真实dom上
 */
ReactDom.createRoot(document.querySelector("#root")).render(<App></App>);
```

### Portals

```jsx
/**
 * 类似Vue3中的teleport组件
 * 1.用于手动指定ReactNode挂载的位置
 */
function Dialog() {
  return ReactDom.createPortal(
    <div>
      <p>弹框内容</p>
    </div>,
    document.querySelector("body")
  );
}
```
