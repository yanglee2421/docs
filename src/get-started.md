# Get Started

代码整洁之道，

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

## 命名

起名是件大事，真的是件大事。

### 文件和文件夹

格式如下：

1. 不能有大写字母（mac 系统下的 git 默认不区分大小写，这容易引发一些问题）。
2. 优先使用单词的复数形式。
3. 复合单词间用一个中划线分隔。
4. 目录型文件夹的根路径下要有一个 index 文件。

### CSS 的命名（BEM 命名法）

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

### 函数的命名

首先是在框架中使用的 hooks 函数，格式如下：

1. use 开头。
2. 小驼峰。
3. 参数和返回值都是可有可无的。

```ts
/**
 * Hook functions used within the framework
 * @params optional
 * @return optional
 */
function useFunc() {
  // do something
}
```

**NOTE：** hooks 函数的调用条件是有要求的，React 中组件函数每次执行时，调用的 hook 的数量必须一致。Vue 中的 hooks 必须在 setup 函数中调用。

第二种，适配器型函数，格式如下：

1. to 开头。
2. 小驼峰。
3. 参数和返回值都是必须的。

```ts
/**
 * Used for processing data,
 * returning processed data without changing the original data
 * @params required
 * @return required
 */
function toFunc(params) {
  // do something
  return params;
}
```

**NOTE：** 适配器型函数用于对数据进行格式处理，把收集到的表单数据处理成接口要求的格式再发送。

第三种，事件函数，格式如下：

1. handle 开头。
2. 小驼峰。
3. 参数是可选的，返回值则一定没有。

```ts
/**
 * Used to perform some operations,
 * such as dom events
 * @params optional
 * @return void
 */
function handleFunc(params) {
  // do something
}
```

**NOTE：** 事件函数用于为页面元素绑定 handler。

第四种，网络请求函数，格式如下：

1. 全小写。
2. 单词间使用下划线分隔。
3. 优先使用接口 URI 的最后一段作为名称
4. RESTful 风格的接口添加请求网式作为前缀

```ts
/**
 * Used to send network requests,
 * Its prefix is consistent with the request method
 * @params optional
 * @return promise
 */

// URI:/api/query_some
async function query_some() {}

// URI:/api/some
async function get_some() {}
async function post_some() {}
async function delete_some() {}
async function put_some() {}
```

### 变量的命名

1. 布尔类型：以 is 开头，小驼峰。
2. 数组：单词的复数形式，或者以 Arr 结尾，小驼峰。
3. 对象：优先选择对应类名的小驼峰形式。
4. 集合：以 Set 结尾，小驼峰。
5. 映射：以 Map 结尾，小驼峰。
6. 类：大驼峰。
7. 上下文：以 Ctx 开头，大驼峰。

### 类型的命名

1. 接口：优先选择实例对象的命名，大驼峰。
2. 别名：优先选择实例对象的命名，大驼峰。
3. 泛型：以 T 开头，T 后面的部分要能体现出这个泛型被用于什么数据且保持大驼峰（TProps、TData、TError）。

## 函数声明

如何在函数的两种声明方式中，进行选择。

存在以下情况时，优先选择普通函数：

1. 函数执行时，不依赖外部被`var`、`let`、`const`声明的变量（即：变量提升的不会引发错误的情况）。
2. 函数被`export default`导出。
3. 在类中声明函数。
4. 能触发对象的简写形式。

存在以下情况时，优先选择箭头函数：

1. 匿名函数。
2. 回调函数。
3. 仅一句`return`语句。

**NOTE：** 具体使用那种方式，最终取决于是否需要`this`指针。
