# webpack

## 安装

```powershell
yarn add -D webpack webpack-cli webpack-dev-server
```

## 命令

```powershell
webpack#打包
webpack --watch#打包并监测文件变化
webpack server#启动开发服务器
```

## 配置

```js
// webpack.config.js
const path = require("path");
module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx"], // 配置ts文件可以作为模块加载
  },
};
```

## loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?jsx?/,
        include: "./src",
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset--env"] },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: "./src",
        exclude: "/node_modules/",
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|pdf)$/,
        type: "asset/inline",
      },
      {
        test: /\.(mp4|rmvb)$/,
        type: "asset/resource",
      },
    ],
  },
};
```

## externals

- 不需要打包的外部模块

```js
const nodeExternals = require("webpack-node-externals");
module.exports = {
  externals: [nodeExternals()],
};
```

## plugins

```js
module.exports = {
  plugins: [],
};
```

## sourceMap

```js
module.exports = {
  devtool: "inline-source-map",
};
```
