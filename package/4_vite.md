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
