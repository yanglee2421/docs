# interceptors

## 请求

```js
axios.interceptors.request.use(
  (config) => config,
  //   一般来说不需要第二个回调
  (err) => {
    return new Promise(() => {});
  }
);
```

## 响应

```js
axios.interceptors.response.use(
  (res) => {
    const { data, status } = res;
    if (status === 200) return data;
    return new Promise(() => {});
  },
  (err) => {
    return new Promise(() => {});
  }
);
```
