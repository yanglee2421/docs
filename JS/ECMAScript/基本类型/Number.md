# Number

## 静态方法

- `isNaN(vari)`

```js
/**
 * 与globalThis.isNaN不同
 * Number.isNaN不会进行类型转换
 */
globalThis.isNaN("NaN"); //true
Number.isNaN("NaN"); //false
```

## 实例方法

- `toFixed(int)`
- `toString(int)`
