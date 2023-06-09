console.time("test");

console.timeLog("test", "main begin");

console.timeLog("test", "one begin");
setTimeout(() => {
  console.timeLog("test", "one end");
  console.log("2");
}, 20);

console.timeLog("test", "loop begin");
let begin = Date.now();
while (true) {
  /**
   * wait<20就有可能72
   * wait>20就27
   */
  const wait = 125;
  if (Date.now() - begin > wait) break;
}
console.timeLog("test", "loop end");

console.timeLog("test", "two begin");
setTimeout(() => {
  console.timeLog("test", "two end");
  console.log("7");
}, 1);

console.timeLog("test", "main end");
