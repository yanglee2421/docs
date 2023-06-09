# Generic

## 在函数和类中设置泛型

```ts
function fun<Typ>(params: unknown) {
  const res = doSomething(params);
  return res as unknown as Typ;
}
class Person<Typ1, Typ2, Typ3> {
  static prop: unknown;
  constructor(
    public parameters: Typ1,
    private param02: Typ2,
    readonly param3: Typ3
  ) {}
}
```

## 泛型继承类

```ts
class Person {}
/**
 * 接口Inter中继承Person中函有的属性
 */
interface Inter extends Person {
  length: number;
}
/**
 * 限制类型typ必须继承了Inter
 */
const fun = <typ extends Inter>(a: typ) => {
  return a.length;
};
```
