# Component

## Navigate

```tsx
<Navigate to={-1} replace state={{}} relative={} />
```

::: tip
主要用于重定向
:::

## Outlet

```tsx
<Outlet />
```

::: tip
子路由占位组件
:::

## NavLink

```tsx
<NavLink
  to="404"
  replace
  end
  className={({ isActive }) => ""}
  style={(state) => ({})}
>
  内容
</NavLink>
```

::: tip
用于生成路由链接
:::
