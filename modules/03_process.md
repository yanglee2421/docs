# process

## cwd

```js
process.cwd();
// returns当前工作目录
```

## exit

```js
process.exit();
// 结束当前进程
```

## nextTick

- cjs 下
  1. 执行栈
  2. tick 栈
  3. 微任务栈
  4. 宏任务栈
- mjs 下
  1. 执行栈
  2. 微任务栈
  3. tick 栈
  4. 宏任务栈

```js
process.nextTick(() => {
  doSomething();
});
```
