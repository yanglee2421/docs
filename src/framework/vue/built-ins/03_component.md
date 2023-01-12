## Fragment

- 组件不限制单个根元素了

# transition

## transition

- `transition`组件内只能有一个子组件
- `transition`组件不会被渲染为真实 DOM
- 没有`name`属性时使用`v-`开头的类名为其配置过渡效果
- `appear`属性存时，页面载入时会触发动画

```vue
<template>
  <transition name="animate">
    <img v-show="true" />
  </transition>
</template>
<style scoped>
.animate-enter-active， .animate-leave-active {
  transition: 1s;
}
.animate-enter-from {
  transform: translateX(100%);
}
.animate-enter-to,
.animate-leave-from {
  transform: translateX(0);
}
.animate-leave-to {
  transform: translateX(-100%);
}
</style>
```

## transition-group

- 多个根节点时需要使用 transition-group 组件

```vue
<template>
  <transition-group name="animate">
    <img
      v-for="(item, index) in state"
      :key="index"
      v-show="true"
      :src="item"
    />
  </transition-group>
</template>
<script lang="ts" setup>
const state = reactive([]);
</script>
<style scoped>
.animate-enter-active， .animate-leave-active {
  transition: 1s;
}
.animate-enter-from {
  transform: translateX(100%);
}
.animate-enter-to,
.animate-leave-from {
  transform: translateX(0);
}
.animate-leave-to {
  transform: translateX(-100%);
}
</style>
```

# teleport

## `<teleport></teleport>`

- `to`属性指定父元素，值是一个 CSS 选择器
- `disable`属性限制传送是否发生

```vue
<teleport to="body">
  <h1>要传送的内容</h1>
</teleport>
```

# Suspense

- 异步组件的`setup()`可以被`asnyc`修饰

```js
import { defineAsnycComponents } from "vue";
const comp1 = defineASnycComponents(() => {
  return import("./src/components/test.vue");
});
```

# keep-alive

```vue
<template>
  <keep-alive>
    <my-components></my-components>
  </keep-alive>
</template>
```

# slot

- 普通用法
  - 声明
  ```vue
  <solt>
      当插槽没有被使用时，此处的内容会显示出来
  </solt>
  ```
  - 调用
  ```vue
  <template>
    <myComponents>
      <h1>将此标签嵌入到插槽的位置</h1>
    </myComponents>
  </template>
  ```
- 具名插槽
  - 声明
  ```vue
  <solt name="名字"></solt>
  ```
  - 调用
  ```vue
  <template>
    <myComponents>
      <template v-solt:名字></template>
      <template #名字></template>
    </myComponents>
  </template>
  ```
- 作用域插槽
  > 由子组件向父组件传参，若要传多个参可用解构赋值
  - 声明
  ```vue
  <solt :info="variable"></solt>
  ```
  - 调用
  ```vue
  <template>
    <my-components>
      <template #default="{ info }">
        {{ info }}
      </template>
    </my-components>
  </template>
  ```

# 3. component

```vue
<component :is="componentName"></component>
<script>
import componentName from "组件路径";
export default {
  components: {
    componentName,
  },
};
</script>
```
