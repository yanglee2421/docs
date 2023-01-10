# Suspense

- 异步组件的`setup()`可以被`asnyc`修饰

```js
import { defineAsnycComponents } from "vue";
const comp1 = defineASnycComponents(() => {
  return import("./src/components/test.vue");
});
```
