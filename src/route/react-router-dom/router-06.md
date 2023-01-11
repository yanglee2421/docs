# react-router-dom@6

## 安装

```powershell
npm i react-router-dom
yarn add react-router-dom
```

## routes

- 路由配置的对象写法

```tsx
// routes.tsx
import { RouteObject } from "react-router-dom";
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageIndex />,
    children: [{ path: "outlet", element: <PageOutlet /> }],
    handle: { title: "首页" },
  },
  { path: "login", element: <PageLogin /> },
  { path: "*", element: <Navigate to="/" replace /> },
  { path: "404", element: <Page404 /> },
];
```

## createBrowserRouter & createHashRouter

- data Router 是官方推荐的写法
- V6 中许多新 API 仅能在 data Router 下使用

```tsx
// route/index.ts
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
export const router = createBrowserRouter(routes, { basename: "/react/" });
// App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
export function App() {
  return <RouterProvider router={router} />;
}
```

## Hooks

### useRoutes

```jsx
// route/index.ts
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
export function PageRoute() {
  const currentRoute = useRoutes(routes);
  return currentRoute;
}
// App.tsx
import { BrowserRouter } from "react-router-dom";
import { PageRoute } from "./route";
export function App() {
  return (
    <BrowserRouter basename="/react/">
      <PageRoute />
    </BrowserRouter>
  );
}
```

### useNavigate

```ts
const navigate = useNavigate();
navigate(-1, {
  replace: true,
  state: {},
  relative: {},
});
```

### useOutlet

- 获取子路由 JSX
- Outlet 组件内部调用了这个钩子

```tsx
const outlet = useOutlet();
```

### useLocation

```js
const location = useLocation();
interface location {
  pathname: string;
  state: unknown;
  key: string;
  search: string;
  hash: string;
}
```

### useParams

```ts
const params: Record<string, string> = useParams();
```

### useSearchParams

- 返回一个数组
- 数组中的第一个元素：[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)实例
- 数组中的第二个元素：setSearchParams（类似 setXxxState）

```ts
const [urlSearchParams, setSearchParams] = useSearchParams();
// urlSearchParams 的类型
const us: URLSearchParams = urlSearchParams;
// setSearchParams 的类型
interface setSearchParams {
  (params: Record<string, string>): void;
  (callback: (prev: URLSearchParams) => Record<string, string>): void;
}
```

### useMatches

- 仅能在 data Router 下调用

```tsx
const matches = useMatches();
const arr: match[] = matches;
interface match {
  handle: unknown;
  pathname: string;
  params: Record<string, string>;
  id: string;
  data: unknown;
}
```

## 组件

### Navigate

- 主要用于重定向

```tsx
<Navigate to={-1} replace state={{}} relative={} />
```

### Outlet

- 子路由占位组件

```tsx
<Outlet />
```

### NavLink

- 生成路由链接

```tsx
<NavLink
  to="404"
  replace
  end
  className={({ isActive }) => ""}
  style={(state) => ({})}
>
  内容
</NavLink>
```
