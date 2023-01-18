# routes

```tsx
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

::: danger
handle 仅在 Data Router 下生效
:::
