# Hooks

## useRoutes

::: code-group

```tsx [route.tsx]
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
export function PageRoute() {
  const currentRoute = useRoutes(routes);
  return currentRoute;
}
```

```tsx [App.tsx]
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

:::

::: tip
用以实现传统路由的对象写法
:::

## useNavigate

```ts
const navigate = useNavigate();
navigate(-1, {
  replace: true,
  state: {},
  relative: {},
});
```

::: tip
用以获取路由导航器，使用编程式导航
:::

## useOutlet

```tsx
const outlet = useOutlet();
```

::: details

- 用以获取子路由 JSX
- Outlet 组件内部调用了这个钩子

:::

## useLocation

```ts
const location = useLocation();
interface location {
  pathname: string;
  state: unknown;
  key: string;
  search: string;
  hash: string;
}
```

::: details

1. 主要用于获取路由的 state 参数
2. 这里的 pathname 是完整的 pathname

:::

## useParams

```ts
const params: Record<string, string> = useParams();
```

::: details
用于获取路由的 params 参数
:::

## useSearchParams

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

::: details

1. 用于获取路由的 query 参数
2. 返回一个数组
3. 数组中的第一个元素：[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)实例
4. 数组中的第二个元素：setSearchParams（类似 setXxxState）

:::

## useMatches

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

::: danger
useMatches 仅能在 data Router 下调用
:::
