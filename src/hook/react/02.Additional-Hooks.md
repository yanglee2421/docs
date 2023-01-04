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

## useTransition

```jsx
const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [isPending, startTransition] = useTransition();
  const clickHandler = () => {
    setValue1(1);
    startTransition(() => {
      setValue2(1);
    });
  };
  return <></>;
};
```

## useId

```jsx
const App = () => {
  const uid = useId();
  return <div id={uid}></div>;
};
```
