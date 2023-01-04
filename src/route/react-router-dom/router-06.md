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
const location = useLocation();
```

### useNavigate

```js
const navigate = useNavigate();
navigate(-1, {
  replace: true,
  state: {},
  relative: {},
});
```

### useParams

### useSearchParams

## 组件

### Navigate

```tsx
<Navigate
  to={-1}
  replace
  state={{}}
  relative={}
/>
```

### Outlet

- 子路由占位组件

```tsx
<Outlet />
```

### NavLink

```tsx
<NavLink
  to="404"
  replace
  end
  style={(state) => ({})}
  className={({ isActive }) => ""}
>
  内容
</NavLink>
```
