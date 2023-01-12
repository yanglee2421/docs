import { DefaultTheme } from "vitepress";
export const sidebar_Preprocessor: DefaultTheme.Sidebar = {
  "/preprocessor/": [
    {
      text: "TypeScript",
      collapsible: true,
      items: [
        {
          text: "类型",
          link: "/preprocessor/ts/01_type.md",
        },
        {
          text: "接口",
          link: "/preprocessor/ts/02_interface.md",
        },
        {
          text: "泛型",
          link: "/preprocessor/ts/04_generic.md",
        },
        {
          text: "内置泛型",
          link: "/preprocessor/ts/07_generic2.md",
        },
        {
          text: "类",
          link: "/preprocessor/ts/03_class.md",
        },
        {
          text: "声明文件",
          link: "/preprocessor/ts/06_declare.md",
        },
        {
          text: "装饰器（beta）",
          link: "/preprocessor/ts/05_decorator.md",
        },
        {
          text: "配置文件",
          link: "/preprocessor/ts/00_config.md",
        },
      ],
    },
    {
      text: "Scss",
      collapsible: true,
      items: [
        { text: "注释", link: "/preprocessor/scss/00_comment.md" },
        { text: "变量", link: "/preprocessor/scss/01_variable.md" },
        { text: "嵌套", link: "/preprocessor/scss/02_nesting.md" },
        { text: "指令", link: "/preprocessor/scss/03_command.md" },
        { text: "内置方法", link: "/preprocessor/scss/04_function.md" },
      ],
    },
    {
      text: "Less",
      collapsible: true,
      items: [{ text: "xxx", link: "" }],
    },
  ],
};
