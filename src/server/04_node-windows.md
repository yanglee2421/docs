# node-windows

## npm

```powershell
yarn add node-windows
```

## 实例化 Service

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

## 安装

```js
serivce.install();
```

## 卸载

```js
serivce.uninstall();
```
