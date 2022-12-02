# 快速开始

## 安装

```powershell
npm i react-router
yarn add react-router
```

## 部署

```jsx
/**
 * 编写路由列表
 */
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
/**
 * 编写路由节点组件
 */
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
/**
 * 在App中使用路由
 */
function App() {
  return (
    <BrowserRouter>
      <RouterGuard />
    </BrowserRouter>
  );
}
```

## Hooks

- `useRoutes(RouterObject[])`
- `useLocation()`
- `useNavigate()`
- `useParams()`
- `useSearchParams()`

## 组件
