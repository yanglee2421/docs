# react-router-dom
## 组件
~~~tsx
// 浏览器历史模式
<BrowserRouter>
    <Link to="/path01">选项一</Link>
    <Link to="/path02">选项二</Link>
    <Route path="/path01" component={MyComponent01}></Route>
    <Route path="/path02" component={MyComponent02}></Route>
</BrowserRouter>
// 哈希模式
<HashRouter>
    <NavLink activeClassName="active" to="/path01">选项一</NavLink>
    <NavLink activeClassName="active"  to="/path02">选项二</NavLink>
    <Route path="/path01" component={MyComponent01}></Route>
    <Route path="/path02" component={MyComponent02}></Route>
</HashRouter>
~~~
## 自封装NavLink
~~~tsx
function MyNavLink {
    return (
        <NavLink {...this.props} activeClassName="my-active" className="mr-1 pt-1" />
    )
}
~~~