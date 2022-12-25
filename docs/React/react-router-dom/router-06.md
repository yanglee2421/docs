# react-router-dom@6

## 安装

```powershell
npm i react-router-dom
yarn add react-router-dom
```

## Hooks

### useRoutes

```jsx
// 路由列表
const routes = useRoutes([
  {
    path: "/:id",
    element: <Component01 />,
    children: [
      {
        path: "child01",
        element: <Page />,
        children: [],
      },
    ],
  },
  {
    path: "redirect",
    element: <Navigate to="/" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

### useLocation

```js

```

### useNavigate

### useParams

### useSearchParams

## 组件

```

```
