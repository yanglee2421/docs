# Undefined

- 已声明但没有赋值

## 声明方式

|   关键字   |   变量提升   | 块级作用域 | 重复声明 | 可以改 |
| :--------: | :----------: | :--------: | :------: | :----: |
|   `var`    | 作用域的顶部 |     无     |   允许   |  可以  |
| `function` |   块的顶部   |     无     |   允许   |  可以  |
|   `let`    |     没有     |     有     |  不允许  |  可以  |
|  `const`   |     没有     |     有     |  不允许  | 不可以 |