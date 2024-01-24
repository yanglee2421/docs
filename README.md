# Yang_Lee Docs

[Yang_Lee Docs](https://yanglee2421.github.io/docs/)
基于 vitepress，后者基本用法如下

## set up

- 依次在 powershell 命令行执行如下：

```powershell
pnpm add -D vitepress vue
mkdir docs
cd docs
# desktop/my-docs/docs
new-item index.md
cd ../
# desktop/my-docs
pnpm exec vitepress dev docs
```

## cli

```powershell
vitepress dev docs
vitepress build docs
vitepress preview docs
```

## config

```powershell
# desktop/my-docs/docs
cd .vitepress
# desktop/my-docs/docs/.vitepress
new-item config.ts
```

```ts
// config.ts
import { defineConfig } from "vitepress";
export default defineConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [["link", { rel: "shortcut icon", href: "vite.svg" }]],
  themeConfig: {
    logo: "vite.svg",
    siteTitle: "Yang_Lee",
    socialLinks: [
      { icon: "github", link: "https://github.com/Swz0321" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    nav: [
      { text: "nav-1", link: "" },
      {
        text: "nav-2",
        items: [
          { text: "nav-2-1", items: [] },
          { text: "Item B", link: "/item-2" },
        ],
      },
    ],
    sidebar: {
      "/": [
        {
          text: "TypeScript",
          collapsible: true,
          items: [{ text: "类型", link: "" }],
        },
      ],
      "/data/": [
        {
          text: "开始",
          collapsible: true,
          items: [
            {
              text: "Scss",
              items: [{ text: "注释", items: [] }],
            },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Yang_Lee：xtcff082421@gmail.com",
    },
  },
});
```

## 表情符

:tada:
:100:

## 卡片

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

## Badge

### Title <Badge type="info" text="default" />

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="beta" />

### Title <Badge type="danger" text="caution" />

## code

::: code-group

```ts [use.ts]
import {} from "vite"; // [!code --]
import {} from "vite"; // [!code ++]
import {} from "vite"; // [!code warning]
import {} from "vite"; // [!code error]
import {} from "vite"; // [!code focus]
import {} from "vite"; // [!code hl]
```

```ts{1,3-4}
export const a = "a";
export { a };
export default {};
export function useHook() {}
```

:::

```yml
theme: jekyll-theme-slate
include: [_plugin-vue_export-helper-c27b6911.js]
```
