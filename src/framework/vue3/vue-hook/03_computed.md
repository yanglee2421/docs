# computed

## 仅读

```ts
import { reactive, computed } from "vue";
const data = reactive({
  FirstName: "刘",
  LastName: "音杰",
  age: 18,
});
data.FullName = computed(() => {
  return data.FirstName + "-" + data.LastName;
});
```

## 可读写

```ts
import { reactive, computed } from "vue";
const data = reactive({
  FirstName: "刘",
  LastName: "音杰",
  age: 18,
});
data.Name = computed({
  get() {
    return data.FirstName + "-" + data.LastName;
  },
  set(value) {
    const nameArr = value.split("-");
    data.FirstName = nameArr[0];
    data.LastName = nameArr[1];
  },
});
```
