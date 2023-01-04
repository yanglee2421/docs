# RTKQ

## API

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const studentApi = createApi({
  reducerPath: "studentApi",
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
export const { useGetStuQuery } = studentApi;
export default studentApi;
```

## store

```ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rtkq from "@/api/rtkq";
const store = configureStore({
  reducer: {
    ...reducer,
    [rtkq.reducerPath]: rtkq.reducer,
  },
  middleware: (getMiddleWare) => getMiddleWare().concat(rtkq.middleware),
});
// 设置以后支持refetchOnReconnect、refetchOnFocus
setupListeners(store.dispatch);
// 订阅功能
const un = store.subscribe(() => {
  const {
    auth: {},
  } = store.getState();
  un();
});
export default store;
```

## useQuery

```ts
const { name } = useQuery(undefined, {
  pollingInterval: 0,
  refetchOnMountOrArgChange: true,
  skip: true,
  selectFromResult: (res) => ({
    name: res.data?.[0],
  }),
  // 需要setupListencers
  refetchOnFocus: true,
  refetchOnReconnect: true,
});
```
