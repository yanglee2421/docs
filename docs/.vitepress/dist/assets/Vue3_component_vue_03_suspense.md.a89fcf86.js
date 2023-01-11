import{_ as s,c as n,o as a,a as o}from"./app.b2603863.js";const u=JSON.parse('{"title":"Suspense","description":"","frontmatter":{},"headers":[],"relativePath":"Vue3/component/vue/03_suspense.md"}'),e={name:"Vue3/component/vue/03_suspense.md"},p=o(`<h1 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-hidden="true">#</a></h1><ul><li>异步组件的<code>setup()</code>可以被<code>asnyc</code>修饰</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineAsnycComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> comp1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineASnycComponents</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/components/test.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),l=[p];function t(c,r,D,y,F,i){return a(),n("div",null,l)}const C=s(e,[["render",t]]);export{u as __pageData,C as default};