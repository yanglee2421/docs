import{_ as s,o as n,c as a,O as l}from"./chunks/framework.c0965656.js";const m=JSON.parse('{"title":"yarn","description":"","frontmatter":{},"headers":[],"relativePath":"toolkit/03_yarn.md","filePath":"toolkit/03_yarn.md","lastUpdated":1686325478000}'),e={name:"toolkit/03_yarn.md"},p=l(`<h1 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h1><p>yarn是一个由Meta（原Facebook）开发的npm包管理工具（package manager）。yarn使用的依赖关系算法相比npm有一定优势，其主要体现在安装依赖的速度更快。但必须承认的是，随着npm版本的不断迭代，两者的差距越来越小了。</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启用corepack中的yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">corepack enable</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以根据需要切换yarn的版本</span></span>
<span class="line"><span style="color:#A6ACCD;">corepack prepare yarn</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">stable </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">activate</span></span>
<span class="line"><span style="color:#A6ACCD;">corepack prepare yarn</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">1 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">activate</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 也可以使用npm全局安装yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g yarn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>NOTE：</strong> 使用 corepack 启用 yarn 需要在以管理员权限启动 powershell</p><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置/恢复npm镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config set registry https:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config delete registry</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置http/https代理</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config set proxy http:</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">127.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">7890</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config delete proxy</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config set https</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">proxy https:</span><span style="color:#89DDFF;">//</span><span style="color:#82AAFF;">xxx.com</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config delete https</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">proxy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有配置</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="init" tabindex="-1">Init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;Init&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 初始化npm包</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn init</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 以默认配置初始化npm包</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn init </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装所有依赖，并生成.lock文件</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加开发依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移除依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn remove</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 升级依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn list package </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="global" tabindex="-1">Global <a class="header-anchor" href="#global" aria-label="Permalink to &quot;Global&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 返回全局依赖的bin目录</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global bin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 返回yarn的根路径</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global root</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加全局依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global add</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移除全局依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global remove</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出全局依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global list </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>NOTE：</strong> 不配置 bin 路径，yarn 全局安装的包无法使用</p><h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;Run&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用yarn执行package.json中的script</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn dev</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn build</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn run dev</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn run build</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用yarn执行当前项目中的cli命令（tsx为例）</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn tsx xxx.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用yarn执行js</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn node xxx.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="v3" tabindex="-1">V3 <a class="header-anchor" href="#v3" aria-label="Permalink to &quot;V3&quot;">​</a></h2><p>yarn的v3版本太过于超前了（完全放弃了node_modules），目前并不推荐使用。</p><p>相比于yarn@1，yarn@3的主要区别在于：</p><ol><li>下载的依赖以压缩包形式存在，因此体积比原来的node_modules小得多。</li><li>开始支持dlx命令（类似npx），可以直接执行npm上的bin命令。</li><li>执行项目中的js脚本必须使用yarn node，因为npm无法读取压缩包形式的依赖。</li><li>TypeScript支持较差。</li></ol><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用yarn3来初始化一个项目</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn init </span><span style="color:#F78C6C;">-2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># typescript无法识别yarn3依赖类型的问题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1. VScode安装ZipFS插件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 执行以下命令</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn dlx </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">yarnpkg</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sdks vscode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,21),r=[p];function o(t,i,c,y,b,d){return n(),a("div",null,r)}const C=s(e,[["render",o]]);export{m as __pageData,C as default};