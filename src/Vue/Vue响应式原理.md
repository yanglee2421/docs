# Vue3

## `defineProperty()`

- 以此为基础的 Vue2 的数据劫持在新增或删除属性时不会触发页面更新
- 直接以数组下标形式调用时，也不会触发页面更新
- `this.$set(this.obj,'属性名','值')`可以解决上面的问题
- `Vue.set(this.obj,'属性名','值')`
- `Vue.set(this.arr,0,'值')`
- `this.$delete()`
- `Vue.delete()`

```js
Object.defineProperty(obj, "prop", {
  value: "",
  enumerable: false,
  writable: false,
  configurable: false,
  get() {
    return vari;
  },
  set(value) {
    /*value为被修改后的新值*/
  },
});
```

## `Proxy()`

- `window`上的一个构造函数
- 用于创建一个代理实例

```js
const obj = {};
const prox = new Proxy(obj, {
  get(target, propName) {
    return target[propName];
  },
  set(target, propName, value) {
    /*prop表示被修改或新增的属性*/
    /*value表示修改或新增的值*/
    target.propName = value;
  },
  deleteproperty(target, propName) {
    return delete target[propName];
  },
});
```

## `Reflect()`

- `defineProperty()`
- `deleteProperty()`
- `get()`
- `set()`
