# process

## env

用于获取当前运行环境的环境变量

::: code-group

```js
process.env;
```

```powershell
$Env:VAR_NAME#查看
$Env:VAR_NAME="指定内容"#增/改
$Env:VAR_NAME=""#删
$Env:VAR_NAME+="附加内容"#附加
```

:::

## cwd

返回当前工作目录，不同调试方式的工作目录有所不同

```js
process.cwd();
```

## exit

结束当前进程

```js
process.exit();
```

## nextTick

```js
process.nextTick(() => {
  doSomething();
});
```

::: warning

- 根据模块化方式的不同，栈的执行顺序也不同
- cjs 下：
  1. 执行栈
  2. tick 栈
  3. 微任务栈
  4. 宏任务栈
- mjs 下：
  1. 执行栈
  2. 微任务栈
  3. tick 栈
  4. 宏任务栈

:::
