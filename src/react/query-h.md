# query-Hooks

## useQuery

```ts
const {
  // no data and is currently isFetching
  isLoading,
  // the query encountered an error
  isError,
  // the query was successful and data is available
  isSuccess,
  // the query is currently disabled
  isIdle,
  // in any state,the query is fetching
  isFetching,
  // if the query is in a success state,the data is available via this property
  data,
  // if the isError is true,the error is available via this property
  error,
  // loading|error|idle|success
  status,
  // refetch function
  refetch,
  //
  isPreviousData,
} = useQuery(["uniqueKey", { type: "mes", id: "all" }], fetchTodos, {
  // Data older than this time is considered stale
  staleTime: 1000 * 60 * 5,
  // When mount, if the data is old, then refetch
  refetchOnMount: false,
  // when window focus, if the data is old, then refetch
  refetchOnWindowFocus: false,
  // when reconnect, if the data is old, then refetch
  refetchOnReconnect: false,
  // polling interval
  refetchInterval: false,
  // The time the data was cached
  cacheTime: 1000 * 60 * 5,
  // The number of retries when the request fails
  retry: 3,
  // Interval between retries
  retryDelay: 1000 * 60,
  // whether enabled structuralSharing
  structuralSharing: false,
  isDataEqual() {
    return false;
  },
  // if false, the query will not execute
  enabled: true,
  keepPreviousData: true,
});
```

## useQueries

```ts
useQuers([
  {
    queryKey: "unique",
    queryFn: ({ queryKey }: { queryKey: string }) => fetch("/some"),
    staleTime: 1000 * 60 * 1,
  },
  {
    queryKey: ["unique"],
    queryFn: ({ queryKey }: { queryKey: string[] }) => fetch("/some"),
    staleTime: 1000 * 60 * 1,
  },
]);
```

## useInfiniteQuery

- 配合无限滚动进行查询

```ts
const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  status,
} = useInfiniteQuery("projects", fetchProjects, {
  getNextPageParam(lastPage, pages) {},
});
```

## useMutation

```ts
const {
  data,
  error,
  isError,
  isIdle,
  isLoading,
  isPaused,
  isSuccess,
  mutate,
  mutateAsync,
  reset,
  status,
} = useMutation(mutationFn, {
  mutationKey,
  onError,
  onMutate,
  onSettled,
  onSuccess,
  retry,
  retryDelay,
  useErrorBoundary,
  meta,
});
type mutate = (variables, { onError, onSettled, onSuccess }) => void;
```

## useIsFetching

```tsx
import { useIsFetching } from "react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}
```

## useQueryClient

```ts
import { useQuery, useQueryClient } from "react-query";

// Get QueryClient from the context
const queryClient = useQueryClient();

queryClient.invalidateQueries("todos");

// Both queries below will be invalidated
const todoListQuery = useQuery("todos", fetchTodoList);
const todoListQuery = useQuery(["todos", { page: 1 }], fetchTodoList);
```
