# setup

## 简述

- 组合式 API 的入口
- 页面启动后会自动执行，`this`指向`undefined`
- `setup()`替换了`data()`和`methods`，除前两者以外的的实例属性也写在`setup()`中
- 在`setup()`中定义的变量和方法都需要`return`出去，否则无法在视图层使用
- `setup()`默认返回的是一个`promise`，因此不能被`async`标记
- vue2 中的`data()`和`methods`等能访问到`setup()`中的内容，反之则不行

```vue
<template>
  <div>{{ obj }}</div>
  <button @click="fun1">按钮1</button>
  <button @click="fun2">按钮2</button>
</template>
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

## 两个参数

```js
props:[ prop1, prop2 ]
emits:[ emit1, emit2 ]
setup(props,context){
  console.log(props)
  console.log(context)
  console.log(context.attrs)
  console.log(context.solts)
  console.log(context.emits)
}
```

## 语法糖

- 组件和指令导入即注册
- 以`defineProps()`和`defineEmits()`（不必从`vue`中`import`）来替代`props`和`emits`
- 子组件的模板中可以直接调用父组件传入的`props`
- 在 TypeScript 中需要 `withDefaults` 来声明 `props`

## defineProps

- 用来替换 vue2 中的`props`

```ts
interface props {
  prop?: boolean;
  arr?: string[];
}
const props = withDefaults(defineProps<props>(), {
  arr: () => [],
});
```

## defineEmits

```ts
const emit = defineEmits<{
  (event: "onClick", $event: boolean): void;
}>();
emit("onClick", true);
```
