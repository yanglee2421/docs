# Get Started

代码整洁之道，

## SOLID原则

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

__NOTE：__ 可以不懂，但一定记住，哪天写代码写多了抽风了自然就懂了。

## 命名

起名是件大事，真的是件大事。

### 文件夹的命名

格式如下：

1. 不能有大写字母。
2. 优先使用单词的复数形式。
3. 复合单词间用一个中划线分隔。
4. 目录型文件夹的根路径下要有一个index文件。

### CSS的命名（BEM命名法）

格式如下：

1. 块名与元素名之间用两个下划线分隔。
2. 修饰符名与其它名称之间用两个中划线分隔。
3. 复合单词间用一个中划线分隔。

~~~scss
.block--modifier__element--modifier {
  flex: 1;
  overflow: hidden;
}
~~~

### 函数的命名

首先是在框架中使用的hooks函数，格式如下：

1. use开头。
2. 小驼峰。
3. 参数和返回值都是可有可无的。

~~~ts
/**
 * Hook functions used within the framework
 * @params optional
 * @return optional
 */
function useFunc() {
  // do something
}
~~~

__NOTE：__ hooks函数的调用条件是有要求的，React中组件函数每次执行时，调用的hook的数量必须一致。Vue中的hooks必须在setup函数中调用。

第二种，适配器型函数，格式如下：

1. to开头。
2. 小驼峰。
3. 参数和返回值都是必须的。

~~~ts
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
~~~

__NOTE：__ 适配器型函数用于对数据进行格式处理，把收集到的表单数据处理成接口要求的格式再发送。

第三种，事件函数，格式如下：

1. handle开头。
2. 小驼峰。
3. 参数是可选的，返回值则一定没有。

~~~ts
/**
 * Used to perform some operations,
 * such as dom events
 * @params optional
 * @return void
 */
function handleFunc(params) {
  // do something
}
~~~

__NOTE：__ 事件函数用于为页面元素绑定handler。

第四种，网络请求函数，格式如下：

1. 全小写。
2. 单词间使用下划线分隔。
3. 优先使用接口URI的最后一段作为名称
4. RESTful风格的接口添加请求网式作为前缀

~~~ts
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
~~~

### 变量的命名

首先，布尔类型

### 类型的命名





