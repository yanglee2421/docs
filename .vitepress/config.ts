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
});

// 右上角导航
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "ECMAScript", link: "/ecmascript/index.md" },
    { text: "Preprocessor", link: "/pps/ts/type.md" },
    { text: "React", link: "/react/react/00_react-dom.md" },
    { text: "Toolkit", link: "/toolkit/00_git.md" },
    { text: "Node", link: "/node/nodejs/01_path.md" },
    { text: "CSS", link: "" },
    /*   {
      text: "Framework",
      items: [
        // { text: "Vue", link: "/es/index.md" },
        { text: "threejs", link: "/threejs/index.md" },
      ],
    }, */
  ];
}

// 左边栏
function sidebar(): DefaultTheme.Sidebar {
  return {
    "/ecmascript/": [
      {
        text: "Primitive Value",
        collapsible: true,
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
        collapsible: true,
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
        collapsible: true,
        items: [
          { text: "AMD", link: "/ecmascript/03_esm/AMD.md" },
          { text: "CommonJS", link: "/ecmascript/03_esm/CommonJS.md" },
          { text: "ESM", link: "/ecmascript/03_esm/ESM.md" },
        ],
      },
      {
        text: "Global Object",
        collapsible: true,
        items: [
          { text: "crypto", link: "/ecmascript/04_global/crypto.md" },
          { text: "JSON", link: "/ecmascript/04_global/JSON.md" },
          { text: "Math", link: "/ecmascript/04_global/Math.md" },
        ],
      },
      {
        text: "Syntax",
        collapsible: true,
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
    "/pps/": [
      {
        text: "TypeScript",
        collapsible: true,
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
            text: "内置泛型",
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
    "/react/": [
      {
        text: "react",
        collapsible: true,
        items: [
          {
            text: "react-dom",
            link: "/react/react/00_react-dom.md",
          },
          { text: "react", link: "/react/react/01_react.md" },
          { text: "hook", link: "/react/react/02_hook.md" },
        ],
      },
      {
        text: "react-router",
        collapsible: true,
        items: [
          {
            text: "routes",
            link: "/react/react-router/00_routes.md",
          },
          {
            text: "data router",
            link: "/react/react-router/01_datarouter.md",
          },
          {
            text: "hook",
            link: "/react/react-router/02_hook.md",
          },
          {
            text: "component",
            link: "/react/react-router/03_component.md",
          },
        ],
      },
      {
        text: "react-redux",
        collapsible: true,
        items: [
          {
            text: "store",
            link: "/react/react-redux/02_store.md",
          },
          { text: "hook", link: "/react/react-redux/03_hook.md" },
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
          {
            text: "jsonwebtoken",
            link: "/node/express/02_jsonwebtoken.md",
          },
          { text: "typeorm", link: "/node/express/03_typeorm.md" },
          {
            text: "node-windows",
            link: "/node/express/04_node-windows.md",
          },
        ],
      },
    ],
    "/toolkit/": [
      {
        text: "通用",
        collapsible: true,
        items: [
          { text: "git", link: "/toolkit/00_git.md" },
          { text: "markdown", link: "/toolkit/01_markdown.md" },
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
        items: [
          { text: "vite", link: "/toolkit/04_vite.md" },
          { text: "webpack", link: "/toolkit/05_webpack.md" },
        ],
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
