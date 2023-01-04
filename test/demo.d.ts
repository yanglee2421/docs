// ECMAScript中的声明方式
declare var varVar: boolean;
declare let varLet: string;
declare const varConst: number;
declare function funFun(params: any): void;
declare class classDec {
  prop: null;
  constructor(params: boolean);
  fun(params: number): void;
}
declare module "mod" {
  const a: string;
  export default a;
}
// TS中的声明方式
declare namespace globalObj {
  var varVar: boolean;
  let varLet: string;
  const varConst: number;
  function funFun(params: any): void;
  class classDec {
    prop: null;
    constructor(params: boolean);
    fun(params: number): void;
  }
}
interface globalInter {
  prop: number;
  fun(): void;
}
type globalType = any;
// 为import.meta声明类型
interface ImportMeta {
  prop: boolean;
  fun(): void;
}
// 为已有的变量补充类型
interface Window {
  fun(): void;
}
