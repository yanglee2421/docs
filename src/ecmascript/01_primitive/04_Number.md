# Number

## 静态方法

- [isNaN](#isnan)

## 实例方法

1. [toFixed](#tofixed)
2. [toString](#tostring)

## 示例

### isNaN

```js
globalThis.isNaN("NaN"); //true
Number.isNaN("NaN"); //false
```

:::tip
与 globalThis.isNaN 不同，Number.isNaN 不会进行类型转换
:::

### toFixed

```js
const num = 10;
const str = num.toFixed(2); //10.00
```

:::warning
返回的是 string
:::

### toString

```js
const num = 2;
const str = num.toString(2); //10
```

:::warning

- 用于进行进制转换
- 返回是 string

:::
