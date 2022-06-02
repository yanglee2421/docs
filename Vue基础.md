## 4. Vue全局
### 1. `component`
- 用于注册全局组件
- 以驼峰法命名可以被短横线调用，反之不行。在局部注册中也一样
~~~js
import myComponents from '组件路径'
app.component('组件名', myComponents)
//惯用套路
app.component(mycomponents.name, mycomponents)
~~~
### 2. `config`
- 包含Vue配置的对象
### 3. `directive`
- 用于注册全局指令
    - 常规写法
    ~~~js
    app.directive('指令名', {
        /* 这个对象的写法跟局部组件中的写法一样 */
    })
    ~~~
    - 简写
    ~~~js
    app.directive('指令名', ()=>{
        /* 视作mounted和update的回调 */
    })
    ~~~
### 4. `mixin`
~~~js
import { mixin1, mixin2 } from "./file"
app.mixin(mixin1)
app.mixin(mixin2)
~~~
### 5. `mount`
- 用于注册根组件实例
~~~js
app.mount('#DOM_id')
~~~
### 6. `provide`
- 向所有组件传递一个参数，在组件内以`inject`接收
~~~js
app.provide('variable', '值')
~~~
### 7. `unmount`
- 卸载根组件实例
~~~js
app.unmount()
~~~
### 8. `use(plug[, option])`
- 在Vue安装插件，类似注册全局组件
    - `element-plus`
    - `vue-router`
    - `vuex`
### 9. `version`
- 字符串形式的Vue版本号
~~~js
app.version
~~~
### 10. `set(obj, key, value)`
~~~js
/*
向vm上的引用类型属性值，添加响应式属性使用的API
不能为vm或vm._data添加响应式属性
*/
Vue.set(vm._data.obj, 'age', 18)
Vue.set(vm.obj, 'age', 18)
Vue.set(this.obj, 'age', 18)
this.$set(this.obj, 'age', 18)
//vm.obj.age = 18

/* 也可以用于数组 */
Vue.set(this.arr, 1 ,'新值')
~~~
### `delete(obj, key, value)`
~~~js
/*
与set()的作用正好相反
*/
Vue.delete(vm._data.obj, 'age', 18)
Vue.delete(vm.obj, 'age', 18)
Vue.delete(this.obj, 'age', 18)
this.$delete(this.obj, 'age', 18)
//vm.obj.age = undefined
~~~