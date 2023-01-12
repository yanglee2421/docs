# watcher

## watch

```js
import { wathch } from "vue";
// 侦听ref
let i = ref(1);
watch(
  i,
  (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
  },
  {
    immediate: true,
  }
);
// 侦听reactive
const obj = reactive({
  name: "名",
  age: 18,
});
// 立即执行
watch(obj, (newValue, oldValue) => {}, {
  immediate: true,
});
// 浅侦听
watch(
  () => obj.name,
  (newValue, oldValue) => {}
);
watch([() => obj.name, () => obj.age], (newValue, oldValue) => {});
```

## watchEffect

```js
const state = reactive({
  some: "",
});
watchEffect(() => {
  const target = state;
  doSomething();
});
```

## watchPostEffect

```js
const state = reactive({
  some: "",
});
// 用法同watchEffect，但能获取到dom
watchPostEffect(() => {
  const target = state;
  doSomething();
});
```
