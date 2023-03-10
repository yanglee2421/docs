# tsconfig.json

## compilerOptions

```json
{
  "compilerOptions": {
    //目标JS的ES版本
    "target": "ES3",
    //目标JS的模块化方案
    "module": "es2015",
    //指定项目中要使用的库，使用到的会有语法提示，反之没有
    "lib": ["dom", "esnext"],
    //指定编译后的文件所在的目录
    "outdir": "./dist",
    /*
    将所有代码合并为一个文件并输出
    此时module要配置为system或amd
    */
    "outFile": "./dist/app.js",
    //是否编译JS
    "allowJs": true,
    //是否检查对JS进行类型检查
    "checkJs": false,
    //是否移除注释
    "removeComments": false,
    //是否不生成编译后的文件
    "noEmit": false,
    //当有错误发生时，是否不生成编译后的文件
    "noEmitOnError": true,
    /*
    编译后的文件是否使用严格模式
    JS使用模块化后自动开启严格模式
    JS手动开启严格模式，"use strict"
    */
    "alwaysStrict": true,
    //不允许隐式的any类型
    "noImplicitAny": true,
    //不允许隐式的类型不明确的this
    "noImplicitThis": true,
    //检查变量是否有可能为null
    "strictNullChecks": true,
    //严格检查的总开关
    "strict": true
  }
}
```

## include、exclude、extends

```json
{
  "include": ["./src/**/*.ts", "./src/**/*.tsx"],
  "exclude": ["./src/**/*.js", "./src/**/*.jsx"],
  "extends": "./file"
}
```
