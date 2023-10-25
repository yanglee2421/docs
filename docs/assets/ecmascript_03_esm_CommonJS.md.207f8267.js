import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.395e6a84.js";const u=JSON.parse('{"title":"CommonJS 模块化","description":"","frontmatter":{},"headers":[],"relativePath":"ecmascript/03_esm/CommonJS.md","filePath":"ecmascript/03_esm/CommonJS.md","lastUpdated":1686325478000}'),p={name:"ecmascript/03_esm/CommonJS.md"},l=o(`<h1 id="commonjs-模块化" tabindex="-1">CommonJS 模块化 <a class="header-anchor" href="#commonjs-模块化" aria-label="Permalink to &quot;CommonJS 模块化&quot;">​</a></h1><h2 id="外部函数" tabindex="-1">外部函数 <a class="header-anchor" href="#外部函数" aria-label="Permalink to &quot;外部函数&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">__dirname</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">__filename</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;node:path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.xxxPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;./xxx&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">module</span><span style="color:#24292E;">, </span><span style="color:#E36209;">exports</span><span style="color:#24292E;">, </span><span style="color:#E36209;">require</span><span style="color:#24292E;">, </span><span style="color:#E36209;">__dirname</span><span style="color:#24292E;">, </span><span style="color:#E36209;">__filename</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;node:path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.xxxPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;./xxx&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,3),e=[l];function t(r,c,E,y,i,m){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
