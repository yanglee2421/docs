# 主要 Hooks

## useState

- setXXX 的参数可以简写成一个值，但不推荐

```jsx
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount(1)}>=1</button>
    </>
  );
}
```

## useEffect

> 类似 Vue 中的 watch，执行阶段的描述如下：
>
> 1. 组件函数栈
> 2. return effect 栈
> 3. effect 栈

1. 指定依赖为空时：
   - 组件挂载时，把 effect 推入 effect 栈
   - 组件卸载时，把 return effect 推入 return effect 栈
2. 指定依赖时：
   - 组件函数执行时，若依赖的指向发生了变化，则：
     - 把上一轮的 return effect 推入 return effect 栈
     - 把 effect 推入 effect 栈
3. 不指定依赖时：
   - 组件函数执行时：
     - 把上一轮的 return effect 推入 return effect 栈
     - 把 effect 推入 effect 栈

```jsx
function App() {
  //beforeMount、beforeUpdate
  useEffect(() => {
    // mounted
    return () => {
      // unmounted
    };
  }, []);
  useEffect(() => {
    // watch
  }, [dep]);
  useEffect(() => {
    // updated
  });
  return <></>;
}
```

## useContext

- 配合 createContext 实先祖先向后代传参

```jsx
const Content = React.createContext();
function App() {
  return (
    <Content.Provider value={"要传的信息"}>
      <MyComp></MyComp>
    </Content.Provider>
  );
}
function MyComp() {
  const content = useContext(Content);
  //returns '要传的信息'
  return <></>;
}
```
