# yarn

## 启用 or 安装

```powershell
# 启用corepack中的yarn（需要管理员CMD）
corepack enable
# 可以根据需要切换yarn的版本
corepack prepare yarn@stable --activate
corepack prepare yarn@1 --activate
# 也可以使用npm全局安装yarn
npm i -g yarn
```

## 全局配置

```powershell
# 要使用yarn全局安装的包需要在环境变量下配置以下两个路径
yarn global root
yarn global bin
# 配置or恢复npm镜像
yarn config set registry url
yarn config delete registry
```

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
