# 0. `ref`
- 用来获取DOM元素or组件实例
~~~vue
<h1 ref='variable'></h1>
<!-- 上面是打标，下面是以标取值 -->
<script>
export default {
    methods:{
        fun(){
            this.$refs.variable
        }
    }
}
</script>
~~~
# 1. `keep-alive`
~~~vue
<keep-alive>
    <myComponents></myComponents>
</keep-alive>
~~~
# 2. `slot`
- 普通用法
    - 声明
    ~~~vue
    <solt>
        当插槽没有被使用时，此处的内容会显示出来
    </solt>
    ~~~
    - 调用
    ~~~vue
    <myComponents>
        <h1>将此标签嵌入到插槽的位置</h1>
    </myComponents>
    ~~~
- 具名插槽
    - 声明
    ~~~vue
        <solt name='名字'></solt>
    ~~~
    - 调用
    ~~~vue
        <myComponents>
            <template v-solt:名字></template>
            <template #名字></template>
        </myComponents>
    ~~~
- 作用域插槽
    >由子组件向父组件传参，若要传多个参可用解构赋值
    - 声明
    ~~~vue
    <solt :info='variable'></solt>
    ~~~
    - 调用
    ~~~vue
    <myComponents>
        <template v-solt:default='接收的名字'>
            {{接收的名字}}
        </template>
    </myComponents>
    ~~~
# 3. `component`
~~~vue
<component :is='componentName'></component>
<script>
import componentName from '组件路径'
export default {
    components:{
        componentName
    }
}
</script>
~~~