import { defineConfig, DefaultTheme } from "vitepress";
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
      pattern: "https://github.com/yanglee2421/docs/blob/master/src/:path",
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
    { text: "Preprocessor", link: "/pps/ts/01_type.md" },
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
    "/es/": [
      {
        text: "Primitive Value",
        collapsible: true,
        items: [
          {
            text: "undefined",
            link: "/es/02_primitive/00_undefined.md",
          },
          {
            text: "null",
            link: "/es/02_primitive/01_null.md",
          },
          {
            text: "boolean",
            link: "/es/02_primitive/02_Boolean.md",
          },
          {
            text: "string",
            link: "/es/02_primitive/03_String.md",
          },
          {
            text: "number",
            link: "/es/02_primitive/04_Number.md",
          },
          {
            text: "bigint",
            link: "/es/02_primitive/05_BigInt.md",
          },
          {
            text: "symbol",
            link: "/es/02_primitive/06_Symbol.md",
          },
        ],
      },
      {
        text: "Objects",
        collapsible: true,
        items: [
          {
            text: "AbortContrller",
            link: "/es/03_objects/AbortContrller.md",
          },
          { text: "Array", link: "/es/03_objects/Array.md" },
          { text: "Blob", link: "/es/03_objects/Blob.md" },
          { text: "Error", link: "/es/03_objects/Error.md" },
          { text: "Function", link: "/es/03_objects/Function.md" },
          { text: "Map", link: "/es/03_objects/Map.md" },
          { text: "Object", link: "/es/03_objects/Object.md" },
          { text: "Promise", link: "/es/03_objects/Promise.md" },
          { text: "RegExp", link: "/es/03_objects/RegExp.md" },
          { text: "Set", link: "/es/03_objects/Set.md" },
        ],
      },
      {
        text: "ESM",
        collapsible: true,
        items: [
          { text: "AMD", link: "/es/04_ESM/00_AMD.md" },
          { text: "CommonJS", link: "/es/04_ESM/01_CommonJS.md" },
          { text: "ESM", link: "/es/04_ESM/02_ESM.md" },
        ],
      },
      {
        text: "globalObject",
        collapsible: true,
        items: [
          { text: "crypto", link: "/es/05_globalObject/crypto.md" },
          { text: "JSON", link: "/es/05_globalObject/JSON.md" },
          { text: "Math", link: "/es/05_globalObject/Math.md" },
        ],
      },
      {
        text: "Syntax",
        collapsible: true,
        items: [
          {
            text: "event_loop",
            link: "/es/01_Syntax/00_Event_Loop.md",
          },
          {
            text: "operator",
            link: "/es/01_Syntax/01_operator.md",
          },
          {
            text: "decisions",
            link: "/es/01_Syntax/02_decisions.md",
          },
          {
            text: "loop",
            link: "/es/01_Syntax/03_loop.md",
          },
          {
            text: "class",
            link: "/es/01_Syntax/04_class.md",
          },
        ],
      },
    ],
    "/pps/": [
      {
        text: "TypeScript",
        collapsible: true,
        items: [
          {
            text: "类型",
            link: "/pps/ts/01_type.md",
          },
          {
            text: "接口",
            link: "/pps/ts/02_interface.md",
          },
          {
            text: "泛型",
            link: "/pps/ts/04_generic.md",
          },
          {
            text: "内置泛型",
            link: "/pps/ts/07_generic2.md",
          },
          {
            text: "类",
            link: "/pps/ts/03_class.md",
          },
          {
            text: "声明文件",
            link: "/pps/ts/06_declare.md",
          },
          {
            text: "装饰器（beta）",
            link: "/pps/ts/05_decorator.md",
          },
          {
            text: "配置文件",
            link: "/pps/ts/00_config.md",
          },
        ],
      },
      {
        text: "Scss",
        collapsible: true,
        items: [
          { text: "注释", link: "/pps/scss/00_comment.md" },
          { text: "变量", link: "/pps/scss/01_variable.md" },
          { text: "嵌套", link: "/pps/scss/02_nesting.md" },
          { text: "指令", link: "/pps/scss/03_command.md" },
          { text: "内置方法", link: "/pps/scss/04_function.md" },
        ],
      },
      {
        text: "Less",
        collapsible: true,
        items: [{ text: "xxx", link: "" }],
      },
    ],
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
