import type { DefaultTheme } from "vitepress";
namespace Type {
  export type nav_es = DefaultTheme.Sidebar;
}
export const sidebar_es: Type.nav_es = {
  "/src/ECMAScript/": [
    {
      text: "Primitive Value",
      collapsible: true,
      items: [
        {
          text: "undefined",
          link: "/src/ECMAScript/02_primitiveValue/00_undefined.md",
        },
        {
          text: "null",
          link: "/src/ECMAScript/02_primitiveValue/01_null.md",
        },
        {
          text: "boolean",
          link: "/src/ECMAScript/02_primitiveValue/02_Boolean.md",
        },
        {
          text: "string",
          link: "/src/ECMAScript/02_primitiveValue/03_String.md",
        },
        {
          text: "number",
          link: "/src/ECMAScript/02_primitiveValue/04_Number.md",
        },
        {
          text: "bigint",
          link: "/src/ECMAScript/02_primitiveValue/05_BigInt.md",
        },
        {
          text: "symbol",
          link: "/src/ECMAScript/02_primitiveValue/06_Symbol.md",
        },
      ],
    },
    {
      text: "Objects",
      collapsible: true,
      items: [
        {
          text: "AbortContrller",
          link: "/src/ECMAScript/03_objects/AbortContrller.md",
        },
        { text: "Array", link: "/src/ECMAScript/03_objects/Array.md" },
        { text: "Blob", link: "/src/ECMAScript/03_objects/Blob.md" },
        { text: "Error", link: "/src/ECMAScript/03_objects/Error.md" },
        { text: "Function", link: "/src/ECMAScript/03_objects/Function.md" },
        { text: "Map", link: "/src/ECMAScript/03_objects/Map.md" },
        { text: "Object", link: "/src/ECMAScript/03_objects/Object.md" },
        { text: "Promise", link: "/src/ECMAScript/03_objects/Promise.md" },
        { text: "RegExp", link: "/src/ECMAScript/03_objects/RegExp.md" },
        { text: "Set", link: "/src/ECMAScript/03_objects/Set.md" },
      ],
    },
    {
      text: "ESM",
      collapsible: true,
      items: [
        { text: "AMD", link: "/src/ECMAScript/04_ESM/00_AMD.md" },
        { text: "CommonJS", link: "/src/ECMAScript/04_ESM/01_CommonJS.md" },
        { text: "ESM", link: "/src/ECMAScript/04_ESM/02_ESM.md" },
      ],
    },
    {
      text: "globalObject",
      collapsible: true,
      items: [
        { text: "crypto", link: "/src/ECMAScript/05_globalObject/crypto.md" },
        { text: "JSON", link: "/src/ECMAScript/05_globalObject/JSON.md" },
        { text: "Math", link: "/src/ECMAScript/05_globalObject/Math.md" },
      ],
    },
    {
      text: "Syntax",
      collapsible: true,
      items: [
        {
          text: "event_loop",
          link: "/src/ECMAScript/01_Syntax/00_Event_Loop.md",
        },
        {
          text: "operator",
          link: "/src/ECMAScript/01_Syntax/01_operator.md",
        },
        {
          text: "decisions",
          link: "/src/ECMAScript/01_Syntax/02_decisions.md",
        },
        {
          text: "loop",
          link: "/src/ECMAScript/01_Syntax/03_loop.md",
        },
        {
          text: "class",
          link: "/src/ECMAScript/01_Syntax/04_class.md",
        },
      ],
    },
  ],
};
