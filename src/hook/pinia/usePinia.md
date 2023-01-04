# Pinia

## 安装

```powershell
yarn add pinia
```

```js
import { createPinia } from "pinia";
app.use(createPinia());
```

## 部署

```js
// useXxxState.js
import { defineStore } from "pinia";
import { reactive } from "vue";
export default defineStore("xxxState", () => {
  const state = reactive({
    mes: "全局共享的信息",
  });
  return state;
});
```

## 调用

```js
import useXxxState from "./useXxxState";
const xxxState = useXxxState();
xxxState.mes;
// returns "全局共享的信息"
```

## 注意

- 必须首先安装后（`app.use(createPinia())`执行完）才能调用自定义 hook
