const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("111");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("111");
  }, 5000);
});
p2.then((res) => {
  console.log("first-02", res);
});
p.then((res) => {
  console.log("first", res);
});
queueMicrotask(() => {
  console.log(1111);
});
p.then((res) => {
  console.log("second", res);
});
p2.then((res) => {
  console.log("second-02", res);
});
