#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

push_addr=git@github.com:Apursuit/Apursuit.github.io.git # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info='update main branch'
dist_path=./ # 打包生成的文件夹路径
push_branch=main # 推送的分支

# 创建临时文件夹并复制项目内容
temp_dir=$(mktemp -d)
cp -r . "$temp_dir"

# 进入生成的文件夹
cd "$dist_path"

git init
git add -A
git commit -m "$commit_info"
git push -f "$push_addr" HEAD:"$push_branch"

cd -

# 删除临时文件夹
rm -rf "$temp_dir"
