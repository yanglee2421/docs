# Material UI

## 样式方案

不同于antd和element-ui等其它框架，material-ui中的组件是完全独立的（自我支持）。也就是说，material-ui不需单独导入全局样式表，这意味着使用material-ui不会干扰其它ui组件的表现，如果需要，你可以将material-ui的组件嵌入到其它UI框架中。

material-ui通过CSS-in-JS方案（styled方法）实现自我支持，不使用单独的CSS文件编写样式。同时该方案也支持在react-dom内置组件（html jsx）上使用。

styled是一个用于自定义样式的高阶组件。虽然使用上看起来像是操作元素的style属性，但其定义样式的本质仍是CSS类，而且这些类名是动态生成的。

使用方法如下：

~~~tsx
import { Button, styled } from "@mui/material";
import logo from "../../assets/react.svg";

export function Component() {
  return (
    <>
      <Btn>click me</Btn>
      <Img src={logo}></Img>
    </>
  );
}

const Btn = styled(Button)({
  border: "1px red dashed",
});
const Img = styled("img")({
  display: "block",
});

~~~

## 布局

1. Box：类似div
2. Container：水平居中的网页主体
3. Grid：栅格系统（注意：row，col都是这个组件，需要手动指定是row还是col）
4. Hidden：响应式地控制元素的显隐
5. ImageList：grid布局的图片列表

## 表单组件

1. TextField

## 主题

提供一些在material-ui组件间共享的变量。

包括以下类：

1. palette（调色）
2. typography（排版）
3. spacing（间距）
4. breakpoints（断点）
5. z-index（z轴）
6. globals（全局变量）

使用方法类似react context：

1. createTheme创建主题
2. ThemeProvider向下传递主题
3. useTheme获取主题。

~~~tsx
import { createTheme, ThemeProvider, useTheme } from "@mui/material";

export function Component() {
  return (
    <ThemeProvider theme={theme}>
      <Cus></Cus>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: "#f00" },
  },
});

function Cus() {
  const theme = useTheme();
  console.log(theme);
  return <></>;
}

~~~

## mui/system

### 样式工具

1. spacing：用于设置元素的间距属性（padding、margin）
2. palette：用于设置元素的颜色属性（color、backgroundColor）
3. borders：用于设置元素的边框属性（border、borderRadius）
4. display：用于设置元素的显示属性（display）
5. flexbox
6. grid
7. positions
8. shadows
9. sizing
10. typography
11. screen readers
12. compose：用于合并以上工具函数，返回一个工具函数（返回结果是所有被合并函数返回结果的子类）

