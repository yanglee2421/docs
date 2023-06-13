import{_ as s,o as n,c as a,O as l}from"./chunks/framework.c0965656.js";const D=JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"get-started.md","filePath":"get-started.md","lastUpdated":1686642621000}'),e={name:"get-started.md"},p=l(`<h1 id="get-started" tabindex="-1">Get Started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get Started&quot;">​</a></h1><p>代码整洁之道，</p><h2 id="solid-原则" tabindex="-1">SOLID 原则 <a class="header-anchor" href="#solid-原则" aria-label="Permalink to &quot;SOLID 原则&quot;">​</a></h2><p>首先不得不提一下五大原则，分别是：</p><ol><li>Single Responsibility Principle（单一职则）</li><li>OpenClosed Principle（开闭）</li><li>Liskov Substitution Principle（里氏替换）</li><li>Interface Segregation Principle（接口隔离）</li><li>Dependency Inversion Principle（依赖倒转）</li></ol><p>逐一分析它们：</p><ol><li>单一职则：一个函数只负责一件事情，复杂的逻辑拆分到多个函数中完成。</li><li>开闭：对扩展开放，对修改闭合。设计函数时，保留一定的扩展性。</li><li>里氏替换：父类可以被它的任意子类替换。</li><li>接口隔离：使用多个小接口而不是一个复杂的大接口。</li><li>依赖倒转：函数之间的依赖性不能太强。</li></ol><p><strong>NOTE：</strong> 可以不懂，但一定记住，哪天写代码写多了抽风了自然就懂了。</p><h2 id="命名" tabindex="-1">命名 <a class="header-anchor" href="#命名" aria-label="Permalink to &quot;命名&quot;">​</a></h2><p>起名是件大事，真的是件大事。</p><h3 id="文件和文件夹" tabindex="-1">文件和文件夹 <a class="header-anchor" href="#文件和文件夹" aria-label="Permalink to &quot;文件和文件夹&quot;">​</a></h3><p>格式如下：</p><ol><li>不能有大写字母。</li><li>中划线命名法，复合单词间用一个中划线分隔。</li><li>文件平优先使用单词的复数形式。</li><li>目录型文件夹的根路径下要有一个 index 文件。</li></ol><p><strong>NOTE：</strong> mac 下的 git 默认不区分大小写，使用驼峰法容易引发一些问题，这就是列出第一条的原因。</p><h3 id="css-的命名-bem-命名法" tabindex="-1">CSS 的命名（BEM 命名法） <a class="header-anchor" href="#css-的命名-bem-命名法" aria-label="Permalink to &quot;CSS 的命名（BEM 命名法）&quot;">​</a></h3><p>格式如下：</p><ol><li>块名与元素名之间用两个下划线分隔。</li><li>修饰符名与其它名称之间用两个中划线分隔。</li><li>复合单词间用一个中划线分隔。</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block--modifier__element--modifier</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="函数的命名" tabindex="-1">函数的命名 <a class="header-anchor" href="#函数的命名" aria-label="Permalink to &quot;函数的命名&quot;">​</a></h3><p>首先是在框架中使用的 hooks 函数，格式如下：</p><ol><li>use 开头。</li><li>小驼峰。</li><li>参数和返回值都是可有可无的。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Hook functions used within the framework</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">params</span><span style="color:#676E95;font-style:italic;"> optional</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> optional</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFunc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>NOTE：</strong> hooks 函数的调用条件是有要求的，React 中组件函数每次执行时，调用的 hook 的数量必须一致。Vue 中的 hooks 必须在 setup 函数中调用。</p><p>第二种，适配器型函数，格式如下：</p><ol><li>to 开头。</li><li>小驼峰。</li><li>参数和返回值都是必须的。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Used for processing data,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * returning processed data without changing the original data</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">params</span><span style="color:#676E95;font-style:italic;"> required</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> required</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toFunc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>NOTE：</strong> 适配器型函数用于对数据进行格式处理，把收集到的表单数据处理成接口要求的格式再发送。</p><p>第三种，事件函数，格式如下：</p><ol><li>handle 开头。</li><li>小驼峰。</li><li>参数是可选的，返回值则一定没有。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Used to perform some operations,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * such as dom events</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">params</span><span style="color:#676E95;font-style:italic;"> optional</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> void</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleFunc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>NOTE：</strong> 事件函数用于为页面元素绑定 handler。</p><p>第四种，网络请求函数，格式如下：</p><ol><li>全小写。</li><li>单词间使用下划线分隔。</li><li>优先使用接口 URI 的最后一段作为名称</li><li>RESTful 风格的接口添加请求网式作为前缀</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Used to send network requests,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Its prefix is consistent with the request method</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">params</span><span style="color:#676E95;font-style:italic;"> optional</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> promise</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// URI:/api/query_some</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">query_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// URI:/api/some</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">post_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">delete_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">put_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="变量的命名" tabindex="-1">变量的命名 <a class="header-anchor" href="#变量的命名" aria-label="Permalink to &quot;变量的命名&quot;">​</a></h3><ol><li>布尔类型：以 is 开头，小驼峰。</li><li>数组：单词的复数形式，或者以 Arr 结尾，小驼峰。</li><li>对象：优先选择对应类名的小驼峰形式。</li><li>集合：以 Set 结尾，小驼峰。</li><li>映射：以 Map 结尾，小驼峰。</li><li>类：大驼峰。</li><li>上下文：以 Ctx 开头，大驼峰。</li></ol><h3 id="类型的命名" tabindex="-1">类型的命名 <a class="header-anchor" href="#类型的命名" aria-label="Permalink to &quot;类型的命名&quot;">​</a></h3><ol><li>接口：优先选择实例对象的命名，大驼峰。</li><li>别名：优先选择实例对象的命名，大驼峰。</li><li>泛型：以 T 开头，T 后面的部分要能体现出这个泛型被用于什么数据且保持大驼峰（TProps、TData、TError）。</li></ol><h2 id="函数声明" tabindex="-1">函数声明 <a class="header-anchor" href="#函数声明" aria-label="Permalink to &quot;函数声明&quot;">​</a></h2><p>如何在函数的两种声明方式中，进行选择。</p><p>存在以下情况时，优先选择普通函数：</p><ol><li>函数执行时，不依赖外部被<code>var</code>、<code>let</code>、<code>const</code>声明的变量（即：变量提升的不会引发错误的情况）。</li><li>函数被<code>export default</code>导出。</li><li>在类中声明函数。</li><li>能触发对象的简写形式。</li></ol><p>存在以下情况时，优先选择箭头函数：</p><ol><li>匿名函数。</li><li>回调函数。</li><li>仅一句<code>return</code>语句。</li></ol><p><strong>NOTE：</strong> 具体使用那种方式，最终取决于是否需要<code>this</code>指针。</p>`,45),o=[p];function t(i,r,c,y,d,u){return n(),a("div",null,o)}const m=s(e,[["render",t]]);export{D as __pageData,m as default};
