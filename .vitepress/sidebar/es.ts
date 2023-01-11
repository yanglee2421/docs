import type { DefaultTheme } from "vitepress";
namespace Type {
  export type nav_es = DefaultTheme.Sidebar;
}
export const sidebar_es: Type.nav_es = {
  "/ECMAScript/": [
    {
      text: "Primitive Value",
      collapsible: true,
      items: [
        {
          text: "undefined",
          link: "/ECMAScript/02_primitiveValue/00_undefined.md",
        },
        {
          text: "null",
          link: "/ECMAScript/02_primitiveValue/01_null.md",
        },
        {
          text: "boolean",
          link: "/ECMAScript/02_primitiveValue/02_Boolean.md",
        },
        {
          text: "string",
          link: "/ECMAScript/02_primitiveValue/03_String.md",
        },
        {
          text: "number",
          link: "/ECMAScript/02_primitiveValue/04_Number.md",
        },
        {
          text: "bigint",
          link: "/ECMAScript/02_primitiveValue/05_BigInt.md",
        },
        {
          text: "symbol",
          link: "/ECMAScript/02_primitiveValue/06_Symbol.md",
        },
      ],
    },
    {
      text: "Objects",
      collapsible: true,
      items: [
        {
          text: "AbortContrller",
          link: "/ECMAScript/03_objects/AbortContrller.md",
        },
        { text: "Array", link: "/ECMAScript/03_objects/Array.md" },
        { text: "Blob", link: "/ECMAScript/03_objects/Blob.md" },
        { text: "Error", link: "/ECMAScript/03_objects/Error.md" },
        { text: "Function", link: "/ECMAScript/03_objects/Function.md" },
        { text: "Map", link: "/ECMAScript/03_objects/Map.md" },
        { text: "Object", link: "/ECMAScript/03_objects/Object.md" },
        { text: "Promise", link: "/ECMAScript/03_objects/Promise.md" },
        { text: "RegExp", link: "/ECMAScript/03_objects/RegExp.md" },
        { text: "Set", link: "/ECMAScript/03_objects/Set.md" },
      ],
    },
    {
      text: "ESM",
      collapsible: true,
      items: [
        { text: "AMD", link: "/ECMAScript/04_ESM/00_AMD.md" },
        { text: "CommonJS", link: "/ECMAScript/04_ESM/01_CommonJS.md" },
        { text: "ESM", link: "/ECMAScript/04_ESM/02_ESM.md" },
      ],
    },
    {
      text: "globalObject",
      collapsible: true,
      items: [
        { text: "crypto", link: "/ECMAScript/05_globalObject/crypto.md" },
        { text: "JSON", link: "/ECMAScript/05_globalObject/JSON.md" },
        { text: "Math", link: "/ECMAScript/05_globalObject/Math.md" },
      ],
    },
    {
      text: "Syntax",
      collapsible: true,
      items: [
        {
          text: "event_loop",
          link: "/ECMAScript/01_Syntax/00_Event_Loop.md",
        },
        {
          text: "operator",
          link: "/ECMAScript/01_Syntax/01_operator.md",
        },
        {
          text: "decisions",
          link: "/ECMAScript/01_Syntax/02_decisions.md",
        },
        {
          text: "loop",
          link: "/ECMAScript/01_Syntax/03_loop.md",
        },
        {
          text: "class",
          link: "/ECMAScript/01_Syntax/04_class.md",
        },
      ],
    },
  ],
};
