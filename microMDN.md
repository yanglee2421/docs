# 字符串
## `String`
## `String.prototype`
- `includes(subStr[, fromIndex])`
- `startsWith(subStr[, fromIndex])`
- `endsWith(subStr[, fromIndex])`
- `repeat(int)`
- `padStart(targetLength, padString)`
- `padEnd(targetLength, padString)`
- `trim()`
- `trimStart()`or`trimLeft()`
- `trimEnd()`or`trimRight()`
# 数组
## `Array`
- `from(iterable)`
## `Array.prototype`
- `includes(item[, fromIndex])`
- `entries()`
- 返回新数组，不改变原数组
>- `flat(int)`
>- `faltMap(callback)`
>- `concat(arr[, arr, ...])`
>- `every(callback)`
- 返改后数组，改变原数组
>- `copyWithin(target[, start[, end]])`
# 对象
## `Object`
- `getOwnPropertyDescriptors(obj, 'prop')`
- `fromEntries(arr)`
- `assign(obj, obj2[, obj3])`
## `Object.prototype`
# 独一无二的值
## `Symbol`
- `(description)`
- `for(description)`
- `keyFor(sym)`
- `asyncIterator`
- `iterator`
- `toStringTag`
## `Symbol.prototype`
- `description`
- `toString()`
- `valueOf()`
# 集合
## `Set`
- `(arr)`
## `Set.prototype`
- `size`
- `add(value)`
- `has(value)`
- `delete(value)`
- `clear()`
- `entries()`
- `keys()`
- `values()`
- `forEach(callback)`
# 映射
## `Map`
- `()`
## `Map.prototype`
- `size`
- `set(key, value)`
- `has(key)`
- `delete(key)`
- `get(key)`
- `clear()`
- `keys()`
- `values()`
- `entries()`
- `forEach(callback)`
# 承诺
## `Promise`
- `(callback(resolve, reject))`
- `resolve(resolve)`
- `reject(reject)`
- `all(iterable)`
- `allSettled(iterable)`
- `any(iterable)`
- `race(iterable)`
## `Promise.prototype`
- `then(callback(resolve))`
- `catch(callback(reject))`
- `finally(callback)`