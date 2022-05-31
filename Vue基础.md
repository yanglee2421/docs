# Vue基础
### 0. `ref`
- 用来获取DOM元素
~~~vue
<template>
    <h1 ref='variable'></h1>
</template>
<script>
export default {
    methods:{
        fun(){
            // 以此调用DOM元素
            this.$refs.variable
        }
    }
}
</script>
~~~
### 1. `keep-alive`
~~~vue
<template>
    <keep-alive>
        <myComponents></myComponents>
    </keep-alive>
</template>
~~~
### 2. `slot`
- 普通用法
    - 声明
    ~~~vue
    <template>
        <solt>
            当插槽没有被使用时，此处的内容会显示出来
        </solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <h1>将此标签嵌入到插槽的位置</h1>
        </myComponents>
    </template>
    ~~~
- 具名插槽
    - 声明
    ~~~vue
    <template>
        <solt name='名字'></solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <template v-solt:'名字'></template>
        </myComponents>
    </template>
    ~~~
- 作用域插槽
    >由子组件向父组件传参，若要传多个参可用解构赋值
    - 声明
    ~~~vue
    <template>
        <solt :info='variable'></solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <template v-solt:default='接收的名字'>
                {{接收的名字}}
            </template>
        </myComponents>
    </template>
    ~~~
### 3. `component`
- 用于组件切换
~~~vue
<template>
    <!-- is属性的值是一个string -->
    <component :is='componentName'></component>
</template>
<script>
import componentName from '组件路径'
export default {
    components:{
        componentName
    }
}
</script>
~~~
***
### 1. `scoped`
~~~vue
<style scoped>
/* 需要对子元素内的元素也生效 */
:deep(.className) {}
/* 在全局中注册 */
:global(#idName) {}
</style>
~~~
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