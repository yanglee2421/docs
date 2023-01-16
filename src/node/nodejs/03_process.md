# process

## cwd

```js
process.cwd();
```

::: tip

- 返回当前工作目录
- 不同调试方式的工作目录有所不同

:::

## exit

```js
process.exit();
```

::: tip
结束当前进程
:::

## nextTick

```js
process.nextTick(() => {
  doSomething();
});
```

::: warning

- 根据模块化方式的不同，栈的执行顺序也不同
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

:::
