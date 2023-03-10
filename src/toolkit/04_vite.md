# 开始

## 安装

```powershell
yarn add -D vite
# 快速搭建一个项目
npm create vite@latest vite-app
yarn create vite vite-app
```

## 命令

```powershell
vite#启动开发服务器
vite build#打包项目（入口文件是index.html，main.ts需要在script[type=module]引入）
vite preview#启动预览服务器，运行打包后的项目
```

## 路径别名

```ts
// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
export default defineConfig(({ command, mode }) => {
  return {
    // 路径别名
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
```

## CSS 预处理器

```ts
import { defineConfig } from "vite";
import path from "path";
export default defineConfig(({ command, mode }) => {
  return {
    // 路径别名
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // css预处理器
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/index.scss" as *;`,
        },
      },
    },
  };
});
```

## 代理

```ts
import { defineConfig } from "vite";
export default defineConfig(({ command, mode }) => {
  return {
    // 开发服务器
    server: {
      port: 5173,
      proxy: {
        "/dev": {
          target: "http://192.168.1.4",
          rewrite: (path) => path.replace(/^\/dev/, ""),
          changeOrigin: true,
          ws: true,
        },
      },
    },
  };
});
```

## 子应用

- 作为子路由应用时

```ts
import { defineConfig } from "vite";
export default defineConfig(({ command, mode }) => {
  return {
    base: "/react/",
    build: {
      outDir: "react-app",
    },
  };
});
```

## glob 导入

```ts
const mod = import.meta.glob(
  [
    // 从以下路径导入
    "./mod/**/*.ts",
    // 排除以下
    "!./mod/**/exclude.js",
  ],
  {
    // 是否渴望静态导入
    eager: true,
    // 具名导入
    import: "default",
    // 导入为string
    as: "raw",
  }
);
```

## 静态资源

### 直接引入

```ts
import imgUrl from "./img.png";
document.getElementById("hero-img").src = imgUrl;
```

### 作为 url 引入

```ts
import workletURL from "./worklet.js?url";
const worker = new Worker(workletURL);
```

### 作为字符串引入

```ts
import shaderString from "./shader.glsl?raw";
```

### Worker

```ts
// 作为构造器引入
import MyWorker from "./work?worker";
const myWorker = new MyWorker();
// 引入可共享的worker构造器
import MyWorker from "./work?sharedworker";
const myWorker = new MyWorker();
// 内联为 base64 字符串
import MyWorker from "./worker?worker&inline";
const myWorker = new MyWorker();
```

### URL 类引入

```ts
const imgUrl = new URL("./img.png", import.meta.url);
document.getElementById("hero-img").src = imgUrl.href;
```
