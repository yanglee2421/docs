# Hook

## useDispatch & useSelector

::: code-group

```ts [hook.ts]
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/slice-demo";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```ts [store.ts]
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkq } from "rtkq";
import slice from "slice";
export const store = configStore({
  reducer: {
    [rtkq.reducerPath]: rtkq.reducer,
    [slice.name]: slice.reducer,
  },
  middleware(getMiddleWare) {
    return getMiddleWare().concat(rtkq.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// 设置以后支持refetchOnReconnect、refetchOnFocus
setupListeners(store.dispatch);
// 订阅功能
const un = store.subscribe(() => {
  const {
    auth: {},
  } = store.getState();
  un();
});
```

:::

## useStore

```tsx
import { useStore } from "react-redux";
import { useAppDispatch, useAppSelector } from "hook";
import { setMes } from "slice";
export function App() {
  const store = useStore();
  const value = useAppSelector((store) => store.slice.mes);
  // "默认数据"
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMes("改store中的数据会引发更新"));
  });
  return <></>;
}
```

## useQuery

```ts
const { name } = useQuery(undefined, {
  selectFromResult: (res) => ({
    name: res.data?.[0],
  }),
  pollingInterval: 0,
  refetchOnMountOrArgChange: true,
  skip: true,
  // 需要setupListencers
  refetchOnFocus: true,
  refetchOnReconnect: true,
});
```
