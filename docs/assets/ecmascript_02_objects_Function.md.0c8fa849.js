import{_ as i,c as l,o as e,a}from"./app.335117dc.js";const f=JSON.parse('{"title":"Function","description":"","frontmatter":{},"headers":[{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":2,"title":"call","slug":"call","link":"#call","children":[]},{"level":2,"title":"apply","slug":"apply","link":"#apply","children":[]},{"level":2,"title":"arguments","slug":"arguments","link":"#arguments","children":[]},{"level":2,"title":"Arrow Function","slug":"arrow-function","link":"#arrow-function","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}],"relativePath":"ecmascript/02_objects/Function.md","lastUpdated":1675006511000}'),n={name:"ecmascript/02_objects/Function.md"},t=a('<h1 id="function" tabindex="-1">Function <a class="header-anchor" href="#function" aria-hidden="true">#</a></h1><h2 id="bind" tabindex="-1">bind <a class="header-anchor" href="#bind" aria-hidden="true">#</a></h2><ul><li>返回值：改变 this 指向后的 this</li><li>一参：你所指定的 this</li><li>其余参数作为实参传给返回的函数</li></ul><h2 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-hidden="true">#</a></h2><ul><li>一参：返回的函数</li><li>其余参数作为实参传给返回的函数</li></ul><h2 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-hidden="true">#</a></h2><ul><li>二参要写成一个数组</li><li>其余与 call 相同</li></ul><h2 id="arguments" tabindex="-1">arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><ul><li>存放函数实参的类数组</li><li>callee 属性指向函数本身</li></ul><h2 id="arrow-function" tabindex="-1">Arrow Function <a class="header-anchor" href="#arrow-function" aria-hidden="true">#</a></h2><ul><li>静态 this：this 永远指向创建它的作用域里的 this</li><li>没有 arguments：使用 restProps 替代 arguments</li><li>适合作为回调或匿名函数</li></ul><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-hidden="true">#</a></h2><ul><li>在类里？Function</li><li>非匿名函数？Function（尤其是在同一文件中被调用）</li><li>对象的属性？，return 前需要执行语句？Function</li><li>回调？Arrow Function</li><li>匿名函数？Arrow Function</li><li>对象属性？仅一句 return</li></ul>',13),r=[t];function c(s,d,h,o,u,_){return e(),l("div",null,r)}const m=i(n,[["render",c]]);export{f as __pageData,m as default};
