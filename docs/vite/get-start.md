# 开始
~~~powershell
npm create vite@latest viteApp
~~~
# css预处理器
~~~js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
export default defineConfig({
    plugins:[vue()],
    css:{
        preprocessorOptions:{
            scss:{
                additionalData:`@import "@/assets/index.scss";`
            }
        }
    }
})
~~~
# 路径别名
- 安装node类型依赖
~~~powershell
npm i -D @types/node
~~~
- 配置别名
~~~js
/**
 * vite.config.ts
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
export default defineConfig({
    plugins:[vue()],
    resolve:{
        alias:{
            "@":path.resolve(__dirname, "./src")
        }
    }
})
~~~
- 允许使用es6的模块化来导入`path`模块以解决报红
~~~json
/**
 * tsconfig.node.json
 */
{
    "compilerOptions":{
        "allowSyntheticDefaultImports":true
    }
}
~~~