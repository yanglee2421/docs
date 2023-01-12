# 循环

## for

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; //跳过该次执行
  if (i === 7) break; //跳出整个循环
}
/**
 * 命名
 * 内部循环终止外部循环
 */
out: for (let j = 0; j < 10; j++) {
  inner: for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    if (i === 7) break out;
    console.log(i);
  }
}
```

### for...in...

```js
/**
 * 遍历所有可枚举属性，包括继承来的
 * 1.string
 * 2.array
 * 3.object
 */
for (const i in "string") {
  console.log(i);
}
for (const i in [0, 1, 2, 3]) {
  console.log(i);
}
for (const i in { name: "张三", age: 18 }) {
  console.log(i);
}
```

### for...of...

```js
/**
 * 可以循环iterable
 * 1.string
 * 2.array
 * 3.object（特殊情况，虽然是iterable但不能被for...of...）
 * 4.set
 * 5.map
 */
for (const i of "string") {
  console.log(i);
}
for (const i of [0, 1, 2, 3]) {
  console.log(i);
}
for (const i of { name: "张三", age: 18 }) {
  console.log(i);
}
for (const i of new Set([1, 2, 3])) {
  console.log(i);
}
function* Iter() {
  yield "第一次";
  yield "第二次";
  yield "第三次";
  return "第四次";
}
/**
 * for...of...只会遍历出yield关键字后的语句，仅循环三次
 */
const iter = Iter();
for (const i of iter) {
  console.log(i);
}
const iter01 = Iter();
iter01.next(); //{value:"第一次", done:false}
iter01.next(); //{value:"第二次", done:false}
iter01.next(); //{value:"第三次", done:false}
iter01.next(); //{value:"第四次", done:true}
```

### for...await...of

```js
async function* Iter() {
  yield "第一次";
  yield "第二次";
  yield "第三次";
  return "第四次";
}
const iter = Iter();
(async () => {
  for await (const item of iter) {
    console.log(item);
  }
})();
```

## while

```js
/**
 * while后为falsy则循环继承
 */
let i = 0;
while (i < 10) {
  i++;
}
```
