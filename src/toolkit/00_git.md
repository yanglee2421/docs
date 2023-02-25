# Git

## init & clone

```powershell
git init
git init 文件夹
git clone 仓库地址
```

## config

```powershell
git config --global user.name "用户名"
git config --global user.email "邮箱"
git config --global http.proxy http://127.0.0.1:7890
git config --list
```

## add & commit

```powershell
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

## status、log & diff

```powershell
git status
git log
git log -a --graph --abbrev-commit --pretty=oneline
git diff
git diff 提交ID
```

## reset

```powershell
git checkout .
git reset
git reset --hard 提交ID
git revert 提交ID
```

## branch & checkout

```powershell
git branch -r
git branch -a
git branch -vv
git branch 分支
# 删除本地分支
git branch -d 分支
# 删除本地远程分支
git branch -dr 源/分支
git branch --set-upstream-to=源/分支
git checkout 分支
git checkout -b 新分支
```

## merge

```powershell
git merge 指定分支
git merge --abbort
```

## remote、fetch & pull

```powershell
git remote -v
git remote add 源 地址
git remote remove 源
git remote rename 旧名 新名
git fetch
git fetch 源
git pull
git pull 源 分支
git push
git push -u 源 分支
git push --set-upstream 源 分支
# 删除远程分支
git push 源 -d 分支
```

## SSH

```powershell
ssh-keygen -t ed25519 -f filename
ssh
```
