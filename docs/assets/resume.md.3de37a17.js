import{_ as e,c as d,o,a as l}from"./app.335117dc.js";const p=JSON.parse('{"title":"简历","description":"","frontmatter":{},"headers":[{"level":2,"title":"个人信息","slug":"个人信息","link":"#个人信息","children":[]},{"level":2,"title":"专业技术","slug":"专业技术","link":"#专业技术","children":[]},{"level":2,"title":"工作经历","slug":"工作经历","link":"#工作经历","children":[]},{"level":2,"title":"项目经验","slug":"项目经验","link":"#项目经验","children":[]},{"level":2,"title":"教育背景","slug":"教育背景","link":"#教育背景","children":[]},{"level":2,"title":"自我评价","slug":"自我评价","link":"#自我评价","children":[]},{"level":2,"title":"踩坑记","slug":"踩坑记","link":"#踩坑记","children":[]}],"relativePath":"resume.md","lastUpdated":1675255000000}'),c={name:"resume.md"},i=l('<h1 id="简历" tabindex="-1">简历 <a class="header-anchor" href="#简历" aria-hidden="true">#</a></h1><h2 id="个人信息" tabindex="-1">个人信息 <a class="header-anchor" href="#个人信息" aria-hidden="true">#</a></h2><ul><li><a href="mailto:yanglee2421@outlook.com" target="_blank" rel="noreferrer">Email</a></li><li><a href="tel:18872082421" target="_blank" rel="noreferrer">Phone</a></li><li><a href="sms:18872082421" target="_blank" rel="noreferrer">短信</a></li></ul><h2 id="专业技术" tabindex="-1">专业技术 <a class="header-anchor" href="#专业技术" aria-hidden="true">#</a></h2><ol><li>能使用 <code>HTML5 + CSS3</code>，并结合 <code>Sass/Less</code> 等预处理器进行设计稿还原</li><li>熟练掌握 <code>JavaScript、TypeScript</code>，能使用 <code>ES6、ES7</code> 等高级语法进行高效开发</li><li>多次使用 <code>Vue 全家桶 + Element-UI</code> 进行项目开发，并对 <code>MVVM</code> 架构的设计思想有较为深入的研究</li><li>熟悉 <code>React</code>，有使用 <code>React 全家桶 + ant-design</code> 进行项目开发的经历</li><li>了解 <code>Webpack、Vite</code>，能独立搭建符合规范的脚手架，对前端工程化有一定程度的理解和实践</li><li>熟悉 <code>Git</code> 分布式下的协作开发，熟悉 Git 常用命令</li><li>参与过<code>微信小程序</code>项目，对 <code>uni-app</code> 和 <code>H5 移动端</code>有一定的实操经验</li><li>了解 <code>Node.js</code>，能使用 <code>Express</code> 进行接口开发，能使用 <code>Yarn</code> 包管理工具</li><li>会经常封装一些公用组件、公用函数以及公用 Hook 以提高开发效率</li><li>在项目中，对于代码优化、打包优化、请求优化等优化措施有大量实践</li><li>喜欢思考问题，并进行知识输出，撰写的技术文章收获 <code>1200+</code> 阅读</li></ol><h2 id="工作经历" tabindex="-1">工作经历 <a class="header-anchor" href="#工作经历" aria-hidden="true">#</a></h2><h2 id="项目经验" tabindex="-1">项目经验 <a class="header-anchor" href="#项目经验" aria-hidden="true">#</a></h2><h2 id="教育背景" tabindex="-1">教育背景 <a class="header-anchor" href="#教育背景" aria-hidden="true">#</a></h2><h2 id="自我评价" tabindex="-1">自我评价 <a class="header-anchor" href="#自我评价" aria-hidden="true">#</a></h2><p>吃苦耐劳💦，接受加班👌。</p><h2 id="踩坑记" tabindex="-1">踩坑记 <a class="header-anchor" href="#踩坑记" aria-hidden="true">#</a></h2><ul><li>在<code>try</code>中<code>return Promise.reject()</code>不会触发<code>catch</code>，<code>await Promise.reject()</code>会</li><li><code>createHashRouter</code>的<code>basename</code>会被拼到 hash 而不是 path 中</li><li><code>try...catch...finally</code>中<code>finally</code>的<code>return</code>会覆盖前两者的<code>return</code>或<code>throw</code>，即使前两者执行了<code>return</code>或<code>throw</code>，<code>finally</code>块也会执行</li><li>函数内部若依赖于一些外部变量，那么函数提升可能会带来一些问题</li><li>原始类型是没有属性和方法的，但大部分原始值仍然表现得像有一样。当在原始值上访问属性时，JavaScript 自动将值装入包装器对象中，并访问该对象上的属性。例如，&quot;foo&quot;.includes(&quot;f&quot;) 隐式创建了一个 String 包装对象，并在该对象上调用 String.prototype.includes()。</li><li><code>Boolean</code>、<code>Number</code>、<code>BigInt</code>、<code>String</code>、<code>Symbol</code>被<code>new</code>调用时，返回一个与原始值对应的包装对象而非原始值本身</li><li>隐式类型转换依赖于原始值包装对象</li><li>包装对象浅等于对应的原始值</li><li>不存在用来包装<code>undefined</code>和<code>null</code>的对象，故从它们身上访问属性或方法时，会抛出<code>TypeError</code></li><li>github pages 默认使用 jekyll 进行部署，jekyll 会忽略<code>_</code>开头的文件，需要添加<code>_config.yml</code>文件指定要包含的文件</li><li><code>_config.yml</code>要放到 github pages 的部署目录下</li><li>也可以在部署目录下生成一个<code>.nojekyll</code>文件，以关闭 jeklly 部署</li></ul>',12),a=[i];function r(t,n,h,s,u,_){return o(),d("div",null,a)}const g=e(c,[["render",r]]);export{p as __pageData,g as default};
