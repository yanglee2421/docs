import{_ as s,c as a,o as n,a as e}from"./app.24c4ed12.js";const y=JSON.parse('{"title":"Attribute","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"注意点","slug":"注意点","link":"#注意点","children":[]}],"relativePath":"page/Attribute.md","lastUpdated":1673417300000}'),l={name:"page/Attribute.md"},t=e(`<h1 id="attribute" tabindex="-1">Attribute <a class="header-anchor" href="#attribute" aria-hidden="true">#</a></h1><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="注意点" tabindex="-1">注意点 <a class="header-anchor" href="#注意点" aria-hidden="true">#</a></h2><ul><li>key 和 value 都是 string</li></ul>`,5),o=[t];function p(r,c,i,D,A,F){return n(),a("div",null,o)}const u=s(l,[["render",p]]);export{y as __pageData,u as default};
