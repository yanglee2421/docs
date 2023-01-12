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
        { text: "React", link: "/framework/react/react/00_react-dom.md" },
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
    "/framework/react/": [
      {
        text: "react",
        collapsible: true,
        items: [
          {
            text: "react-dom",
            link: "/framework/react/react/00_react-dom.md",
          },
          { text: "react", link: "/framework/react/react/01_react.md" },
          { text: "hook", link: "/framework/react/react/02_hook.md" },
        ],
      },
      {
        text: "react-router",
        collapsible: true,
        items: [
          {
            text: "routes",
            link: "/framework/react/react-router/00_routes.md",
          },
          {
            text: "data router",
            link: "/framework/react/react-router/01_datarouter.md",
          },
          {
            text: "hook",
            link: "/framework/react/react-router/02_hook.md",
          },
          {
            text: "component",
            link: "/framework/react/react-router/03_component.md",
          },
        ],
      },
      {
        text: "react-redux",
        collapsible: true,
        items: [
          {
            text: "store",
            link: "/framework/react/react-redux/02_store.md",
          },
          { text: "hook", link: "/framework/react/react-redux/03_hook.md" },
        ],
      },
    ],
  };
}
function footer(): DefaultTheme.Footer {
  return {
    message: "Yang_Lee的博客",
    copyright: "联系作者：yanglee2421@outlook.com",
  };
}
