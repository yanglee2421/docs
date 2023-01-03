# Error

## 构造器

```js
new Error("可读的错误信息");
```

## 实例属性

### message

```js
const err = new Error("错误信息");
err.message; //"错误信息"
```

## try...catch...finally

```js
try {
  throw new Error("出现错误");
} catch (err) {
  /**
   * 若try后的代码块中没有抛出错误，则这个代码块不执行
   * err为try后的代码块中被throw关键字抛出的信息，】
   * err可以不是Error对象
   * err可以省略，省略时只保留一个catch关键字
   */
  console.error(err.message);
} finally {
  console.log("不管catch执不执行，这里都执行");
}
```
