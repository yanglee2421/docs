# Tanstack Query

## 绝大多数 API 不再支持多参重载

过去一个函数多个重载的 API 设计使得 TypeScript 类型检查变得无比复杂

现在，V5 版本的 API 仅支持单一对象格式

## queryClient.getQueryData 与 queryClient.getQueryState

`queryClient.getQueryData`与`queryClient.getQueryState`现在仅接受`queryKey`作为唯一的入参

```ts
queryClient.getQueryData(queryKey, filters); //[!code --]
queryClient.getQueryData(queryKey); // [!code ++]
queryClient.getQueryState(queryKey, filters); //[!code --]
queryClient.getQueryState(queryKey); // [!code ++]
```

## Query API 上的回调被移除

`useQuery`, `useQueries`, `useInfiniteQuery` 和 `QueryObserver` 等 API 中的 `onSuccess`, `onError`, `onSettled`已被移除

## refetchInterval 的回调写法仅接受 query 作为参数

当`refetchInterval`被写成一个函数时，这个函数仅接收对应的`query`作为入参，原有的`data`参数被移除，如果需要可以从`query.state.data`上访问它

## Query Hooks 不再返回 remove 方法

useQuery 等 Query Hooks 不再返回`remove`函数，请使用`queryClient.removeQueries`

## Query Hooks 不再支持 isDataEqual 选项

useQuery 等 Query Hooks 不再支持`isDataEqual`选项，请使用`structuralSharing`

## cacheTime 重命名为 gcTime

`gcTime`全称 garbage collect time, 意为垃圾收集时间

## Error 类型替换 unknown 成为, TError 泛型的默认值

`Error` 类型替换 `unknown` 成为, `TError` 泛型的默认值, 这并不影响手动指定`TError`的类型

## 移除了 keepPreviousData 以支持 placeholderData 身份函数

`keepPreviousData`选项和`isPreviousData`标志已被移除, 因为它们与`placeholderData`和`isPlaceholderData`作用一致

要实现原有的效果，请参考以下代码

```ts
import {
  useQuery,
  keepPreviousData, //[!code ++]
} from "@tanstack/react-query";

const { data, isPreviousData, isPlaceholderData } = useQuery({
  queryKey,
  queryFn,
  keepPreviousData: true, //[!code --]
  placeholderData: keepPreviousData, //[!code ++]
});
```

## window focus refetching 不再侦听 focus 事件

仅使用`visibilitychange`事件，V5 版本仅支持实现了`visibilitychange`事件的浏览器

## 断线重连不再依赖于 navigator.onLine 属性

`navigator.onLine`在基于 Chromium 的浏览器中表现不佳。为此 V5 版本自行维护了一个`online`属性,通过`online`和`offline`事件去更新它

## loading 状态更名为 pending 状态, isInitalLoading 更名为 isLoading

这意味着，在 Query Hooks 中需要使用 isPending 替换 isLoading，在 Mutation Hooks 中不再返回 isLoading 标志
, 使用 isPending 替换它
