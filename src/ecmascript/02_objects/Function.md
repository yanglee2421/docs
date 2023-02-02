# Function

## bind

- 返回值：改变 this 指向后的 this
- 一参：你所指定的 this
- 其余参数作为实参传给返回的函数

## call

- 一参：返回的函数
- 其余参数作为实参传给返回的函数

## apply

- 二参要写成一个数组
- 其余与 call 相同

## arguments

- 存放函数实参的类数组
- callee 属性指向函数本身

## Arrow Function

- 静态 this：this 永远指向创建它的作用域里的 this
- 没有 arguments：使用 restProps 替代 arguments
- 适合作为回调或匿名函数

## 适用场景

### 类中

- 除需要静态 this 的场景外，一律使用 Function

### 函数

- 匿名函数一律使用 Arrow Function
- 不依赖外部`let`、`const`、`var`声明的引用时，一律使用 Function

### 对象属性

- 除仅 return 的场景外，一律使用 Function
