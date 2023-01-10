import { defineConfig } from "vitepress";
export default defineConfig({
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [["link", { rel: "shortcut icon", href: "/vite.svg" }]],
  themeConfig: {
    logo: "/vite.svg",
    siteTitle: "Yang_Lee",
    nav: [
      { text: "Database", link: "/data/数据库.md" },
      { text: "ECMAScript", link: "/src/JS/ECMAScript/00_概念/事件回流.md" },
      {
        text: "JavaScript",
        items: [
          { text: "ECMAScript", link: "/item-1", items: [] },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Get Start",
          collapsible: true,
          items: [
            {
              text: "模型",
              link: "/docs/model/00_demo.md",
            },
          ],
        },
      ],
      "/data/": [
        {
          text: "开始",
          items: [
            { text: "简要", link: "/data/数据库.md" },
            { text: "typeORM", link: "/data/typeorm.md" },
          ],
        },
      ],
      "/ECMAScript/": [
        {
          text: "ECMAScript",
          items: [
            {
              text: "Event Loop",
              link: "/src/JS/ECMAScript/00_概念/事件回流.md",
            },
            {
              text: "引用类型",
              link: "/src/JS/ECMAScript/03_引用类型/AbortContrller.md",
            },
            {
              text: "ES",
              link: "/ES2015-2022.md",
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
