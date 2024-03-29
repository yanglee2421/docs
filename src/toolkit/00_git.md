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

## rm

~~~powershell
# 仅删除工作区-不暂存
rm filename
# 删除工作区-且暂存
git rm filename
# 强制删除工作区-且暂存
git rm -f filename
# 删除暂存区-且暂存
git rm -cached filename
~~~

## Commit

```powershell
git status
git add .
git commit -m 'commit msg'
```

## Tag

像其他版本控制系统（VCS）一样，Git 可以给仓库历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（ `v1.0` 、 `v2.0` 等等）。

git支持两种标签：

1. lightweight tags：轻量标签是某个特定提交的引用。
2. annotated tags：附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 

~~~powershell
# 列出本机上的tags
git tag
# 为当前最新commit添加一个lightweight tag
git tag tagName
# 为指定commit添加一个lightweight tag
git tag tagName commitId
# 为当前最新commit添加一个annotated tag
git tag -a tagName -m 'tag msg'
# 为指定commit添加一个annotated tag
git tag -a tagName -m 'tag msg' commitId
# 删除tag
git tag -d tagName
# 向remote推送tag
git push remoteName tagName
# 删除remote上的tag
git push remoteName -d tagName
~~~

__NOTE：__ 默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。

__NOTE：__ 通常会建议创建附注标签，这样你可以拥有较为完整的信息。

## Log

```powershell
git log
git log -a --graph --abbrev-commit --pretty=oneline
git diff
git diff commitId
# 以列表形式查看指定文件的历史修改记录
git blame filename
```

## Reset

```powershell
git checkout .
git reset
git reset --hard commitId
git revert commitId
```

## Branch

分支分为三种：

1. branch：branch（在本地）用来存储本地commit
2. remote/branch：remote/branch（在本地）用来存储从remote上拉取的commit
3. 远程branch：远程仓库上的branch（在远程）

pull流程：远程branch --> remote/branch --> branch

push流程：branch --> remote/branch --> 远程branch

fetch流程：远程branch --> remote/branch

```powershell
git branch
git branch -r
git branch -a
git branch -vv
git branch branchName
git branch -d branchName
git branch -dr remoteName/branchName
git branch --set-upstream-to=remoteName/branchName

git checkout branchName
git checkout -b branchName
```

## Merge

merge用于将目标分支上的commit导入到当前分支。

~~~powershell
# 将指定分支上的提交记录合并到当前分支
git merge branchName
# 中断合并
git merge --abort
~~~

## Remote

```powershell
git remote
git remote -v
git remote add remoteName gitUrl
git remote remove remoteName
git remote rename prevName neoName

git fetch
git fetch remoteName

git pull
git pull remoteName branchName

git push
git push -u remoteName branchName
git push --set-upstream remoteName branchName
git push remoteName -d branchName
```

## SSH

```powershell
# 生成一个SSH密钥
ssh-keygen -t ed25519 -f filename
ssh usr@sshUrl
```
