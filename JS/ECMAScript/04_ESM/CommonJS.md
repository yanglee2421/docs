# CommonJS 模块化

## 外部函数

```js
(module, exports, require, __dirname, __filename) => {
  const axios = require("");
  const path = require("node:path");
  module.exports = {};
  exports.xxxPath = path.resolve(__dirname, "./xxx");
};
```
