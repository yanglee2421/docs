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
~~~
# 