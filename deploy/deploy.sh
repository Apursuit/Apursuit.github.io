#!/bin/bash

# 部署分支
DEPLOY_BRANCH="gh-pages"
# 构建目录 (与 ci.yml 中的 DIST_PATH 变量保持一致)
DIST_DIR="docs/.vuepress/dist"

# 从 git 获取信息
REMOTE_ADDR=$(git remote get-url --push origin)
# 使用更简洁的提交信息，记录 master 分支上的最后一次提交
COMMIT_INFO=$(git log -1 --pretty=format:'%s') 
USER_NAME=$(git log -1 --pretty=format:'%an')
USER_EMAIL=$(git log -1 --pretty=format:'%ae')

# 进入构建目录
cd "${DIST_DIR}" || { echo "错误: 找不到构建目录 ${DIST_DIR}。部署失败。"; exit 1; }

echo "User-agent: *" > robots.txt
echo "Allow: /" >> robots.txt
echo "Sitemap: https://the0n3.top/sitemap.xml" >> robots.txt

# 初始化 git 仓库
git config --global init.defaultBranch ${DEPLOY_BRANCH}
git init
git config user.name "${USER_NAME}"
git config user.email "${USER_EMAIL}"
git add -A
git commit -m "Deploy: ${COMMIT_INFO}"

# 构造远程 URL (使用 ACCESS_TOKEN 进行身份验证)
CLEAN_REMOTE_ADDR=$(echo "${REMOTE_ADDR}" | awk -F'://' '{print $2}')
REMOTE_URL="https://${USER_NAME}:${ACCESS_TOKEN}@${CLEAN_REMOTE_ADDR}"

# 添加远程仓库并强制推送
git remote add origin "${REMOTE_URL}"
git push origin HEAD:${DEPLOY_BRANCH} --force
