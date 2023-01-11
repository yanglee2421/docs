# EventLoop

## 线程、进程

- 进程（厂房）
  - 程序的运行环境
- 线程（工人）
  - 线程是实际进行运算的东西

## 同步、异步

- 同步
  1. 前一步没有结束，下一步不会开始
- 异步：
  1. 下一步不会等待前一步的结束
  2. 它会在另一个的线程中执行
  3. 只能以回调来获取返回值引发的回调地狱

## 执行栈、微任务栈、宏任务栈

1. 同步任务进执行栈
2. 执行栈清空
3. 微任务栈是否为空？
4. 若非空：则从微任务栈中取出任务到执行栈
5. 若为空：则从宏任务栈中取出任务到执行栈

```js
// 向微任务栈中推入一个回调
queueMicrotask(() => {});
// 向宏任务栈中推入一个回调
setTimeout(() => {}, 0);
```