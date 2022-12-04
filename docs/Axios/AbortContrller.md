# AbortController

## 中止控制器中断请求

```js
const controller = new AbortController();
const { signal } = controller;
axios({
  signal,
  url: "/bing",
});
axios.get("/bing", { signal });
axios.post("/bing", { signal });
controller.abort();
```

## 中止 fetch

```js
const controller = new AbortController();
const { signal } = controller;
fetch("/bing", { signal });
controller.abort();
```
