
# 入门docker

使用docker运行uploadlabs玩玩，过程可以练习docker命令

**环境：ubuntu + docker**

先切换到root用户，一般用户每次执行docker命令都需要sudo不方便(我忘记root用户密码了就这样操作了…)

```docker
docker search upload-labs             // 在dockerhub搜索upload-labs镜像
```

![](../medias/docker_1/1.png)

我装过**c0ny1**的镜像了，这次下面随便找一个
pull拉取镜像文件

```docker
docker pull cuer/upload-labs
```

![](../medias/docker_1/2.png)

查看当前仓库中镜像

```docker
docker images
```

![](../medias/docker_1/3.png)

运行镜像
-p 端口，80:80第一个80为本地端口，第二个80为镜像端口

```docker
docker run -d -p 80:80  cuer/upload-labs
```

![](../medias/docker_1/4.png)

显示端口已被占用
查看正在运行的容器

```docker
docker ps
```

![](../medias/docker_1/5.png)

记录下当前占用80端口的容器id，记录3-4位即可f1b3，正在运行的容器需要使用**-f**参数

```docker
docker rm -f f1b3
```

![](../medias/docker_1/6.png)

再试一次开启upload-labs镜像

```docker
docker run -d -p 80:80 cuer/upload-labs
```

![](../medias/docker_1/7.png)

开启成功，在浏览器可以使用localhost打开
通过上面开启服务时的镜像id，现在进到镜像系统中

```docker
docker exec -it  da88 /bin/bash
```

![](../medias/docker_1/8.png)

> www-data:www-data 指定了新的所有者和组，其中 www-data 是用户，冒号后的 www-data 是组。在大多数 Linux 系统中，Web服务器如 Apache 或 Nginx 运行在 www-data 用户和组下，以限制其权限，增强系统安全。

最后，如果开启upload-labs镜像执行两条命令

```shell
mkdir upload             创建upload文件夹
chown  www-data:www-data upload     更改文件夹权限，使能够上传文件
```

现在可以使用docker来练习upload-labs了
