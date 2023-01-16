# express

## 快速开始

```js
const express = require("express");
const app = express();
app.listen(80, (err) => {
  console.log(err || "stand by");
});
https.createServer({ key, cert }, app).listen(443, (err) => {
  console.log(err || "stand by");
});
```

## 全局配置

```js
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
```

## 引入中间件

```js
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
```

## 挂载路由

```js
const router = express.Router();
router.get("/(get)?path", (req, res) => {
  console.log(req.query);
  res.send("hello world!");
});
router.post("/path/:params", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.json("post success");
});
router
  .route(/\/path/i)
  .put((req, res) => {
    res.sendFile(path.resolve(__dirname, "./xxx.txt"));
  })
  .delete((req, res) => {
    res.download(path.resolve(__dirname, "./xxx.txt"));
  });
app.use(router);
```

## 处理 histroy 路由

```js
server.use(require("connect-history-api-fallback")());
```

## 部署静态资源

```js
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/public", express.static(path.resolve(__dirname, "../public")));
```

## 响应方式、

| 方法         | 描述                                           |
| ------------ | ---------------------------------------------- |
| json()       | 返回 json                                      |
| download()   | 下载文件                                       |
| sendFile()   | 以八位元流形式发送文件                         |
| redirect()   | 重定向                                         |
| send()       | 发送各种类型的响应                             |
| end()        | 结束响应进程                                   |
| jsonp()      | 返回 jsonp                                     |
| render()     | 呈现视图模板                                   |
| sendStatus() | 设置响应状态码并以响应主体形式发送其字符串表示 |
| stauts()     | 设置响应状态码                                 |
