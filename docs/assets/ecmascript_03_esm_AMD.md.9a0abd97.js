import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.395e6a84.js";const m=JSON.parse('{"title":"AMD 模块化","description":"","frontmatter":{},"headers":[],"relativePath":"ecmascript/03_esm/AMD.md","filePath":"ecmascript/03_esm/AMD.md","lastUpdated":1686325478000}'),p={name:"ecmascript/03_esm/AMD.md"},l=e(`<h1 id="amd-模块化" tabindex="-1">AMD 模块化 <a class="header-anchor" href="#amd-模块化" aria-label="Permalink to &quot;AMD 模块化&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;axios&quot;</span><span style="color:#E1E4E8;">], (</span><span style="color:#FFAB70;">axios</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;axios&quot;</span><span style="color:#24292E;">], (</span><span style="color:#E36209;">axios</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),o=[l];function t(c,r,i,d,E,y){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{m as __pageData,u as default};
