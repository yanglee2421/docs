import { DefaultTheme } from "vitepress";
export const sidebar_Preprocessor: DefaultTheme.Sidebar = {
  "src/Preprocessor/": [
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
};
