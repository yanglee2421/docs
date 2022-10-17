# 安装
~~~js
const app = require("express")
app.listen(1818, err=>{
    console.log(err || "stand by")
})
~~~
# 路由
~~~js
/**
 * 全局
 * get()
 * post()
 * put()
 * delete()
 */
app.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    next()
})
app.get("/(get)?path", (req, res) => {
    res.send("hello world!")
    console.log(req.query)
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post("/path/:params", (req, res) => {
    res.send("post success")
    console.log(req.params)
    console.log(req.body)
})
~~~
# 静态文件
~~~js
app.use(express.static(__dirname + "/path"))
app.use("/vPath", express.static("path"))
~~~
# 链式路由
~~~js
app.route(/\/path/i)
    .get((req, res) => {})
    .post((req, res) => {})
~~~
# 响应方式、
|方法|描述|
|-|-|
|download()|下载文件|
|end()|结束响应进程|
|json()|返回json|
|jsonp()|返回jsonp|
|redirect()|重定向|
|render()|呈现视图模板|
|send()|发送各种类型的响应|
|sendFile()|以八位元流形式发送文件|
|sendStatus()|设置响应状态码并以响应主体形式发送其字符串表示|
|stauts()|设置响应状态码|