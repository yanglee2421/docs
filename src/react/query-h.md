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
} = useQuery(
  ["uniqueKey", { type: "mes", id: "all" }],
  () => fetch("/getMes"),
  {
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
    isDataEqual: () => false,
    // if false, the query will not execute
    enabled: true,
  }
);
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

## useMutation
