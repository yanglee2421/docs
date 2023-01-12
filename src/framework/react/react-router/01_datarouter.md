# Data Router

## createBrowserRouter

::: code-group

```tsx [route.ts]
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
export const router = createBrowserRouter(routes, { basename: "/react/" });
```

```tsx [App.tsx]
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
export function App() {
  return <RouterProvider router={router} />;
}
```

:::

## createHashRouter

::: code-group

```tsx [route.ts]
import { createHashRouter } from "react-router-dom";
import { routes } from "./routes";
export const router = createHashRouter(routes);
```

```tsx [App.tsx]
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
export function App() {
  return <RouterProvider router={router} />;
}
```

:::

::: tip

- data Router 是官方推荐的写法
- V6 中许多新 API 仅能在 data Router 下使用

:::
