# NextJs

NextJs13 版本对 API 进行了较大的改动（例如 App Router），本文并不涉及这部分新功能，仅讲解基于 Pages Router 的原有功能，旨在帮助 React 开发者快速上手一个 NextJs 项目。

## 与 React App 的区别

1. 部分代码运行在 server side，另一部分则运行在 client side
2. 基于文件的 router
3. components 分 server 和 client 两种（在 app router 下默认全视为 srever component，client component 需要使用"use client"显示声明）
4. 支持 server side data fetch
5. 支持 Server Side Render 和 Static Site Generate

## Pages Router

### 路径

基于文件路由生成网站的路由表，基本示例如下：

| File Path             | URI    | Desc               |
| --------------------- | ------ | ------------------ |
| pages/index.tsx       | /      | 首页               |
| pages/login/index.tsx | /login | 登录页             |
| pages/404.tsx         | /404   | 404 页             |
| pages/\_app.tsx       | null   | React App 的根节点 |

### 路态路由

动态的匹配 URI，多个 URI 指向同一个页面。

| File Path                 | URI          | Desc               |
| ------------------------- | ------------ | ------------------ |
| pages/todos/[id].tsx      | /todos/\*    | 仅捕获一层 URI     |
| pages/todos/[...path].tsx | /todos/\*_/_ | 捕获所有层级的 URI |

### 获取 URI 中的参数

通过 router.query 属性，获取从 URI 中捕获的 params 以及 searchParams。

```tsx
import { useRouter } from "next/router";
import style from "./style.module.scss";

export default function Path() {
  const router = useRouter();

  // URI:/todos/sub1/sub2
  const { path } = router.query;
  // only client returns ['sub1','sub2']

  // URI:/todos/filterId
  const { id } = router.query;
  // returns 'filterId'

  if (!Array.isArray(path)) return <p>loading</p>;
  return (
    <ul className={style.b}>
      {path.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

**NOTE：** router.query 首次渲染时会返回一个空对象，再渲染才能拿到有效值。

### 编程式路由

通过 router 对象上的方法控制页面路由

```tsx
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const handlePush = () => {
    router.push("/login");
  };
  const handleReplace = () => {
    router.replace({ pathname: "/todos/[id]", query: { id: "clientId" } });
  };
  const handleBack = () => {
    router.back();
  };
  const handleRefresh = () => {
    router.reload();
  };

  const evtArr = [handlePush, handleReplace, handleBack, handleRefresh];
  const liEl = evtArr.map((item) => (
    <li key={item.name}>
      <button onClick={item}>{item.name}</button>
    </li>
  ));

  return <ul>{liEl}</ul>;
}
```

### Link 组件

类似 a 标签，提供跳转链接。

```tsx
import Link from "next/link";

function Component() {
  return (
    <>
      <Link href="/" passHref>
        click me
      </Link>
      <Link href={{ pathname: "/[id]", query: { id: 123 } }} passHref>
        click me
      </Link>
    </>
  );
}
```

## Server Side Data Fetch

### getStaticProps & getStaticPaths

```tsx
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: Props) {
  const { name } = props;
  // returns null
  return <></>;
}

// Required for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      "/demo/1",
      {
        params: { id: "2" },
      },
    ],
    fallback: false,
  };
};

interface TData {
  name: unknown;
}

// Get server side props & generate html
export const getStaticProps: GetStaticProps<TData> = async () => {
  try {
    await get_demo();
    return { props: { name: null }, revalidate: 60 * 60 * 24 };
  } catch {
    return {
      redirect: {
        statusCode: 301,
        destination: "/demo",
      },
    };
  }
};

async function get_demo() {}
```

### getServerSideProps

```tsx
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Page(props: Props) {
  const { data } = props;
  // returns null
  return <></>;
}

interface TData {
  data: unknown;
}

// Get server side props, but doesn't generate html
export const getServerSideProps: GetServerSideProps<TData> = async () => {
  try {
    await get_demo();
    return { props: { data: null } };
  } catch {
    return { notFound: true };
  }
};

async function get_demo() {}
```

**NOTE:** getServerSideProps 和 getStaticProps 中，同一页面只能选择其中一个。

## Client Side Data Fetch

基本与 React App 一致，但需要注意，与 React App 不同，由于页面跳转时会清空 JS 内存，页面间共享数据时需要使用持久化方案。

### useEffect

NextJs 支持在组件中通过 useEffect 钩子在 client side 发起网络请求

### SWR

[SWR](https://swr.vercel.app)一个由 NextJs 官方提供的用于 client side data fetching 的网络请求库，类似 react-query，也可以直接使用 react-query。
