# webStorage

## API

```js
localStorage.setItem("key", "string");
sessionStorage.getItem("key");
localStorage.removeItem("key");
sessionStorage.clear();
```

## 注意点

- localStorage 在手动清除时才会被清除
- sessionStorage 在标签关闭时被清除
- 大小一般是 5M，但具体以浏览器为主
- 存入的值只能是字符串，不是字符串的会被隐式地调用`toString()`
- 配合`JSON`对象使用可以存储对象类型的值
- 从 webStorage 中取值时，若找不到与 key 对应的值，则返回`null`
