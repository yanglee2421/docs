# node-windows

## Service

```js
import { Service } from "node-windows";
const service = new Service({
  name: "node-server",
  script: "./main.js",
  description: "说明文字",
  abortOnError: true,
  nodeOptions: [],
});
service.on("install", () => {
  service.start();
});
service.on("uninstall", () => {
  console.log("卸载成功");
});
```

## install

```js
serivce.install();
```

## uninstall

```js
serivce.uninstall();
```
