# Get Started

## SOLID 原则

首先不得不提一下五大原则，分别是：

1. Single Responsibility Principle（单一职则）
2. OpenClosed Principle（开闭）
3. Liskov Substitution Principle（里氏替换）
4. Interface Segregation Principle（接口隔离）
5. Dependency Inversion Principle（依赖倒转）

逐一分析它们：

1. 单一职则：一个函数只负责一件事情，复杂的逻辑拆分到多个函数中完成。
2. 开闭：对扩展开放，对修改闭合。设计函数时，保留一定的扩展性。
3. 里氏替换：父类可以被它的任意子类替换。
4. 接口隔离：使用多个小接口而不是一个复杂的大接口。
5. 依赖倒转：函数之间的依赖性不能太强。

**NOTE：** 可以不懂，但一定记住，哪天写代码写多了抽风了自然就懂了。

## BEM 命名

格式如下：

1. 块名与元素名之间用两个下划线分隔。
2. 修饰符名与其它名称之间用两个中划线分隔。
3. 复合单词间用一个中划线分隔。

```scss
.block--modifier__element--modifier {
  flex: 1;
  overflow: hidden;
}
```

## 命名

1. hooks 以 use 开头
2. event handler 以 handle 开头
3. genric 以 T 开头，T 后面的部分要能体现出这个泛型被用于什么数据且保持大驼峰（TProps、TData、TError）。

## 函数声明

如何在函数的两种声明方式中，进行选择。

存在以下情况时，优先选择普通函数：

1. 纯函数: 执行时，不依赖外部被`var`、`let`、`const`声明的变量（即：变量提升的不会引发错误的情况）。
2. 函数被`export default`导出。
3. 在类中声明函数。
4. 能触发对象的简写形式。
5. React Components

存在以下情况时，优先选择箭头函数：

1. 匿名函数。
2. 回调函数。
3. 仅一句`return`语句。

**NOTE：** 具体使用那种方式，最终取决于是否需要`this`指针。
