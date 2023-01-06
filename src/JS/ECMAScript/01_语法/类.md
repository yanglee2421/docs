# Class

## 基本

```js
class Person {
  name = "";
  constructor(age) {
    // 这个this指向实例
    this.age = age;
  }
  // 这个方法在实例上
  callAge: () => {};
  // 这个方法在原型上
  callName() {}
}
```

## 静态属性

```js
class Person {
  static name = "人";
  static callName = () => {
    // 这个this指向构造函数本身
    console.log(this.name);
  };
}
Person.name; //"人"
```

## 扩展

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

## 存取器、私有属性

```js
class Person {
  #name = "人";
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}
// 对象上的存取器
const obj = {
  get name() {
    return "";
  },
  set name(value) {},
};
```
