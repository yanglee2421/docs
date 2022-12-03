# 浏览器剪切板
- `readText()`
- `writeText(str)`
返回的是`promise`
~~~js
navigator.clipboard.wtriteText("内容").then(res=>{
    console.log(res)
}).catch(err=>{})
navigator.clipboard.readText().then(res=>{
    console.log(res)
}).catch(err=>{})
~~~