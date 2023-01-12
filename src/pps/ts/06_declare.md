# d.ts

## ES 中有的声明方式

```ts
declare var varVar: boolean;
declare var varLet: number;
declare const varConst: string;
declare function funFun<T = any>(params: any): void;
declare class Person {
  name: string;
  constructor(name: string);
  call<T extends Person>(): never;
}
declare module "module" {
  const mod: import("package").xxxProp;
  export default mod;
}
```

## TS 特有的声明方式

```ts
namespace Type {}
interface Inter {
  name: string;
  fun(): void;
}
type neoType = string | number;
```

::: tip

- 在此声明的类型全局可用
  :::
