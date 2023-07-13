import{_ as s,o as a,c as n,O as l}from"./chunks/framework.c0965656.js";const D=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"toolkit/00_git.md","filePath":"toolkit/00_git.md","lastUpdated":1686392558000}'),e={name:"toolkit/00_git.md"},p=l(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><p>git是一个由祖师爷（Linux作者Linus）开发的版本控制工具。</p><p>其主要特点在于：</p><ol><li>分布式，对于服务器依赖小</li><li>离线工作</li></ol><h2 id="init" tabindex="-1">Init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;Init&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git init dirname</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone gitUrl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">global user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yanglee2421</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">global user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yanglee2421@gmail.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">global http.proxy http:</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">127.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">7890</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 仅删除工作区-不暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">rm filename</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除工作区-且暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm filename</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强制删除工作区-且暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;"> filename</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除暂存区-且暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cached filename</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="commit" tabindex="-1">Commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;Commit&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">commit msg</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="tag" tabindex="-1">Tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;Tag&quot;">​</a></h2><p>像其他版本控制系统（VCS）一样，Git 可以给仓库历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（ <code>v1.0</code> 、 <code>v2.0</code> 等等）。</p><p>git支持两种标签：</p><ol><li>lightweight tags：轻量标签是某个特定提交的引用。</li><li>annotated tags：附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。</li></ol><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出本机上的tags</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 为当前最新commit添加一个lightweight tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag tagName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 为指定commit添加一个lightweight tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag tagName commitId</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 为当前最新commit添加一个annotated tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a tagName </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag msg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 为指定commit添加一个annotated tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a tagName </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag msg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> commitId</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d tagName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 向remote推送tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push remoteName tagName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除remote上的tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push remoteName </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d tagName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>NOTE：</strong> 默认情况下，<code>git push</code> 命令并不会传送标签到远程仓库服务器上。</p><p><strong>NOTE：</strong> 通常会建议创建附注标签，这样你可以拥有较为完整的信息。</p><h2 id="log" tabindex="-1">Log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;Log&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;">git log </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">graph </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">abbrev</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">commit </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">pretty</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">oneline</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff commitId</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 以列表形式查看指定文件的历史修改记录</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame filename</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="reset" tabindex="-1">Reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;Reset&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout .</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">hard commitId</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert commitId</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="branch" tabindex="-1">Branch <a class="header-anchor" href="#branch" aria-label="Permalink to &quot;Branch&quot;">​</a></h2><p>分支分为三种：</p><ol><li>branch：branch（在本地）用来存储本地commit</li><li>remote/branch：remote/branch（在本地）用来存储从remote上拉取的commit</li><li>远程branch：远程仓库上的branch（在远程）</li></ol><p>pull流程：远程branch --&gt; remote/branch --&gt; branch</p><p>push流程：branch --&gt; remote/branch --&gt; 远程branch</p><p>fetch流程：远程branch --&gt; remote/branch</p><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vv</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dr remoteName</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">--</span><span style="color:#82AAFF;">set-upstream</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">remoteName</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">branchName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git checkout branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b branchName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="merge" tabindex="-1">Merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;Merge&quot;">​</a></h2><p>merge用于将目标分支上的commit导入到当前分支。</p><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将指定分支上的提交记录合并到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge branchName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 中断合并</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">abort</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="remote" tabindex="-1">Remote <a class="header-anchor" href="#remote" aria-label="Permalink to &quot;Remote&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add remoteName gitUrl</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote remove remoteName</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote rename prevName neoName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch remoteName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull remoteName branchName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">u remoteName branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">--</span><span style="color:#82AAFF;">set-upstream</span><span style="color:#A6ACCD;"> remoteName branchName</span></span>
<span class="line"><span style="color:#A6ACCD;">git push remoteName </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d branchName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="ssh" tabindex="-1">SSH <a class="header-anchor" href="#ssh" aria-label="Permalink to &quot;SSH&quot;">​</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 生成一个SSH密钥</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t ed25519 </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;"> filename</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh usr</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">sshUrl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,37),o=[p];function r(t,c,i,m,b,C){return a(),n("div",null,o)}const A=s(e,[["render",r]]);export{D as __pageData,A as default};