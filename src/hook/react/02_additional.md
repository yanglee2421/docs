# 额外 Hooks

## useReducer

```jsx
const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "name":
          return { ...state, name: action.payload };
        case "age":
          return { ...state, age: action.payload };
        default:
          throw new Error("action不正确");
      }
    },
    {
      name: "swk",
    },
    (initialState) => {
      initialState.age = 18;
      return initialState;
    }
  );
  return <></>;
};
```

## useCallback

```jsx
const App = (props) => {
  const [value, setValue] = useState();
  const res = useCallback(() => {
    // doSomething
  }, [value, props.value]);
  return <></>;
};
```

## useMemo

```jsx
const App = (props) => {
  const [value, setValue] = useState();
  const res = useMemo(() => {
    return value + props.value;
  }, [value, props.value]);
  return <></>;
};
```

## useRef

```jsx
const App = () => {
  const myRef = useRef();
  return (
    <>
      <Child ref={myRef} />
    </>
  );
};
```

## useImperativeHandle

```jsx
const MyComp02 = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    func: () => {},
    message: "要外传的信息",
  }));
  return <div></div>;
});
```

## useLayoutEffect

1. 组件挂载
2. state 改动
3. InsertionEffect 栈
4. DOM 更新
5. LayoutEffect 栈
6. 屏幕绘制
7. Effect 栈

## useDeferredValue

```tsx
const [state, setState] = useState("state");
// state 更新结束后，deferredState 才开始更新
const deferredState = useDeferredValue(state);
```

## useTransition

```tsx
function PageDemo() {
  // 这个更新不卡
  const [value, setValue] = useState("");
  // 这个更新很卡
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const handler = (e) => {
    setValue((prev) => e.target.value.trim());
    startTransition(() => {
      /**
       * isPending 指示这次更新的状态
       * 这次更新开始时，isPending 变为 true
       * 这次更新结束时，isPending 变为 false
       */
      setCount((prev) => {
        const begin = Date.now();
        while (true) {
          if (Date.now() - begin > 1000) {
            break;
          }
        }
        return prev + 1;
      });
    });
  };
  return (
    <>
      <input value={value} onChange={handler} />
      {isPending && <Spin spinning={isPending} />}
    </>
  );
}
```

## useId

```jsx
const App = () => {
  const uid = useId();
  return <div id={uid}></div>;
};
```
