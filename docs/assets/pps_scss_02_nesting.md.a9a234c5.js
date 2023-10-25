import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.395e6a84.js";const u=JSON.parse('{"title":"Nesting","description":"","frontmatter":{},"headers":[],"relativePath":"pps/scss/02_nesting.md","filePath":"pps/scss/02_nesting.md","lastUpdated":1686325478000}'),p={name:"pps/scss/02_nesting.md"},e=l(`<h1 id="nesting" tabindex="-1">Nesting <a class="header-anchor" href="#nesting" aria-label="Permalink to &quot;Nesting&quot;">​</a></h1><h2 id="实质" tabindex="-1">实质 <a class="header-anchor" href="#实质" aria-label="Permalink to &quot;实质&quot;">​</a></h2><ul><li>嵌套的实质是后代选择器的语法糖</li></ul><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下：</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下：</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="群组" tabindex="-1">群组 <a class="header-anchor" href="#群组" aria-label="Permalink to &quot;群组&quot;">​</a></h2><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 另一种情况</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#22863A;">p</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 另一种情况</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">p</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#22863A;">p</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="父代选择器" tabindex="-1">父代选择器 <a class="header-anchor" href="#父代选择器" aria-label="Permalink to &quot;父代选择器&quot;">​</a></h2><ul><li><code>&amp;</code></li></ul><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">word-break</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">break-all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下：</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#B392F0;">:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">word-break</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">break-all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">word-break</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">break-all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 结果如下：</span></span>
<span class="line"><span style="color:#22863A;">div</span><span style="color:#6F42C1;">:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">word-break</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">break-all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="关系选择器" tabindex="-1">关系选择器 <a class="header-anchor" href="#关系选择器" aria-label="Permalink to &quot;关系选择器&quot;">​</a></h2><ul><li><code>&gt;</code></li><li><code>~</code></li><li><code>+</code></li></ul><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt; </span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background-clip</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">text</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  + </span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background-attachment</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ~ </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">cover</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  &gt; </span><span style="color:#22863A;">p</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background-clip</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">text</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  + </span><span style="color:#22863A;">input</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background-attachment</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">fixed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  ~ </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">cover</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="属性嵌套" tabindex="-1">属性嵌套 <a class="header-anchor" href="#属性嵌套" aria-label="Permalink to &quot;属性嵌套&quot;">​</a></h2><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,14),o=[e];function c(r,t,E,i,y,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
