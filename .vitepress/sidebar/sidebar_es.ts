import type { DefaultTheme } from "vitepress";
namespace Type {
  export type nav_es = DefaultTheme.Sidebar;
}
export const sidebar_es: Type.nav_es = {
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
};
