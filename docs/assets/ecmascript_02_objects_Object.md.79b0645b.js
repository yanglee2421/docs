import{_ as a,o as e,c as s,O as o}from"./chunks/framework.c0965656.js";const y=JSON.parse('{"title":"Object","description":"","frontmatter":{},"headers":[],"relativePath":"ecmascript/02_objects/Object.md","filePath":"ecmascript/02_objects/Object.md","lastUpdated":1686325478000}'),n={name:"ecmascript/02_objects/Object.md"},t=o('<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;Object&quot;">​</a></h1><h2 id="操作符" tabindex="-1">操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to &quot;操作符&quot;">​</a></h2><h3 id="" tabindex="-1"><code>.</code> <a class="header-anchor" href="#" aria-label="Permalink to &quot;`.`&quot;">​</a></h3><h3 id="-1" tabindex="-1"><code>?.</code> <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;`?.`&quot;">​</a></h3><h3 id="delete" tabindex="-1"><code>delete</code> <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;`delete`&quot;">​</a></h3><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h3 id="is-value1-value2" tabindex="-1"><code>is(value1, value2)</code> <a class="header-anchor" href="#is-value1-value2" aria-label="Permalink to &quot;`is(value1, value2)`&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * 比对时，不会进行类型转换</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * 与===运算符的差如下</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//true</span></span>\n<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#A6ACCD;">(###</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="assign-obj-obj2-obj3" tabindex="-1"><code>assign(obj, obj2[, obj3])</code> <a class="header-anchor" href="#assign-obj-obj2-obj3" aria-label="Permalink to &quot;`assign(obj, obj2[, obj3])`&quot;">​</a></h3><h3 id="fromentries-arr" tabindex="-1"><code>fromEntries(arr)</code> <a class="header-anchor" href="#fromentries-arr" aria-label="Permalink to &quot;`fromEntries(arr)`&quot;">​</a></h3><h3 id="getownpropertydescriptors-obj-prop" tabindex="-1"><code>getOwnPropertyDescriptors(obj, &#39;prop&#39;)</code> <a class="header-anchor" href="#getownpropertydescriptors-obj-prop" aria-label="Permalink to &quot;`getOwnPropertyDescriptors(obj, &#39;prop&#39;)`&quot;">​</a></h3><h3 id="getownpropertynames" tabindex="-1"><code>getOwnPropertyNames()</code> <a class="header-anchor" href="#getownpropertynames" aria-label="Permalink to &quot;`getOwnPropertyNames()`&quot;">​</a></h3><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="tostring" tabindex="-1"><code>toString()</code> <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;`toString()`&quot;">​</a></h3><h3 id="hasownproperty" tabindex="-1"><code>hasOwnProperty()</code> <a class="header-anchor" href="#hasownproperty" aria-label="Permalink to &quot;`hasOwnProperty()`&quot;">​</a></h3>',15),r=[t];function l(c,p,i,d,h,b){return e(),s("div",null,r)}const m=a(n,[["render",l]]);export{y as __pageData,m as default};