// 目标对象
const target = {
  name: "孙悟空",
  age: 18,
  relation: ["猪八戒"],
};

/**
 * Vue3
 */
let p = new Proxy(target, {
  // 从代理对象上取值时触发
  get(target, key) {
    return Reflect.get(target, key);
  },
  //   改或增代理对象的属性时触发
  set(target, key) {
    console.log("Vue3 tick");
    Reflect.set(target, key);
  },
  //   从代理对象上删除属性时触发
  deleteProperty(target, key) {
    console.log("Vue3 tick");
    Reflect.deleteProperty(target, key);
  },
});
// 改或增代理对象的属性可以触发setter
p.address = "唐三藏";
// 直接把代理对象换了不行
p = {};

/**
 * Vue2
 */
const arr = [];
const p2 = [];
Object.defineProperty(p2, 0, {
  get() {
    return Reflect.get(arr, 0);
  },
  set(value) {
    console.log("Vue2 tick");
    Reflect.set(arr, 0, value);
  },
});
// 改代理对象上已有的值可以
p2[0] = "沙和尚";
// 为代理对象新增属性不行
p2[2] = 28;
console.log(arr);

/**
 * Object.defineProperty为数组创建代理对象是可以的
 * 但Vue2中没有采用此方案
 * 如果以此方法收集状态变更的话，需要遍历数组，若数组太长的话性能开销太大
 */

for (const i in "str") {
  console.log(i);
}
