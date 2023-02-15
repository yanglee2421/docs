# yarn

## 启用 or 安装

```powershell
# 启用corepack中的yarn
corepack enable
# 可以根据需要切换yarn的版本
corepack prepare yarn@stable --activate
corepack prepare yarn@1 --activate
# 也可以使用npm全局安装yarn
npm i -g yarn
```

::: tip
使用 corepack 启用 yarn 需要在以管理员权限启动 powershell
:::

## 全局配置

```powershell
yarn global bin
yarn global root
# 配置or恢复npm镜像
yarn config set registry url
yarn config delete registry
```

::: danger
不配置 bin 路径，yarn 全局安装的包无法使用
:::

## 初始化

```powershell
yarn init
yarn init -y
```

## 添加/移除

```powershell
yarn
yarn add
yarn add -D
yarn remove
yarn global add
yarn global remove
```

## 查看

```powershell
yarn list package --depth 0
yarn global list --depth 0
```

## 升级

```powershell
yarn upgrade
```

## V3

```powershell
# 使用yarn3来初始化一个项目
yarn init -2
# typescript无法识别yarn3依赖类型的问题
# 1. VScode安装ZipFS插件
# 2. 执行以下命令
yarn dlx @yarnpkg/sdks vscode
```
