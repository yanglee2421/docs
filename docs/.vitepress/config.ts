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
      // { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
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
          text: "TypeScript",
          collapsible: true,
          items: [
            {
              text: "类型",
              link: "/docs/model/00_demo.md",
            },
            {
              text: "接口",
              link: "/docs/model/00_demo.md",
            },
            {
              text: "泛型",
              link: "/docs/model/00_demo.md",
            },
            {
              text: "类",
              link: "/docs/model/00_demo.md",
            },
            {
              text: "声明文件",
              link: "/docs/model/00_demo.md",
            },
            {
              text: "装饰器（beta）",
              link: "/docs/model/00_demo.md",
            },
          ],
        },
        {
          text: "Scss",
          collapsible: true,
          items: [
            { text: "注释", link: "" },
            { text: "变量", link: "" },
            { text: "嵌套", link: "" },
            { text: "指令", link: "" },
            { text: "内置方法", link: "" },
          ],
        },
        {
          text: "Less",
          collapsible: true,
          items: [{ text: "xxx", link: "" }],
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
