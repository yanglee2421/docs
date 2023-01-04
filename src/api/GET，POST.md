# HTTP 请求

## HTTP 八请求

- get、post、delete、put、contect、head、options、trace
- 以上请求本质上没有区别，仅作用法和语义化上的区分
- 常用的只有两种 GET、POST

## GET

- 索取
- 不包含敏感数据
- 通过浏览器地址栏发送的就是 GET 请求
- 请求外部资源的 html 标签发送的也是 GET 请求
- 能被缓存
- 参数类型必须为 ASCII 码
- 参数会被放置在 URL 中

## POST

- 传输的数据相对敏感
- 请求的结查有持续性的副作用时（例如：要作为数据源写入数据库时）
- 不能被缓存
