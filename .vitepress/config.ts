import { defineConfig } from "vitepress";
import { sidebar_es, sidebar_Preprocessor } from "./sidebar";
export default defineConfig({
  // 打包
  base: "/docs/",
  outDir: "docs",
  // html
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [["link", { rel: "shortcut icon", href: "vite.svg" }]],
  // 页面
  lastUpdated: true,
  themeConfig: {
    logo: "vite.svg",
    siteTitle: "Yang_Lee",
    editLink: {
      pattern: "https://github.com/swz0321/docs/:path",
    },
    // lastUpdatedText: "",
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
      { text: "ECMAScript", link: "/src/ECMAScript/index.md" },
      { text: "Preprocessor", link: "/src/Preprocessor/index.md" },
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
      // "/": ,
      "/data/": [
        {
          text: "开始",
          items: [
            { text: "简要", link: "/data/数据库.md" },
            { text: "typeORM", link: "/data/typeorm.md" },
          ],
        },
      ],
      ...sidebar_es,
      ...sidebar_Preprocessor,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Yang_Lee：xtcff082421@gmail.com",
    },
  },
});
