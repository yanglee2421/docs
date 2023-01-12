import{_ as e,c as t,o as l,a as i}from"./app.8e0b0815.js";const p=JSON.parse('{"title":"HTTP 请求","description":"","frontmatter":{},"headers":[{"level":2,"title":"method","slug":"method","link":"#method","children":[{"level":3,"title":"HTTP 八请求","slug":"http-八请求","link":"#http-八请求","children":[]},{"level":3,"title":"GET","slug":"get","link":"#get","children":[]},{"level":3,"title":"POST","slug":"post","link":"#post","children":[]}]},{"level":2,"title":"status 码","slug":"status-码","link":"#status-码","children":[]}],"relativePath":"server/restapi/00_HTTP.md","lastUpdated":null}'),a={name:"server/restapi/00_HTTP.md"},r=i('<h1 id="http-请求" tabindex="-1">HTTP 请求 <a class="header-anchor" href="#http-请求" aria-hidden="true">#</a></h1><h2 id="method" tabindex="-1">method <a class="header-anchor" href="#method" aria-hidden="true">#</a></h2><h3 id="http-八请求" tabindex="-1">HTTP 八请求 <a class="header-anchor" href="#http-八请求" aria-hidden="true">#</a></h3><ul><li>get、post、delete、put、contect、head、options、trace</li><li>以上请求本质上没有区别，仅作用法和语义化上的区分</li><li>常用的只有两种 GET、POST</li></ul><h3 id="get" tabindex="-1">GET <a class="header-anchor" href="#get" aria-hidden="true">#</a></h3><ul><li>索取</li><li>不包含敏感数据</li><li>通过浏览器地址栏发送的就是 GET 请求</li><li>请求外部资源的 html 标签发送的也是 GET 请求</li><li>能被缓存</li><li>参数类型必须为 ASCII 码</li><li>参数会被放置在 URL 中</li></ul><h3 id="post" tabindex="-1">POST <a class="header-anchor" href="#post" aria-hidden="true">#</a></h3><ul><li>传输的数据相对敏感</li><li>请求的结查有持续性的副作用时（例如：要作为数据源写入数据库时）</li><li>不能被缓存</li></ul><h2 id="status-码" tabindex="-1">status 码 <a class="header-anchor" href="#status-码" aria-hidden="true">#</a></h2><ul><li>1xx：需要 client 进一步操作</li><li>2xx：成功</li><li>3xx：重定向</li><li>4xx：client 配置错误</li><li>5xx：server 发生错误</li></ul>',10),s=[r];function h(d,n,o,c,u,_){return l(),t("div",null,s)}const x=e(a,[["render",h]]);export{p as __pageData,x as default};
