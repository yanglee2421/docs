# Decorator <Badge type="warning" text="不推荐"/>

::: warning

- 装饰器的方案并未完全确立，有可能在正式版发生变动！
- 装饰器默认不受支持，需要在 tsconfig.json 中开启
  :::

## 类装饰器

```ts
// 接收构造器作为参数
@toClass()
class Person {}
function toClass(str: string) {
  return (constructor: Function) => {};
}
```

## 属性装饰器

1. 属性是实例属性时，一参为原型对象
2. 属性是静态属性时，一参为构造器
3. 二参为属性名

```ts
class Person {
  toProps();
  name = "实例属性";
  static name = "静态属性";
}
function toProps() {
  return (obj: object, name: string) => {};
}
```

## 方法装饰器

1. 属性是实例属性时，一参为原型对象
2. 属性是静态属性时，一参为构造器
3. 二参为属性名
4. 三参为属性描述对象

```ts
class Person {
  @toFun()
  fun() {}
  @toFun()
  static fun();
}
function toFun() {
  return (obj: object, name: string, descript: object) => {};
}
```

## 取值器装饰器

1. 属性是实例属性时，一参为原型对象
2. 属性是静态属性时，一参为构造器
3. 二参为属性名
4. 三参为属性描述对象

```ts
class Person {
  @toGetter()
  get age() {}
  @toGetter()
  static get age() {}
}
function toGetter() {
  return (obj: object, name: string, descript: object) => {};
}
```

## 参数装饰器

1. 方法是实例成员时，一参为原型对象
2. 方法是静态成员时，一参为构造器
3. 二参为参数名
4. 三参为参数的索引

```ts
class Person {
  fun(@toParams params: string) {}
  static fun(@toParams params: string) {}
}
function toParams(obj: object, name: string, index: number) {}
```
