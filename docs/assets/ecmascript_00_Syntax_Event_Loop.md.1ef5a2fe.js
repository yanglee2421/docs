import{_ as s,c as l,o as a,a as n}from"./app.335117dc.js";const y=JSON.parse('{"title":"EventLoop","description":"","frontmatter":{},"headers":[{"level":2,"title":"线程、进程","slug":"线程、进程","link":"#线程、进程","children":[]},{"level":2,"title":"同步、异步","slug":"同步、异步","link":"#同步、异步","children":[]},{"level":2,"title":"执行栈、微任务栈、宏任务栈","slug":"执行栈、微任务栈、宏任务栈","link":"#执行栈、微任务栈、宏任务栈","children":[]}],"relativePath":"ecmascript/00_Syntax/Event_Loop.md","lastUpdated":null}'),e={name:"ecmascript/00_Syntax/Event_Loop.md"},o=n(`<h1 id="eventloop" tabindex="-1">EventLoop <a class="header-anchor" href="#eventloop" aria-hidden="true">#</a></h1><h2 id="线程、进程" tabindex="-1">线程、进程 <a class="header-anchor" href="#线程、进程" aria-hidden="true">#</a></h2><ul><li>进程（厂房） <ul><li>程序的运行环境</li></ul></li><li>线程（工人） <ul><li>线程是实际进行运算的东西</li></ul></li></ul><h2 id="同步、异步" tabindex="-1">同步、异步 <a class="header-anchor" href="#同步、异步" aria-hidden="true">#</a></h2><ul><li>同步 <ol><li>前一步没有结束，下一步不会开始</li></ol></li><li>异步： <ol><li>下一步不会等待前一步的结束</li><li>它会在另一个的线程中执行</li><li>只能以回调来获取返回值引发的回调地狱</li></ol></li></ul><h2 id="执行栈、微任务栈、宏任务栈" tabindex="-1">执行栈、微任务栈、宏任务栈 <a class="header-anchor" href="#执行栈、微任务栈、宏任务栈" aria-hidden="true">#</a></h2><ol><li>同步任务进执行栈</li><li>执行栈清空</li><li>微任务栈是否为空？</li><li>若非空：则从微任务栈中取出任务到执行栈</li><li>若为空：则从宏任务栈中取出任务到执行栈</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 向微任务栈中推入一个回调</span></span>
<span class="line"><span style="color:#82AAFF;">queueMicrotask</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 向宏任务栈中推入一个回调</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,8),t=[o];function i(p,r,c,d,h,u){return a(),l("div",null,t)}const A=s(e,[["render",i]]);export{y as __pageData,A as default};
