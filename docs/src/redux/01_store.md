# Store

## 定义

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

## 部署

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
