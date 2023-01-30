# 内置泛型

## Record

- 描述一个对象键和值的类型
- 第一个泛型作为 key 的类型
- 第二个泛型作为 value 的类型
- 键值对的数量不作限制

```ts
type _obj = Record<string, any>; //JS中的object
type _arr = Record<number, any>; //JS中的array
```

## Partial

- 让传入的类型的所有（浅层）属性变成可选属性

```ts
interface _obj {
  name: string;
  age: number;
}
type _obj_Partial = Partial<_obj>;
// returns type { name?: string; age?: number };
```

## Required

- 与 Partial 相反

## Readonly

- 仅读

```ts
interface _obj {
    name:string
    age:number
}
const obj:_obj = {
    name:"张三"
    age:18
}
obj.age = 19//允许
type _obj_Readonly = Readonly<_obj>
const obj02:_obj_Readonly = {
    name:"张三"
    age:18
}
obj02.age = 19//飘红
```

## Pick

- 除了选中的 key 都不要

```ts
interface _obj {
  name: string;
  age: number;
}
type _obj_Pick = Pick<_obj, "name">;
// returns type { name: string }
```

## Omit

- 与 Pick 相反，省略掉选中的 key

```ts
interface _obj {
  name: string;
  age: number;
  sex: string;
  address: string;
}
type _omit = "sex" | "address";
type _res = Omit<_obj, _omit>;
// returns type { name: string; age: number }
```

## ReturnType

- 获取传入的函数的类型的返回类型

```ts
const func = (params: unknown) => {
  return Number(params);
};
type _res = ReturnType<typeof func>;
// returns type number;
```

## InstanceType

- 返回传入的构造函数的实例的类型

```ts
class Person {
  constructor(public name: string, public age: number) {}
}
type _res = InstanceType<Person>;
// returns type { name: string; age: number };
```

## Uppercase & Lowercase

- 用于字符串形式的键名的大小写转换

```ts
type _sex = "man" | "women";
type _sex_up = Uppercase<_sex>;
// returns type "MAN" | "WOMEN";
type _sex_low = Lowercase<_sex_up>;
// returns type "man" | "women";
```

## Exclude

- 仅适用于联合类型
- 求补
- 从 F 中清除存在于 S 中的类型，并将剩余的返回

```ts
type _f = string | number | boolean;
type _s = string | null | undefined;
type _res = Exclude<_f, _s>;
//结果如下
type _res = number | boolean;
```

## Extract

- 与 Exclude<F, S>相反
- 求交
- 排除不同的，取出相同的

## NonNullable

- 从联合类型中排除 null 和 undefined

```ts
type _target = null | undefined | boolean | string | number;
type _res = NonNullable<_target>;
// returns type boolean | string | number;
```
