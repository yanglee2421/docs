# 类

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
  constractor(name) {
    this.name = name;
  }
}
class Man extends Person {
  constractor(name, age) {
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
```
