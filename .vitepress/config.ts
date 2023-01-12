import { defineConfig, DefaultTheme } from "vitepress";
import { sidebar_es, sidebar_Preprocessor } from "./sidebar";
export default defineConfig({
  // 打包
  base: "/docs/",
  outDir: "docs",
  srcDir: "src",
  // html
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [["link", { rel: "shortcut icon", href: "/docs/vite.svg" }]],
  // 页面
  lastUpdated: true,
  // markdown
  markdown: { lineNumbers: true },
  themeConfig: {
    logo: "/vite.svg",
    siteTitle: "Yang_Lee",
    editLink: {
      pattern: "https://github.com/yanglee2421/docs/blob/master/:path",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Swz0321" }],
    nav: nav(),
    sidebar: sidebar(),
    footer: footer(),
  },
});
// 右上角导航
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "ECMAScript", link: "/es/index.md" },
    { text: "Preprocessor", link: "/preprocessor/ts/01_type.md" },
    {
      text: "Framework",
      items: [
        { text: "React", link: "/es/index.md" },
        { text: "Vue", link: "/es/index.md" },
      ],
    },

    {
      text: "Node",
      items: [
        { text: "express", link: "/item-3" },
        { text: "nestjs", link: "/item-3" },
        { text: "threejs", link: "/item-3" },
      ],
    },
    { text: "HTML & CSS", link: "" },
  ];
}
// 左边栏
function sidebar(): DefaultTheme.Sidebar {
  return {
    ...sidebar_es,
    ...sidebar_Preprocessor,
  };
}
function footer(): DefaultTheme.Footer {
  return {
    message: "Yang_Lee的博客",
    copyright: "联系作者：yanglee2421@outlook.com",
  };
}
