# 事件绑定

- 柯里化

```jsx
/**
 * 柯里化绑定
 */
class MyC extends React.Component {
  render() {
    return <h1 onClick={this.hadClk("指定参")}></h1>;
  }
  hadClk = (param) => {
    return (event) => {
      console.log(event, param);
    };
  };
}
```

- 非柯里化

```jsx
/**
 * 非柯里化绑定
 */
class MyC extends React.Component {
  render() {
    return (
      <h1
        onClick={(event) => {
          this.hadClk(event, "指定参");
        }}
      ></h1>
    );
  }
  hadClk = (event, param) => {
    event.preventDefault();
    console.log(event, param);
  };
}
```
