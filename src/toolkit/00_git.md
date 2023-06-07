# Git

git是一个由祖师爷（Linux作者Linus）开发的版本控制工具。

其主要特点在于：

1. 分布式，对于服务器依赖小
2. 离线工作

## Init

```powershell
git init
git init dirname
git clone gitUrl
```

## Config

```powershell
git config --global user.name "yanglee2421"
git config --global user.email "yanglee2421@gmail.com"
git config --global http.proxy http://127.0.0.1:7890
git config --list
```

## Commit

```powershell
git status
git add .
git commit -m'提交信息'
```

## rm

```powershell
rm 仅删除工作区-不暂存.txt
git rm 删除工作区-且暂存.txt
git rm -f 强制删除工作区-且暂存.txt
git rm -cached 删除暂存区-且暂存.txt
```

## Log

```powershell
git log
git log -a --graph --abbrev-commit --pretty=oneline
git diff
git diff commitId
```

## Reset

```powershell
git checkout .
git reset
git reset --hard commitId
git revert commitId
```

## Branch

```powershell
# 列出本机上的所有远程分支
git branch -r
# 列出所有分支
git branch -a
# 列出分支间的映射关系
git branch -vv
# 创建一个新分支
git branch branchName
# 删除本地分支
git branch -d branchName
# 删除本机上的远程分支
git branch -dr remoteName/branchName
# 创建当前分支与指定远程分支间的映射关系
git branch --set-upstream-to=remoteName/branchName
# 切换到指定分支
git checkout branchName
# 创建一个新分支，并切换到该分支
git checkout -b branchName
```

## Merge

```powershell
# 将指定分支上的提交记录合并到当前分支
git merge branchName
# 中断合并
git merge --abbort
```

## Remote

```powershell
# 列出所有源
git remote -v
# 添加一个源
git remote add remoteName gitUrl
# 移除一个源
git remote remove remoteName
# 重命名一个源
git remote rename prevName neoName
# 拉取默认源上的所有提交记录，并更新到本机上的远程分支
git fetch
# 拉取指定源上的所有提交记录，并更新到本机上的远程分支
git fetch remoteName
# 拉取默认源上的（当前分支映射的）远程分支的改动（并更新本机上对应的远程分支），合并到当前本地分支上
git pull
# 拉取指定源上的指定分支的提交（并更新本机上对应的远程分支），合并到当前分支
git pull remoteName branchName
# 推送当前分支上的提交到其映射的远程分支上
git push
# 推送当前分支上的提交到指定源的指定分支上，并与其建立映射关系
git push -u remoteName branchName
git push --set-upstream remoteName branchName
# 删除服务器上的远程分支
git push remoteName -d branchName
```

## SSH

```powershell
ssh-keygen -t ed25519 -f filename
ssh
```
