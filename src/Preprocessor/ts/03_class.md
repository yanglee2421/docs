# class

## 基础

```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  callName() {
    console.log(this.name);
  }
}
```

## 继承

```ts
class Animal {
  constructor(age) {
    this.age = age;
  }
  run() {}
}
class Cat extends Animal {
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }
  callName() {}
}
```

::: tip

- TS 中 interface 可以继承 class
  :::

## 属性封装&语法糖

```ts
class Person {
  static readonly age = "静态";
  readonly name = "名字";
  get privacy() {
    return this.privacy;
  }
  set privacy(value) {
    this.privacy = value;
  }
  constructor(
    public name: string,
    private age: number,
    protected gender: string
  ) {
    //this.xxx = xxx 不用写了// [!code focus]
  }
}
```

## 抽象类

```ts
abstract class Human {}
class Person extends Human {}
const per = new Human(); //飘红
```

::: warning

- 抽象类只能被继承，不能被实例
  :::
