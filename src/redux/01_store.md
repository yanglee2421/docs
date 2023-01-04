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
  middleware: (getMiddleWare) => getMiddleWare().concat(demoApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
