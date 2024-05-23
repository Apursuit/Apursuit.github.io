#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 设置变量
push_addr=git@github.com:Apursuit/Apursuit.github.io.git # git 提交地址
commit_info='commit'
push_branch=main # 推送的分支

echo "开始部署脚本..."
echo "Git 提交地址: $push_addr"
echo "提交信息: $commit_info"
echo "推送的分支: $push_branch"

# 添加所有文件并提交
echo "添加所有文件并提交"
git add .
git commit -m "update main branch"

# 强制推送到远程仓库的指定分支
echo "推送到远程仓库"
git push -f origin $push_branch

echo "部署完成"
