import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.395e6a84.js";const b=JSON.parse('{"title":"Boolean","description":"","frontmatter":{},"headers":[],"relativePath":"ecmascript/01_primitive/02_Boolean.md","filePath":"ecmascript/01_primitive/02_Boolean.md","lastUpdated":1686325478000}'),o={name:"ecmascript/01_primitive/02_Boolean.md"},p=l(`<h1 id="boolean" tabindex="-1">Boolean <a class="header-anchor" href="#boolean" aria-label="Permalink to &quot;Boolean&quot;">​</a></h1><h2 id="falsy-truthy" tabindex="-1">falsy &amp; truthy <a class="header-anchor" href="#falsy-truthy" aria-label="Permalink to &quot;falsy &amp; truthy&quot;">​</a></h2><ul><li>JS 中有八个值，在进行布尔运算时视为 false</li><li>除以下八个值外，其余值均为 thruthy</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">NaN</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">NaN</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="函数本身" tabindex="-1">函数本身 <a class="header-anchor" href="#函数本身" aria-label="Permalink to &quot;函数本身&quot;">​</a></h2><ul><li>用来作类型转换</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;用来生成布尔的值&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">boolean </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#E1E4E8;">boolean </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;用来生成布尔的值&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">boolean </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#24292E;">boolean </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="构造器" tabindex="-1">构造器 <a class="header-anchor" href="#构造器" aria-label="Permalink to &quot;构造器&quot;">​</a></h2><ul><li>返回一个 boolean 的包装对象</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;用来生成布尔的值&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">boolean </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#E1E4E8;">boolean </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;用来生成布尔的值&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">boolean </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#24292E;">boolean </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ol><li>原始值不是<code>new</code>出来的</li><li>包装对象不完全等于原始值</li></ol></div>`,11),e=[p];function t(r,c,i,y,E,u){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{b as __pageData,h as default};