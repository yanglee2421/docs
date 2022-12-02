# Vue3 中的复用：混入、继承、组合式函数和自定义指令

## extends 和 mixins：继承和混入

```js
// 要复用的部分
export default {
    data(){
        msg:123,
    },
    methods:{
        fun(){},
    },
}
// 引入
import extends01 from "./extends01.js"
import mixin01 from "./mixin01.vue"
import mixin02 from "./mixin02.js"
export default {
    /**
     * 继承
     * 值为一个对象，只能复用有一个实例
     * 合并时，顺序在最前、优先级最低
     */
    extends:extends01,
    /**
     * 混入
     * 值为一个数组，可以复用多个实例
     * 合并时，按实例在数组的顺序进行，越靠后优先级越高
     */
    mixins:[ mixin01, mixin02 ],
}
```

- 以（extends-->mixins[0]-->mixins[1]-->...-->instance）的顺序进行合并
- 同名时会发生覆盖，越靠后优先级越大
- 生命周期不会发生覆盖，按数组中的顺序依次调用，最后是组件自身的
- 外部引入的生命周期不能被继承或混入`beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`
- `data()`中以`_`或`$`开头的变量不会被代理到`this`上

## directive：自定义指令

```js
// 选项式API
export default {
  directives: {
    track: {
      created(el, binding, vnode) {},
      beforeMount(el, binding, vnode) {},
      mounted(el, binding, vnode) {},
      beforeUpdate(el, binding, vnode, prenode) {},
      updated(el, binding, vnode, prenode) {},
      beforeUnmout(el, binding, vnode) {},
      Unmounted(el, binding, vnode) {},
    },
    /**
     * 简写形式
     */
    trackS(el, binding, vnode, prenode) {
      const { arg, modifiers, value, instance } = binding;
    },
  },
};
```

```ts
// 组合式API + TS
/**
 * 完整写法：对象式
 */
import type { Directive } from "vue";
const vTrack: Directive<HTMLElement, boolean> = {
  created(el, binding, vnode) {},
  beforeMount(el, binding, vnode) {},
  mounted(el, binding, vnode) {},
  beforeUpdate(el, binding, vnode, prenode) {},
  updated(el, binding, vnode, prenode) {},
  beforeUnmout(el, binding, vnode) {},
  Unmounted(el, binding, vnode) {},
};
/**
 * 简写形式：函数式
 * 这个函数在mounted，和updated时执行
 */
const vTrackS: Directive<HTMLElement, boolean> = (
  el,
  binding,
  vnode,
  prevnode
) => {};
```

- 自定义指令依赖于组件的根元素，对没有根元素的组件使用时无效并弹出警告
- 更新发生时会重新生成`vnode`，但`el`会被复用（diff 算法）
- `Directive`类型中的第一个泛型用于指定`el`的类型、第二个泛型用于指定`binding`中的`value`的类型

## hook：组合式函数

```ts
import {} from "vue";
```
