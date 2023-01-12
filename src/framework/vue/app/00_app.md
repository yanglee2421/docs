# app 实例有关的 API

## `createApp()`

```js
const app = createApp(component);
```

## `mount()`

```js
app.mount("##DOM_id");
```

## `use()`

```js
app.use(plugin, options);
```

## `component()`

- 以驼峰法命名的可以被短横线调用，反之不行。在局部注册中也一样

```js
app.component("组件名", component);
```

## `directive()`

```js
app.directive("指令名", options);
```

## `mixin()`

```js
app.mixin(options);
```

## `provide()`

```js
app.provide("key", value);
```

## `unmount()`

```js
app.unmount();
```

## `version`

- 字符串形式的 Vue 版本号

```js
app.version;
```

## `config`

- 包含 Vue 配置的对象
