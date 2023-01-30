# Store

::: code-group

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

```tsx [App.tsx]
import { Provider } from "react-redux";
import { store } from "store";
function App() {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  );
}
```

```ts [rtkq.ts]
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const rtkq = createApi({
  reducerPath: "rtkq",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    timeout: 20000,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return headers;
    },
  }),
  tagTypes: ["bing"],
  endpoints(build) {
    return {
      getStu: build.query<string[], void>({
        query() {
          return "bing";
        },
        transformResponse(baseQueryReturnValue: any) {
          return baseQueryReturnValue.data;
        },
        keepUnusedDataFor: 60,
        providesTags: (res, err, arg) => [{ type: "bing", id: "all" }],
      }),
      addStu: build.mutation({
        query() {
          return {
            url: "/bing",
            method: "post",
            body: {},
          };
        },
        invalidatesTags: (res, err, arg) => ["bing"],
      }),
    };
  },
});
export const { useGetStuQuery } = rtkq;
```

```ts [slice.ts]
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
function initialState() {
  return { mes: "默认数据" };
}
namespace slice {
  export const {
    actions: { setMes },
    name,
    reducer,
  } = createSlice({
    name: "slice",
    initialState,
    reducers: {
      setMes(state, action: PayloadAction<string>) {
        state.mes = action.payload;
      },
    },
  });
}
export default slice;
export const { name, reducer, setMes } = slice;
```

:::
