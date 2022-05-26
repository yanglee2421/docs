# Vue3
## 1. `setup()`
- 组合式 API 的入口
- 页面启动后会自动执行，`this`指向`undefined`
- `setup()`替换了`data()`和`methods`，除前两者以外的的实例属性也写在`setup()`中
- 在`setup()`中定义的变量和方法都需要`return`出去，否则无法在视图层使用
- `setup()`默认返回的是一个`promise`，因此不能被`async`标记
- vue2中的`data()`和`methods`等能访问到`setup()`中的内容，反之则不行
```html
<div>{{obj}}</div>
<button @click="fun1">按钮1</button>
<button @click="fun2">按钮2</button>

<script>
export default {
  setup() {
    const obj = {};
    const fun1 = () => {
      console.log("要执行的语句");
    };
    function fun2() {
      console.log("要执行的语句");
    }
    return { obj, fun1, fun2 };
  },
};
</script>
```
- `setup()`的两个参数
~~~js
props:[ prop1, prop2 ]
emits:[ emit1, emit2 ]
setup(props,context){
  console.log(props)
  console.log(context)
  console.log(context.attrs)
  console.log(context.solts)
  console.log(context.emits)
}
~~~
## 2. `ref()`
- 对原始值参数进行封装，返回一个`refImpl`
- 处理引用类型时，借用了`reactive()`
- 被`ref()`封装的原始值需要以`.value`的形式更改
JS中的内容
```js
import { ref } from "vue";
export default {
  setup() {
    let i = ref(1);
    let obj = {
      name: "",
    };
    let arr = [1, 2, 3];
    function fun() {
      i.value++;
      obj.value.name = "213";
      arr.value[0] = 2;
    }
  },
};
```
## `defineProperty()`
- 以此为基础的Vue2的数据劫持在新增或删除属性时不会触发页面更新
- 直接以数组下标形式调用时，也不会触发页面更新
- `this.$set(this.obj,'属性名','值')`可以解决上面的问题
- `Vue.set(this.obj,'属性名','值')`
- `Vue.set(this.arr,0,'值')`
- `this.$delete()`
- `Vue.delete()`
~~~js
Object.defineProperty(obj,'prop',{
  value:'',
  enumerable:false,
  writable:false,
  configurable:false,
  get(){
    return vari
  },
  set(value){
    /*value为被修改后的新值*/
  },
})
~~~
## `reactive()`
- 参数为引用类型时，返回一个响应式代理`proxy`
- 不同于`ref()`不必再以`.value`调用
~~~js
const obj = reactive({
  name:'名',
  age:18
})
obj.name = '新名'
~~~
## `Proxy()`
- `window`上的一个构造函数
- 用于创建一个代理实例
~~~js
const obj = {}
const prox = new Proxy(obj,{
  get(target, propName){
    return target[propName]
  },
  set(target, propName, value){
    /*prop表示被修改或新增的属性*/
    /*value表示修改或新增的值*/
    target.propName = value
  },
  deleteproperty(target, propName){
    return delete target[propName]
  }
})
~~~
## `Reflect()`
- `defineProperty()`
- `deleteProperty()`
- `get()`
- `set()`
## `computed()`
~~~js
import {reactive, computed} from 'vue'
const data = reactive({
  FirstName:'刘',
  LastName:'音杰',
  age:18,
})
data.FullName = computed(()=>{
  return data.FirstName + '-' + data.LastName
})
data.Name = computed({
  get(){
    return data.FirstName + '-' +data.LastName
  }
  set(value){
    const nameArr = value.split('-')
    data.FirstName = nameArr[0]
    data.LastName = nameArr[1]
  }
})
~~~
## `setup`语法糖
- 组件和指令导入即注册
- 以`defineProps()`和`defineEmits()`（不必从`vue`中`import`）来替代`props`和`emits`
- 子组件的`<template></template>`中可以直接调用父组件传入的`props`
## `watch()`
~~~js
import {wathch} from 'vue'
setup(){
  let i = ref(1)
  watch(i,(newValue, oldValue)=>{
    console.log(newValue)
    console.log(oldValue)
  }, {
    immediate:true
  })
  const obj = reactive({
      name:'名',
      age:18
  })
  watch(obj,(newValue, oldValue)=>{

  },{
    immediate:true
  })
  watch(()=>obj.name,(newValue, oldValue)=>{
  
  })
watch([()=>obj.name, ()=>obj.age], (newValue, oldValue)=>{
  
  })
~~~
## `watchEffect()`
- 不用`return`的`computed()`
## 组合式API中的生命周期
- `beforeCreate()`和`Created()`没有
- 其余的加个`on`
- 与配置项写法起冲突时，`setup()`里的优先
~~~js
import {onBeforeMounted} from 'vue'
setup(){
  onBeforeMounted(()=>{})
}
~~~
## `hook`
- 当初写的`addDOM`差不多就是一个`hook`
## `transition`
- `transition`组件内只能有一个子组件
- `transition`组件不会被渲染为真实DOM
- 没有`name`属性时使用`v-`开头的类名为其配置过渡效果
- `appear`属性存时，页面载入时会触发动画
~~~vue
<template>
<transition name='animate'>
  <img v-show="true"/>
</transition>
</template>
<style scoped>
.animate-enter-active，
.animate-leave-active{
  transition:1s;
}
.animate-enter-from{
  transform:translateX(100%)
}
.animate-enter-to,
.animate-leave-from{
  transform:translateX(0)
}
.animate-leave-to{
  transform:translateX(-100%)
}
</style>
~~~
## `defineProps()`
- 用来替换vue2中的`props`
~~~js
const props = defineProps({
  prop1:{
    type:Number,
    default:4399，
    required:true,
  }
})
~~~
## `toRef(), toRefs()`
- 从响应式对象中的属性中取值，返回一个`refimpl`，该`refimpl`与被取的属性值是引用关系
~~~js
const obj = reactive({
  name:"名字"
})
return { name:obj.name }
/* 此时更改name的值不会触发响应式 */
const name2 = toRef(obj,"name")
return {name:name2}
/* 此时响应式实现了 */
return {name:toRef(obj,"name")}
/* 简化写法 */
return {name:ref(obj.name)}
/* 这种写法使得返回的数据与源数据丢失了引用关系 */
const refObj = toRefs(obj)
return { ...toRefs(obj) }
/* 把obj中的所有属性变为refimp对象并返回 */
~~~
## `shallowReactive(), shallowRef()`
- `shallowReactive()`只把对象中的第一层数据做成响应式
- `shallowRef()`只把基本数据类型数据做成响应式
~~~js
const obj = {
    name:"名字",
    obj2:{
        obj3:{
            name:"名字2"
        }
    }
}
/* obj3.name变化不能触发响应式 */
~~~
## `readonly()`与`shallowReadonly()`
- 参数为对象时，返回一个只读代理
- `shallowReadonly()`返回一个浅只读代理
~~~js
const obj = {
    name:"名字"
}
const obj = readonly(obj)
~~~
## `toRaw()`与`markRaw()`
- `toRaw()`返回一个被`reactive()`、`shallowReactive()`处理过的数据的原始值
- 接收一个对象作为参数，`markRaw()`返回的对象的属性不会继承响应式
~~~js
const obj = reactive({
    name:"名字"
})
const objOri = toRaw(obj)
obj.age = markRaw({
    value:18
})
~~~
## `customRef()`
- 定义一个自定义的`ref()`
~~~js
const myRef= (value) => {
    return customRef((track, trigger)=>{
        return {
            get(){
                // 重新解析模板时，要求get()触发一次
                track()
                return value
            }
            set(newValue){
                value = newValue
                // 触发重新解析模板
                trigger()
            }
        }
    })
}
~~~
## `provide()`与`inject()`
- 实现祖先向后代传参
~~~js
const obj = {
    name:"名字"
}
provide("obj",obj)
/* 以下代码在后代组件中 */
const car = inject("obj")
~~~
## `isRef()`、`isReactive()`、`isReadonly()`、`isProxy()`
- `isRef()`
- `isReactive()`
- `isReadonly()`
- `isProxy()`
## Fragment
- 组件不限制单个根元素了
## `<teleport></teleport>`
- `to`属性指定父元素，值是一个CSS选择器
- `disable`属性限制传送是否发生
~~~html
<teleport to="body">
  <h1>要传送的内容</h1>
</teleport>
~~~
## `<Suspense></Suspense>`
- 异步组件的`setup()`可以被`asnyc`修饰
~~~js
import { defineAsnycComponents } from "vue"
const comp1 = defineASnycComponents(()=>{
  return import("./src/components/test.vue")
})
~~~