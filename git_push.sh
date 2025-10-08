#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 设置 Git 提交人信息
git config user.name "Apursuit"
git config user.email "131228600+Apursuit@users.noreply.github.com"

# ./git_push.sh "提交信息"
commit_info=${1:-"commit"}

# git
push_addr=git@github.com:Apursuit/Apursuit.github.io.git # Git 提交地址
# https
# push_addr=https://github.com/Apursuit/Apursuit.github.io.git # Git 提交地址

push_path=./ # 项目根目录
dist_path=./docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=master # 推送的分支

# 生成静态文件
# 使用了Github action，所以取消本地生成，从而摆脱环境依赖
# npm run build:win

# 进入项目文件夹
# cd "$push_path"

# 第一次运行后，注释掉
# git init

# 添加所有更改的文件
git add -A
  
# 提交更改
git commit -m "$commit_info"
  
# 推送更改到指定分支
git push -f "$push_addr" HEAD:"$push_branch"

# cd -

# 删除临时文件夹
# rm -rf "$dist_path"
