import { defineConfig, DefaultTheme } from "vitepress";
export default defineConfig({
  // Build
  base: "/docs/",
  outDir: "docs",
  srcDir: "src",

  // HTML Document
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [
    ["link", { rel: "shortcut icon", href: "/docs/react.svg" }],
    ["meta", { name: "theme-color", content: "rgb(16, 185, 129)" }],
    ["meta", { rel: "description", content: "Yang_Lee的JS开发者文档" }],
  ],

  // Markdown
  markdown: { lineNumbers: true },

  // Viteperss theme
  themeConfig: {
    logo: "/react.svg",
    siteTitle: "Yang_Lee",
    editLink: {
      pattern: "https://github.com/yanglee2421/docs/blob/master/:path",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/yanglee2421" }],
    nav: nav(),
    sidebar: sidebar(),
    footer: footer(),
  },

  // Whether show last update time
  lastUpdated: true,
});

// Header menu
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "ECMAScript", link: "/ecmascript/index.md" },
    { text: "React", link: "/react/react-hook-form.md" },
    { text: "Preprocessor", link: "/pps/ts/type.md" },
    { text: "Toolkit", link: "/toolkit/00_git.md" },
    { text: "Node", link: "/node/nodejs/01_path.md" },
  ];
}

// Aside bar
function sidebar(): DefaultTheme.Sidebar {
  return {
    "/ecmascript/": [
      {
        text: "Primitive Value",
        collapsed: false,
        items: [
          {
            text: "undefined",
            link: "/ecmascript/01_primitive/00_undefined.md",
          },
          {
            text: "null",
            link: "/ecmascript/01_primitive/01_null.md",
          },
          {
            text: "boolean",
            link: "/ecmascript/01_primitive/02_Boolean.md",
          },
          {
            text: "string",
            link: "/ecmascript/01_primitive/03_String.md",
          },
          {
            text: "number",
            link: "/ecmascript/01_primitive/04_Number.md",
          },
          {
            text: "bigint",
            link: "/ecmascript/01_primitive/05_BigInt.md",
          },
          {
            text: "symbol",
            link: "/ecmascript/01_primitive/06_Symbol.md",
          },
        ],
      },
      {
        text: "Objects",
        collapsed: false,
        items: [
          {
            text: "AbortContrller",
            link: "/ecmascript/02_objects/AbortContrller.md",
          },
          {
            text: "Array",
            link: "/ecmascript/02_objects/Array.md",
          },
          {
            text: "Blob",
            link: "/ecmascript/02_objects/Blob.md",
          },
          {
            text: "Error",
            link: "/ecmascript/02_objects/Error.md",
          },
          {
            text: "Function",
            link: "/ecmascript/02_objects/Function.md",
          },
          { text: "Map", link: "/ecmascript/02_objects/Map.md" },
          {
            text: "Object",
            link: "/ecmascript/02_objects/Object.md",
          },
          {
            text: "Promise",
            link: "/ecmascript/02_objects/Promise.md",
          },
          {
            text: "RegExp",
            link: "/ecmascript/02_objects/RegExp.md",
          },
          { text: "Set", link: "/ecmascript/02_objects/Set.md" },
        ],
      },
      {
        text: "ESM",
        collapsed: false,
        items: [
          { text: "AMD", link: "/ecmascript/03_esm/AMD.md" },
          { text: "CommonJS", link: "/ecmascript/03_esm/CommonJS.md" },
          { text: "ESM", link: "/ecmascript/03_esm/ESM.md" },
        ],
      },
      {
        text: "Global Object",
        collapsed: false,
        items: [
          { text: "crypto", link: "/ecmascript/04_global/crypto.md" },
          { text: "JSON", link: "/ecmascript/04_global/JSON.md" },
          { text: "Math", link: "/ecmascript/04_global/Math.md" },
        ],
      },
      {
        text: "Syntax",
        collapsed: false,
        items: [
          {
            text: "class",
            link: "/ecmascript/00_Syntax/class.md",
          },
          {
            text: "decisions",
            link: "/ecmascript/00_Syntax/decisions.md",
          },
          {
            text: "event_loop",
            link: "/ecmascript/00_Syntax/Event_Loop.md",
          },
          {
            text: "loop",
            link: "/ecmascript/00_Syntax/loop.md",
          },
          {
            text: "operator",
            link: "/ecmascript/00_Syntax/operator.md",
          },
        ],
      },
    ],
    "/react": [
      { text: "Material UI", link: "/react/material-ui.md" },
      { text: "NextJs", link: "/react/NextJs.md" },
      { text: "react-hook-form", link: "/react/react-hook-form.md" },
    ],
    "/pps/": [
      {
        text: "TypeScript",
        collapsed: false,
        items: [
          {
            text: "类型",
            link: "/pps/ts/type.md",
          },
          {
            text: "接口",
            link: "/pps/ts/interface.md",
          },
          {
            text: "泛型",
            link: "/pps/ts/generic.md",
          },
          {
            text: "内置工具",
            link: "/pps/ts/built-in-generic.md",
          },
          {
            text: "类",
            link: "/pps/ts/class.md",
          },
          {
            text: "声明文件",
            link: "/pps/ts/declare.md",
          },
          {
            text: "装饰器（beta）",
            link: "/pps/ts/decorator.md",
          },
          {
            text: "配置文件",
            link: "/pps/ts/config.md",
          },
        ],
      },
      {
        text: "Scss",
        collapsed: false,
        items: [
          { text: "注释", link: "/pps/scss/00_comment.md" },
          { text: "变量", link: "/pps/scss/01_variable.md" },
          { text: "嵌套", link: "/pps/scss/02_nesting.md" },
          { text: "指令", link: "/pps/scss/03_command.md" },
          { text: "内置方法", link: "/pps/scss/04_function.md" },
        ],
      },
    ],
    "/node/": [
      {
        text: "nodejs",
        items: [
          { text: "path", link: "/node/nodejs/01_path.md" },
          { text: "fs", link: "/node/nodejs/02_fs.md" },
          { text: "process", link: "/node/nodejs/03_process.md" },
        ],
      },
      {
        text: "express",
        items: [
          { text: "express", link: "/node/express/01_express.md" },
          { text: "typeorm", link: "/node/express/03_typeorm.md" },
        ],
      },
    ],
    "/toolkit/": [
      {
        text: "通用",
        collapsed: false,
        items: [
          { text: "git", link: "/toolkit/00_git.md" },
          { text: "markdown", link: "/toolkit/01_markdown.md" },
          { text: "docker", link: "/toolkit/06_docker.md" },
        ],
      },
      {
        text: "包管理工具",
        items: [
          { text: "npm", link: "/toolkit/02_npm.md" },
          { text: "yarn", link: "/toolkit/03_yarn.md" },
        ],
      },
      {
        text: "构建工具",
        items: [{ text: "webpack", link: "/toolkit/05_webpack.md" }],
      },
    ],
  };
}

// 底栏
function footer(): DefaultTheme.Footer {
  return {
    message: "Coded by Yang_Lee",
    copyright: "联系作者：yanglee2421@outlook.com",
  };
}
