# 初始化
- `git init`
- `git init 文件夹`
- `git clone 网址`
# 配置
- `git config --global user.name "用户名"`
- `git config --global user.email "邮箱"`
- `git config --list`
# 暂存
- `git add .`
# 提交
- `git commit -m'提交信息'`
# 状态
- `git status`
- `git log`
- `git log -a --graph --abbrev-commit --pretty=oneline`
# 重置
- `git reset --hard 提交ID`
# 分支
- `git branch`
- `git branch -r`
- `git branch -a`
- `git branch -vv`
- `git branch 分支名`
- `git branch -d 本地分支`
- `git branch -dr 本地的远程分支`
- `git checkout 分支名`
- `git checkout -b 分支名`
# 合并
- `git merge `
- `git merge --abbort`
# 同步
- `git remote`
- `git remote -v`
- `git remote add 源 地址`
- `git remote remove 源`
- `git fetch`
- `git pull`
- `git push`
- `git push -u 源 分支`
- `git push --set-upstream 源 分支`
- `git push 源 --delete 分支`
# SSH
- `ssh-keygen -t ed25519`
- `ssh`