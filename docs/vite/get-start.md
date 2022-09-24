# 开始

```powershell
npm create vite@latest viteApp
```

# css 预处理器

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/index.scss";`,
      },
    },
  },
});
```

# 路径别名

- 安装 node 类型依赖

```powershell
npm i -D @types/node
```

- 配置别名

```js
/**
 * vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- 允许使用 es6 的模块化来导入`path`模块以解决报红

```json
/**
 * tsconfig.node.json
 */
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true
  }
}
```

# 不同环境（模式）下的的 vite 配置

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig((command, mode) => {
  return {
    plugins: [vue()],
  };
});
```
