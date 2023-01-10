import{_ as e,c as o,o as c,a as d}from"./app.a780e610.js";const v=JSON.parse('{"title":"3. 事件绑定","description":"","frontmatter":{},"headers":[],"relativePath":"Vue3/directives.md"}'),i={name:"Vue3/directives.md"},l=d('<h1 id="_3-事件绑定" tabindex="-1">3. 事件绑定 <a class="header-anchor" href="#_3-事件绑定" aria-hidden="true">#</a></h1><ul><li><code>v-on</code></li><li><code>$event</code></li><li>修饰符 <ul><li><code>.prevent</code>，取消默认行为</li><li><code>.stop</code>，阻止事件冒泡</li><li><code>.capture</code>，以捕获模式触发事件</li><li><code>.once</code>，事件仅触发一次</li><li><code>.self</code>，仅在<code>event.target</code>是自身时才触发事件</li><li><code>.esc</code>，按键为 ESC</li><li><code>.enter</code>，按键为 Enter</li></ul></li></ul><h1 id="_4-双向绑定" tabindex="-1">4. 双向绑定 <a class="header-anchor" href="#_4-双向绑定" aria-hidden="true">#</a></h1><ul><li><code>v-model</code><blockquote><ul><li>设置<code>input</code>标题的<code>value</code>为一个变量</li><li>绑定给<code>input type=radio</code>时，指向<code>name</code>相同的<code>radio</code>中被激活的那一个的<code>value</code></li><li>绑定给单个<code>input type=checkbox</code>时，指向<code>checked</code>不指向<code>value</code>，值只有<code>true</code>和<code>false</code></li><li>绑定多个<code>input type=checkbox</code>时，<code>v-model</code>的值为一个数组，<code>value</code>在该数组中的<code>checkbox</code>被激活</li></ul></blockquote></li><li>修饰符 <ul><li><code>.number</code>，转为<code>number</code>类型</li><li><code>.trim</code>，过滤首尾空格</li><li><code>.lazy</code>，改值时才更新</li></ul></li></ul><h1 id="_5-条件渲染" tabindex="-1">5. 条件渲染 <a class="header-anchor" href="#_5-条件渲染" aria-hidden="true">#</a></h1><ul><li><code>v-if</code></li><li><code>v-else-if</code></li><li><code>v-else</code></li><li><code>v-show</code></li></ul><h1 id="_6-列表渲染" tabindex="-1">6. 列表渲染 <a class="header-anchor" href="#_6-列表渲染" aria-hidden="true">#</a></h1><ul><li><code>v-for</code></li><li>能遍历：<code>str</code>、<code>num</code>、<code>obj</code>、<code>arr</code></li><li>注意 <ol><li><code>:key</code>的值只能是<code>number</code>或<code>string</code></li><li><code>:key</code>的值不能重复</li><li>常用<code>id</code>作为<code>:key</code>属性</li><li>不建议用<code>index</code>作为<code>:key</code>，<code>arr</code>的元素减少或时容易出问题</li><li><code>:key</code>触发 diff 算法以提升性能</li></ol></li></ul>',8),a=[l];function t(r,n,s,u,_,h){return c(),o("div",null,a)}const f=e(i,[["render",t]]);export{v as __pageData,f as default};
