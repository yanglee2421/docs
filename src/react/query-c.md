# query-Components

## QueryClientProvider

::: code-group

```tsx [App]
import { queryClient } from "./queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}
```

```tsx [queryClient]
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();
```

:::
