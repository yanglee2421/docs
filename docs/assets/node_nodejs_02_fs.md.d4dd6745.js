import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.395e6a84.js";const d=JSON.parse('{"title":"fs","description":"","frontmatter":{},"headers":[],"relativePath":"node/nodejs/02_fs.md","filePath":"node/nodejs/02_fs.md","lastUpdated":1686325478000}'),p={name:"node/nodejs/02_fs.md"},o=l(`<h1 id="fs" tabindex="-1">fs <a class="header-anchor" href="#fs" aria-label="Permalink to &quot;fs&quot;">​</a></h1><p><a href="https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#file-system-flags" target="_blank" rel="noreferrer">flags 详情</a></p><h2 id="简单文件" tabindex="-1">简单文件 <a class="header-anchor" href="#简单文件" aria-label="Permalink to &quot;简单文件&quot;">​</a></h2><ul><li>写</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(path, data, options).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件路径</span></span>
<span class="line"><span style="color:#6A737D;"> * data：要写入的数据</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encoding：编码方式（默认：utf8）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode：文件操作权限（默认：0o666）</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o111：是否可执行</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o222：是否可写</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o444：是否可读</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flag：写入方式对象（默认值：&quot;w&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *   --&quot;w&quot;：覆写</span></span>
<span class="line"><span style="color:#6A737D;"> *   --&quot;a&quot;：追写</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFile</span><span style="color:#24292E;">(path, data, options).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件路径</span></span>
<span class="line"><span style="color:#6A737D;"> * data：要写入的数据</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encoding：编码方式（默认：utf8）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode：文件操作权限（默认：0o666）</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o111：是否可执行</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o222：是否可写</span></span>
<span class="line"><span style="color:#6A737D;"> *   --0o444：是否可读</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flag：写入方式对象（默认值：&quot;w&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *   --&quot;w&quot;：覆写</span></span>
<span class="line"><span style="color:#6A737D;"> *   --&quot;a&quot;：追写</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>读</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(path, options)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {});</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件路径</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *  -err：错误信息</span></span>
<span class="line"><span style="color:#6A737D;"> *  -data：文件内容（默认类型是一个Buffer）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFile</span><span style="color:#24292E;">(path, options)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {})</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {});</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件路径</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *  -err：错误信息</span></span>
<span class="line"><span style="color:#6A737D;"> *  -data：文件内容（默认类型是一个Buffer）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="流式文件" tabindex="-1">流式文件 <a class="header-anchor" href="#流式文件" aria-label="Permalink to &quot;流式文件&quot;">​</a></h2><ul><li>写</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createWriteStream</span><span style="color:#E1E4E8;">(path[, options]);</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;流打开了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;流关闭了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;文件内容&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件的路径</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flags：见下方详情（默认值：&quot;w&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encoding：编码方式（默认值：&quot;utf8&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -fd：文件统一标识符（仅Linux支持）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode：同上</span></span>
<span class="line"><span style="color:#6A737D;"> *  -autoClose：自动关闭文件（默认值：true）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -emitClose：强制关闭文件（默认值：false）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -start：写入文件的起始位置（number类型）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createWriteStream</span><span style="color:#24292E;">(path[, options]);</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;流打开了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;流关闭了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;文件内容&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：文件的路径</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flags：见下方详情（默认值：&quot;w&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encoding：编码方式（默认值：&quot;utf8&quot;）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -fd：文件统一标识符（仅Linux支持）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode：同上</span></span>
<span class="line"><span style="color:#6A737D;"> *  -autoClose：自动关闭文件（默认值：true）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -emitClose：强制关闭文件（默认值：false）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -start：写入文件的起始位置（number类型）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>读</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(path, options, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;读取流开启了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">65536</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;读取流关闭了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：同上</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flags</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encodeing</span></span>
<span class="line"><span style="color:#6A737D;"> *  -fd</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode</span></span>
<span class="line"><span style="color:#6A737D;"> *  -autoClose</span></span>
<span class="line"><span style="color:#6A737D;"> *  -emitClose</span></span>
<span class="line"><span style="color:#6A737D;"> *  -start</span></span>
<span class="line"><span style="color:#6A737D;"> *  -end</span></span>
<span class="line"><span style="color:#6A737D;"> *  -highWaterMark：每次读取数据的大小（默认：64 * 1024）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(path, options, callback);</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;读取流开启了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;读取流关闭了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * path：同上</span></span>
<span class="line"><span style="color:#6A737D;"> * options：配置对象（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> *  -flags</span></span>
<span class="line"><span style="color:#6A737D;"> *  -encodeing</span></span>
<span class="line"><span style="color:#6A737D;"> *  -fd</span></span>
<span class="line"><span style="color:#6A737D;"> *  -mode</span></span>
<span class="line"><span style="color:#6A737D;"> *  -autoClose</span></span>
<span class="line"><span style="color:#6A737D;"> *  -emitClose</span></span>
<span class="line"><span style="color:#6A737D;"> *  -start</span></span>
<span class="line"><span style="color:#6A737D;"> *  -end</span></span>
<span class="line"><span style="color:#6A737D;"> *  -highWaterMark：每次读取数据的大小（默认：64 * 1024）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,12),e=[o];function c(t,r,i,y,E,u){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
