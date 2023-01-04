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
