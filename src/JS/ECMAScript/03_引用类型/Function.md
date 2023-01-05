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

- 静态 this：this 指向创建它的作用域里的 this
- 没有 arguments：使用 restProps 替代 arguments
- 适合作为回调或匿名函数
