**这是一个基于Github pages + docsify的主题笔记(博客)，在搭建过程遇到了一些git的用法,具体由GPT生成，暂时记下**
```
git init                        初始化本地git仓库

git add -A                      将修改添加到暂存区，为下一次操作做准备 等同于分开执行 git add . 和 git add -u 的组合

git add .                       添加当前目录下的所有新文件和修改过的文件到暂存区，但不包括删除的文件

git add -u                      更新已跟踪的文件，包括修改过的文件和删除的文件，但不会添加新文件

git status                      检查当前状态，确认哪些更改将被提交

git commit -m "words"           用于将暂存区（stage）中的更改记录到仓库历史

git remote set-url origin url   在 Git 版本控制系统中用于更改现有远程仓库的 URL

git push -u origin master       在 Git 中用于将你的本地 master 分支的更改推送到远程仓库
```