# 装包
- 在powershell中：
~~~powershell
npm create vite@latest
npm i
npm i sass -D
npm i element-plus
npm i @element-plus/icons-vue
npm i vue-router@next
npm i vuex@next
npm run dev
~~~
# 安装`sass`
- 在vite.config.js中
~~~js
const path = require("path")
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/index.scss";'
      }
    }
  },
})
~~~
# 安装`element-plus`
- 在main.js中
~~~js
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
Object.keys(icons).forEach(item => {
    if (Reflect.has(icons, item)) {
        app.component(item, icons[item])
    }
})
app.use(ElementPlus, {
    locale
})
~~~
# 安装`vue-router`
- 在ruoter.js中
~~~js
import myComponent from '组件路径'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        { path:'组件路径', component:myComponent }
    ]
})
export default router
~~~
# 安装`vuex`
-在vuex.js中
~~~js
import { createStore } from "vuex"
const store = createStore({
  mutations: {},
  state: () => { },
  getters: {},
  actions: {},
  modules: {}
})
export default store
~~~