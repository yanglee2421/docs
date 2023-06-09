# Interface

## 声明

```ts
interface myInterface {
  name: string;
  age: number;
  fun(): void;
}
```

## 合并特性

```ts
interface myInterface {
  name: string;
}
interface myInterface {
  age: number;
}
//等同于下式
interface myInterface {
  name: string;
  age: number;
}
```

## 在类中使用接口

```ts
class Person implements myInterface {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## 函数签名

- 对象也可能是一个函数或类，声明此类对象时需要为其提供对应的签名

```ts
interface myFx {
  (param: number): void;
  new (): {};
}
function fun(cb: myFx) {
  cb(1);
  const ins = new cb();
}
```
