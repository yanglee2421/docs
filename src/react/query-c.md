# query-Components

## QueryClientProvider

::: code-group

```tsx [App]
import { queryClient } from "./client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}
```

```tsx [client]
import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retryDelay(attemptIndex) {
        return Math.min(1000 * 2 ** attemptIndex, 30000);
      },
    },
  },
});
```

:::
