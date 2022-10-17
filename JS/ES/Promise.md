# Promise

## 实例方法

- then

```js
const p = new Promise((resolve, reject) => {
  true ? resolve("result") : reject("reason");
});
p.then(
  (result) => {
    console.log("敲定为resolve时，将此回调推入微任务队列");
  },
  (reasion) => {}
    console.log("敲定为reject时，将此回调推入微任务队列");
);
/**
 * promise的状态决定then中的哪个回调会被执行
 * then里的回调的返回值决定then的promise的状态
 */
```

- catch

```js
/**
 * then的一种简写
 */
Promise.reject("err").then(null, callback);
Promise.reject("err").catch((reason) => {
  console.log("promise被敲定为reject时，将callback推入微任务队列");
});
```

- finally

```js
/**
 * promise被敲定（无论为resolve或reject）时，
 * 将回调推入微任务队列
 * 接收不到result和reason
 */
```

## 静态方法

- resolve：返回一个 resolve
- reject：返回一个 reject
- all：全为 resolve 时，才返回 resolve
- allSettled：全部敲定时，返回所有敲定的结果
- any：任意一个为 resolve 时， 返回 resolve
- race：任意一个敲定时，返回该 promise 的结果

## async、await

- async：将此函数的返回值包装为 promise，并开启 await 关键字
- await：将所在函数的分成两段，await 以左视为同步进程， await 右侧的 promise 敲定时，将 await 以下的部分推入微任务队列

```js

```
