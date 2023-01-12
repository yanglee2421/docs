# 内置泛型

## Record

- 描述一个对象键和值的类型
- 键的类型必须是 K
- 值的类型必须是 T
- 键值对的数量不作限制

```ts
type _obj = Record<string, any>; //JS中的object
type _arr = Record<number, any>; //JS中的array
```

## Partial

```ts
/**
 * 让传入的类型的所有（浅层）属性变成可选属性
 */
interface _obj {
  name: string;
  age: number;
}
type _obj_Partial = Partial<_obj>;
// returns type { name?: string; age?: number };
```

## Required

```ts
/**
 * 与Partial<T>相反
 */
```

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

```ts
/**
 * 获取传入的函数的类型的返回类型
 */
const func = (params: unknown) => {
  return Number(params);
};
type _res = ReturnType<typeof func>;
// returns type number;
```

## InstanceType

```ts
/**
 * 返回传入的构造函数的实例的类型
 */
class Person {
  constructor(public name: string, public age: number) {}
}
type _res = InstanceType<Person>;
// returns type { name: string; age: number };
```

## Uppercase & Lowercase

```ts
/**
 * 用于字符串形式的键名的大小写转换
 */
type _sex = "man" | "women";
type _sex_up = Uppercase<_sex>;
// returns type "MAN" | "WOMEN";
type _sex_low = Lowercase<_sex_up>;
// returns type "man" | "women";
```

## Exclude

```ts
/**
 * 仅适用于联合类型
 * 求补
 * 从F中清除存在于S中的类型，并将剩余的返回
 */
type _f = string | number | boolean;
type _s = string | null | undefined;
type _res = Exclude<_f, _s>;
//结果如下
type _res = number | boolean;
```

## Extract

```ts
/**
 * 与Exclude<F, S>相反
 * 求交
 * 排除不同的，取出相同的
 */
```

## NonNullable

```ts
/**
 * 从联合类型中排除null和undefined
 */
type _target = null | undefined | boolean | string | number;
type _res = NonNullable<_target>;
// returns type boolean | string | number;
```
