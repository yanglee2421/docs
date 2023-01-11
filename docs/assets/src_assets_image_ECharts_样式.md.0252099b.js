import{_ as s,c as a,o as n,a as l}from"./app.919704f2.js";const A=JSON.parse('{"title":"ECharts 中的样式简介","description":"","frontmatter":{},"headers":[{"level":2,"title":"颜色主题","slug":"颜色主题","link":"#颜色主题","children":[]}],"relativePath":"src/assets/image/ECharts/样式.md","lastUpdated":1673417300000}'),o={name:"src/assets/image/ECharts/样式.md"},p=l(`<h1 id="echarts-中的样式简介" tabindex="-1">ECharts 中的样式简介 <a class="header-anchor" href="#echarts-中的样式简介" aria-hidden="true">#</a></h1><h2 id="颜色主题" tabindex="-1">颜色主题 <a class="header-anchor" href="#颜色主题" aria-hidden="true">#</a></h2><ul><li>内置主题</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> chart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(dom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>手动编辑（JSON 格式）</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * vite中可以直接引入json</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 引入后自动转化为js对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> themeJSON </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./themeJSON.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerTheme</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vintage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(themeJSON))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> chart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(dom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vintage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>手动编辑（UMD 模块化的 JS 格式）</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> chart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> echarts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vintage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,8),t=[p];function e(c,r,D,i,y,F){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{A as __pageData,d as default};
