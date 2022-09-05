# Vue3中的复用、继承、自定义指令
## Mixin
~~~js
// 导出
export default {
    data(){
        msg:123,
    },
    methods:{
        fun(){},
    },
}
// 引入
import mixin01 from "./mixin01"
import mixin02 from "./mixin02"
export default {
    mixin:[ mixin01, mixin02 ],
}
~~~
- 值是一个数组
- 对配置项进行复用
- 同名时会发生覆盖，越靠后优先级越大
- 生命周期不会发生覆盖，按数组中的顺序依次调用，最后是组件自身的
## extends
- 单继承
- 值是一个对配置对象
- 顺序比mixins更靠前，优先级最低