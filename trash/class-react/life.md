# 生命周期（旧）
- 挂载流程
~~~jsx
class MyC extends React.Component {
    // 实例化
    constructor(){}
    // 组件将要挂载
    componentWillMount() {}
    // 渲染组件
    render() {}
    // 挂载完成
    compnoentDidMount() {}
    // 组件将要卸载（由ReactDOM.unmountComponentAtNode方法触发）
    componentWillUnmount() {}
}
~~~
- 更新流程（父组件的render执行期间）
~~~jsx
class MyC extends React.Component {
    // 重新接收Props（由Props改变触发的更新由此开始，挂载流程不调用）
    componentWillReceiveProps() {}
    // 是否更新（setState触发的更新由此开始）
    shouldComponentUpdate() {
        // 为true继续，反之停（不写此钩子则默认返回true）
        return true
    }
    // 组件将要更新（forceUpdate触发的更新由此开始）
    componentWillUpdate() {}
    // 渲染组件
    render() {}
    // 更新完成
    componentDidUpdate() {}
    // 组件将要卸载
    componentWillUnmount() {}
}
~~~
# 生命周期（新）
- 挂载流程
~~~jsx
class MyC extends React.Component {
    // 实例化
    constructor(){}
    // 从props获取派生state
    static getDerivedStateFromProps(props) {
        // 必须返回状态对象或null
        return props||null
    }
    // 渲染组件
    render() {}
    // 挂载完成
    compnoentDidMount() {}
}
~~~
- 更新流程
~~~jsx
class MyC extends React.Component {
    // 实例化
    constructor(){}
    // 从props获取派生state
    static getDerivedStateFromProps(props) {
        // 必须返回状态对象或null
        return props||null
    }
    // 是否更新
    shouldComponentUpdate() {
        return true
    }
    // 渲染组件
    render() {}
    // 更新前获取快照
    getSnapshotBeforeUpdate() {}
    // 更新完成
    componentDidUpdate() {}
}
~~~