# react-router-dom@6

## 安装

```powershell
npm i react-router-dom
yarn add react-router-dom
```

## 部署

1. 编写路由列表
2. 编写路由节点组件
3. 在 App 中使用路由

```jsx
// 路由列表
const routes = useRoutes([
  {
    path: "/",
    element: <Component01></Component01>,
    children: [
      {
        path: "child01",
        element: <NavLink to="/"></NavLink>,
        children: [],
      },
      {
        path: "child02",
        element: <NavLink to="/"></NavLink>,
        children: [],
      },
    ],
  },
  {
    path: "redirect",
    element: <NavLink to="/"></NavLink>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
```

```jsx
// 封装高阶组件控制路由
export default () => {
  const currentNode = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    switch (location.pathName) {
      case "/redirect":
        setIsAuth((prev) => false);
        break;
      case "/user":
        navigate("/login", { state: { something: "" }, replace: true });
        break;
      default:
        navigate(-1);
    }
  }, [currentNode, location]);
  return isAuth ? currentNode : null;
};
```

```jsx
// 在 App 中使用路由高阶组件
function App() {
  return (
    <BrowserRouter>
      <RouterGuard />
    </BrowserRouter>
  );
}
```

## Hooks

### useRoutes

- 参考部署

```js
const currentComp = useRoutes([]);
```

### useLocation

### useNavigate

### useParams

### useSearchParams

## 组件
