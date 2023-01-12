# Type

## 基本类型

::: code-group

```ts [es-type.ts]
// ES中原有的类型
const nu: null = null;
const un: undefined = undefined;
const bool: boolean = false;
const str: string = "";
const num: number = 0;
const bigNum: bigint = 0n;
const syb: symbol = Symbol("这是一个symbol");
```

```ts [ts-type.ts]
// 以下类型 TS 特有
const a: any = "whatever"; //关闭类型检查
const b = a as unknown as string; //类型未知
type funVoid = () => void; //没有返回值
type funNever = () => never; //函数可能会报错
```

:::
::: tip

- unknown 不能直接赋值给其它开启了类型检查变量，与`any`相比不会关闭其它变量的类型检查

```ts{3-4}
let a: unknown = 123;
let b: number;
b = a; //报错
b = a as number; //不报错
b = <number>a;
```

:::

## 引用类型

### 数组

- `array`

```ts
let arr: string[] = [];
let arr02: array<string> = [];
```

### 元组

- `tuple`, 长度固定的数组

```ts
const tuple: [string, string] = ["", ""];
```

### 枚举 <Badge type="warning" text="不推荐"/>

- `enum`

```ts
enum Gender {
  male,
  female,
}
let i: Gender = 99999;
const enum Sex {
  man = 0,
  women = 1,
}
let j = Sex.women;
```

:::tip
枚举的本质是 number 类型
:::

## 类型字面量

```ts
let a: "true" | "false" = "false";
let c: { name: string; age?: number } = { name: "" };
let obj: { name: string; [key: string]: unknown } = { name: "" };
let fun: (b: number, a: number) => number;
```

## 联合类型

```ts
// 与
let i: { name: string } & { age: number };
// 或
let b: number | string;
```

## 类型别名

```ts
type numOrStr = number | string;
let i: numOrStr;
```
