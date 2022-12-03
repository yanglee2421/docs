# HTMLElemnt

- 这种玩意儿能不写就不写
- MVVM 框架万岁！！！

```js
/**
 * 开始时，target 是空的
 */
// 1.获取，第一个含有 else 类的元素中的，第一个含有 oldEment 类的元素
const oldElement = document.querySelector(".else > .oldElement");
// 2.将 oldElement 移动到 target 中
target.appendCildren(oldElement);
// 3.创建一个新元素 neoElement
const neoElement = document.createElement("div");
// 4.将 target 中的 oldElement 换成 neoElement
target.replaceChild(oldElement, neoElement);
// 5.获取所有 id 为 oldBrother 的元素，取第一个
const oldBrother = document.querySelectors("#oldBrother")[0];
// 6.将 oldBrother 插入到 target 中，处于 neoElement 之前
target.insertBefore(oldBrother, neoElement);
// 7.移除 target 中的 neoElement
target.removeChild(neoElement);
/**
 * 8.检查 target 中是否含有neoElement
 * 返回一个布尔
 */
target.contains(neoElement); //false
/**
 * 9.检查 target 中是否含有子元素
 * 返回一个布尔
 */
target.hasChildNodes(); //true
/**
 * 10.深层克隆一个 target
 * true：深层
 * false：浅层
 */
target.cloneNode(true); //
```
