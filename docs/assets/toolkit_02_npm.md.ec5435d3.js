import{_ as s,o as a,c as n,O as e}from"./chunks/framework.c0965656.js";const b=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"toolkit/02_npm.md","filePath":"toolkit/02_npm.md","lastUpdated":1682951776000}'),l={name:"toolkit/02_npm.md"},p=e(`<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><p><a href="https://registry.npmjs.org" target="_blank" rel="noreferrer">npm</a></p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm config set registry https:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config delete registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm init</span></span>
<span class="line"><span style="color:#A6ACCD;">npm init </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装-卸载" tabindex="-1">安装/卸载 <a class="header-anchor" href="#安装-卸载" aria-label="Permalink to &quot;安装/卸载&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"><span style="color:#A6ACCD;">npm un</span></span>
<span class="line"><span style="color:#A6ACCD;">npm uninstall </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#Login in npm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#Publish your package</span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">access public</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="查看包版本" tabindex="-1">查看包版本 <a class="header-anchor" href="#查看包版本" aria-label="Permalink to &quot;查看包版本&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm view package versions</span></span>
<span class="line"><span style="color:#A6ACCD;">npm list </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">npm list </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="清空缓存" tabindex="-1">清空缓存 <a class="header-anchor" href="#清空缓存" aria-label="Permalink to &quot;清空缓存&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm cache </span><span style="color:#89DDFF;font-style:italic;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),r=[p];function o(t,i,c,d,m,h){return a(),n("div",null,r)}const C=s(l,[["render",o]]);export{b as __pageData,C as default};
