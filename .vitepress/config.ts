import { DefaultTheme, defineConfig } from "vitepress";
export default defineConfig({
  // Build
  base: "/docs/",
  outDir: "docs",
  srcDir: "src",

  // HTML Document
  lang: "zh-CN",
  title: "Yang_Lee",
  head: [
    ["link", { rel: "shortcut icon", href: "/docs/symbol-inverted.svg" }],
    ["meta", { name: "theme-color", content: "#6366f1" }],
    ["meta", { rel: "description", content: "Yang_Lee的JS开发者文档" }],
  ],

  // Markdown
  markdown: { lineNumbers: true },

  // Viteperss theme
  themeConfig: {
    logo: "/symbol-inverted.svg",
    siteTitle: "DOCS.IO",
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
    { text: "Toolkit", link: "/toolkit/00_git.md" },
    { text: "Environment", link: "/env/react-native.md" },
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
    "/toolkit/": [
      {
        text: "Command Line Interface",
        items: [
          { text: "git", link: "/toolkit/00_git.md" },
          { text: "npm", link: "/toolkit/02_npm.md" },
          { text: "yarn", link: "/toolkit/03_yarn.md" },
          { text: "pnpm", link: "/toolkit/pnpm.md" },
          { text: "docker", link: "/toolkit/06_docker.md" },
        ],
      },
      {
        text: "Others",
        collapsed: false,
        items: [
          { text: "markdown", link: "/toolkit/01_markdown.md" },
          { text: "linux", link: "/toolkit/07_linux.md" },
        ],
      },
    ],
    "/env/": [
      {
        text: "Environment",
        items: [
          { text: "React Native", link: "/env/react-native.md" },
          { text: "Electron", link: "/env/electron.md" },
        ],
      },
    ],
  };
}

// 底栏
function footer(): DefaultTheme.Footer {
  const FullYear = new Date().getFullYear();

  return {
    message: "Coded by Yang_Lee",
    copyright: "&copy;" + FullYear + " by Lee",
  };
}
