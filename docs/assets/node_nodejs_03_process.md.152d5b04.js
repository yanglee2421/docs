import{_ as s,c as a,o as n,a as e}from"./app.84242b02.js";const h=JSON.parse('{"title":"process","description":"","frontmatter":{},"headers":[{"level":2,"title":"env","slug":"env","link":"#env","children":[]},{"level":2,"title":"cwd","slug":"cwd","link":"#cwd","children":[]},{"level":2,"title":"exit","slug":"exit","link":"#exit","children":[]},{"level":2,"title":"nextTick","slug":"nexttick","link":"#nexttick","children":[]}],"relativePath":"node/nodejs/03_process.md","lastUpdated":1677163073000}'),l={name:"node/nodejs/03_process.md"},p=e(`<h1 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-hidden="true">#</a></h1><h2 id="env" tabindex="-1">env <a class="header-anchor" href="#env" aria-hidden="true">#</a></h2><p>用于获取当前运行环境的环境变量</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-aGMX2" id="tab-THKS5Ug" checked="checked"><label for="tab-THKS5Ug">js</label><input type="radio" name="group-aGMX2" id="tab-0YKJeP9"><label for="tab-0YKJeP9">powershell</label></div><div class="blocks"><div class="language-js active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">Env:VAR_NAME</span><span style="color:#676E95;font-style:italic;">#查看</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">Env:VAR_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">指定内容</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;">#增/改</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">Env:VAR_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#676E95;font-style:italic;">#删</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">Env:VAR_NAME</span><span style="color:#89DDFF;">+=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">附加内容</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;">#附加</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><h2 id="cwd" tabindex="-1">cwd <a class="header-anchor" href="#cwd" aria-hidden="true">#</a></h2><p>返回当前工作目录，不同调试方式的工作目录有所不同</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cwd</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="exit" tabindex="-1">exit <a class="header-anchor" href="#exit" aria-hidden="true">#</a></h2><p>结束当前进程</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>根据模块化方式的不同，栈的执行顺序也不同</li><li>cjs 下： <ol><li>执行栈</li><li>tick 栈</li><li>微任务栈</li><li>宏任务栈</li></ol></li><li>mjs 下： <ol><li>执行栈</li><li>微任务栈</li><li>tick 栈</li><li>宏任务栈</li></ol></li></ul></div>`,13),o=[p];function t(c,i,r,d,u,y){return n(),a("div",null,o)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};
