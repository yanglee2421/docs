# Axios

## create

```ts
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60000,
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": `application/json;charset=utf-8`,
    },
  },
});
```

## interceptors

```ts
import axios, { AxiosRequestConfig } from "axios";
request.interceptors.request.use((config) => config);
request.interceptors.response.use(
  (res) => {
    const { data, status } = res;
    if (status > 199 && status < 300) return data;
    return new Promise(() => {});
  },
  (err) => new Promise(() => {})
);
export default async <T = unknown>(params: AxiosRequestConfig) => {
  return (await request(params)) as unknown as T;
};
```

## request

### get

```js
const config = {};
request.get("/url", config);
```

### post

```js
const data = {};
const config = {};
request.post("/url", data, config);
```
