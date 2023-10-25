import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.395e6a84.js";const b=JSON.parse('{"title":"tsconfig.json","description":"","frontmatter":{},"headers":[],"relativePath":"pps/ts/config.md","filePath":"pps/ts/config.md","lastUpdated":1686325478000}'),p={name:"pps/ts/config.md"},o=l(`<h1 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h1><h2 id="compileroptions" tabindex="-1">compilerOptions <a class="header-anchor" href="#compileroptions" aria-label="Permalink to &quot;compilerOptions&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//目标JS的ES版本</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ES3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//目标JS的模块化方案</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;es2015&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//指定项目中要使用的库，使用到的会有语法提示，反之没有</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lib&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;dom&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;esnext&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//指定编译后的文件所在的目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;outdir&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    将所有代码合并为一个文件并输出</span></span>
<span class="line"><span style="color:#6A737D;">    此时module要配置为system或amd</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;outFile&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/app.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//是否编译JS</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;allowJs&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//是否检查对JS进行类型检查</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;checkJs&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//是否移除注释</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;removeComments&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//是否不生成编译后的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;noEmit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//当有错误发生时，是否不生成编译后的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;noEmitOnError&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    编译后的文件是否使用严格模式</span></span>
<span class="line"><span style="color:#6A737D;">    JS使用模块化后自动开启严格模式</span></span>
<span class="line"><span style="color:#6A737D;">    JS手动开启严格模式，&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;alwaysStrict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//不允许隐式的any类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;noImplicitAny&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//不允许隐式的类型不明确的this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;noImplicitThis&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//检查变量是否有可能为null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;strictNullChecks&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//严格检查的总开关</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;strict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//目标JS的ES版本</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;target&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ES3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//目标JS的模块化方案</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;es2015&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//指定项目中要使用的库，使用到的会有语法提示，反之没有</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lib&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;dom&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;esnext&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//指定编译后的文件所在的目录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;outdir&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    将所有代码合并为一个文件并输出</span></span>
<span class="line"><span style="color:#6A737D;">    此时module要配置为system或amd</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;outFile&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./dist/app.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//是否编译JS</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;allowJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//是否检查对JS进行类型检查</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;checkJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//是否移除注释</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;removeComments&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//是否不生成编译后的文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;noEmit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//当有错误发生时，是否不生成编译后的文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;noEmitOnError&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    编译后的文件是否使用严格模式</span></span>
<span class="line"><span style="color:#6A737D;">    JS使用模块化后自动开启严格模式</span></span>
<span class="line"><span style="color:#6A737D;">    JS手动开启严格模式，&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;alwaysStrict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//不允许隐式的any类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;noImplicitAny&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//不允许隐式的类型不明确的this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;noImplicitThis&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//检查变量是否有可能为null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;strictNullChecks&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//严格检查的总开关</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;strict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="include、exclude、extends" tabindex="-1">include、exclude、extends <a class="header-anchor" href="#include、exclude、extends" aria-label="Permalink to &quot;include、exclude、extends&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;include&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;./src/**/*.ts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./src/**/*.tsx&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;exclude&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;./src/**/*.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./src/**/*.jsx&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./file&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;include&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;./src/**/*.ts&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./src/**/*.tsx&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;exclude&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;./src/**/*.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./src/**/*.jsx&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./file&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
