# Redux

## 切片

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export default demo;
export const { name, reducer, setMes } = demo;
namespace demo {
  export const {
    actions: { setMes },
    name,
    reducer,
  } = createSlice({
    name: "demo",
    initialState,
    reducers: {
      setMes(state, action: PayloadAction<string>) {
        state.mes = action.payload;
      },
    },
  });
}
function initialState() {
  return {
    mes: "默认数据",
  };
}
```

## Store

```ts
import { configureStore } from "@reduxjs/toolkit";
import demo from "./demoSlice";
import { demoApi } from "@/api/rtkq";
const store = configStore({
  reducer: {
    [demo.name]: demo.reducer,
    [demoApi.reducerPath]: demoApi.reducer,
  },
  middleware(getMiddleWare) {
    return getMiddleWare().concat(demoApi.middleware);
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```tsx
import { Provider } from "react-redux";
import store from "@/redux/root-store";
function App() {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  );
}
```

# useStore

```ts
import { useStore } from "react-redux";
function App() {
  const store = useStore();
}
```

# useDispatch

```ts
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/slice-demo";
export const useAppDispatch: () => AppDispatch = useDispatch;
```

# useSelector

```ts
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@/redux/root-store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```
