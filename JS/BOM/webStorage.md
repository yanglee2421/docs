# webStorage
- 大小一般是5M，但具体以浏览器为主
- 存入的值只能是字符串，不是字符串的会被隐式地调用`toString()`
- 配合`JSON`对象使用可以存储对象类型的值
# localStorage
- 手动清除，才会被清除
- `setItem("key", value)`
- `getItem("key")`
- `removeItem("key")`
- `clear()`
# sessionStorage
- 标签关闭时被清除
- `setItem("key", value)`
- `getItem("key")`
- `removeItem("key")`
- `clear()`