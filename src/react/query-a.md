# query-APIs

## QueryClient

- 转到[QueryClientProvider](/react/query-c.md#queryclientprovider)

## invalidateQueries

```tsx
// Invalidate every query in the cache
queryClient.invalidateQueries();
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries("todos");

queryClient.invalidateQueries("todos", { exact: true });

// The query below will be invalidated
const todoListQuery = useQuery(["todos"], fetchTodoList);

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);

queryClient.invalidateQueries({
  predicate(query) {
    return query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10;
  },
});

// The query below will be invalidated
const todoListQuery = useQuery(["todos", { version: 20 }], fetchTodoList);

// The query below will be invalidated
const todoListQuery = useQuery(["todos", { version: 10 }], fetchTodoList);

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery(["todos", { version: 5 }], fetchTodoList);
```

## Query Filters

```ts
// Cancel all queries
await queryClient.cancelQueries();

// Remove all inactive queries that begin with `posts` in the key
queryClient.removeQueries("posts", { inactive: true });

// Refetch all active queries
await queryClient.refetchQueries({ active: true });

// Refetch all active queries that begin with `posts` in the key
await queryClient.refetchQueries("posts", { active: true });
```

## Mutation Filters

```ts
// Get the number of all fetching mutations
await queryClient.isMutating();

// Filter mutations by mutationKey
await queryClient.isMutating({ mutationKey: "post" });

// Filter mutations using a predicate function
await queryClient.isMutating({
  predicate(mutation) {
    return mutation.options.variables?.id === 1;
  },
});
```
