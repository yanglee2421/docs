# provide 与 inject

- 实现祖先向后代传参

```js
const obj = {
  name: "名字",
};
provide("obj", obj);
/* 以下代码在后代组件中 */
const car = inject("obj");
```
