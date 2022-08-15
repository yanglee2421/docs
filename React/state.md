# state
- 一参写成对象时
~~~jsx
class MyC extends React.Component {
    state = {
        isShow:true,
    }
    func = () => {
        const { isShow } = this.state
        this.setState({isShow:!isShow}, () => {
            console.log("相当于vue中的nextTick")
        })
    }
}
~~~
- 一参写成函数时
~~~jsx
class MyC extends React.Component {
    state = {
        isShow:true,
    }
    func = () => {
        const { isShow } = this.state
        this.setState(
        (state, props) => { return { isShow:!isShow } },
        () => {
            console.log("相当于vue中的nextTick")
        })
    }
}
~~~
# props
- 仅读对象
- 函数组件中使用
~~~jsx
function MyC(props) {
    return (<h1>{props.name}</h1>)
}
MyC.propTypes = {
        name:PropTypes.string
        func:PropTypes.func.isRequired
    }
MyC.defaultProps = {}
~~~
- 类组件中使用
~~~jsx
class MyC extends React.Component {
    render(){
        return (<h1></h1>)
    }
    static propTypes = {
        name:PropTypes.string.isRequired
        func:PropTypes.func
    }
    static defaultProps = {}
}
~~~
# refs
- 用于获取DOM
- 字符串形式（将被移除，不推荐使用）
~~~jsx
class MyC extends React.Component {
    render() {
        return (<h1 ref="hOne"></h1>)
    }
    state = {}
    func = () => {
        console.log(this.refs.hOne)
    }
}
~~~
- 内联回调形式
~~~jsx
/**
 * 页面挂载时，ref调用一次，实参是DOM元素
 * 页面更新时，ref会调用两次
 * 第一次的实参是null
 * 第二次的实参是DOM元素
 */
class MyC extends React.Component {
    render() {
        return (<h1 ref={el => this.state.arr.push(el)}></h1>)
    }
    state = {
        arr:[]
    }
}
/**
 * 因为上述问题以上代码在页面更新时会出现问题
 */
~~~
- 类绑定回调
~~~jsx
/**
 * 挂载调用一次
 * 更新不调用
 */
class MyC extends React.Component {
    render() {
        return (<h1 ref={this.pushRef(el)}></h1>)
    }
    state = {
        arr:[]
    }
    pushRef = el => this.state.arr.push(el)
}
~~~
- `createRef()`
~~~jsx
/**
 * 生成的ref容器仅能存一个ref
 * 有多个相同的标记时，取被标记的最后一个
 */
class MyC extends React.Component {
    render() {
        return (<h1 ref={this.myRef}></h1>)
    }
    myRef = React.createRef()
}
~~~