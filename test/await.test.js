/**
 * await处理数据有三个情况
 * 1. promise 实例
 * 2. thenable 对象：await 的实质就是调用对象上的 then 方法
 * 3. 一个值：会被 Promise.resolve 包装成 promise 实例
 */
async function fx() {
  // promise
  await Promise.resolve();
  // thenable
  await {
    then(res, rej) {
      setTimeout(() => rej("nmsl"), 5000);
    },
  };
  //   value
  await "whatever";
  // async 函数的返回值也会被包装成 promise
  return console.log("end");
}
fx();
