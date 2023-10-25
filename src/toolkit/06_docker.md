# Docker

## Images

以下命令依次为：

1. 列出所有镜像
2. 打包生成一个镜像
3. 从远程拉取一个镜像
4. 移除一个镜像

```bash
# Images
docker images
docker build
docker pull image_name
docker rmi image_name
```

## Container

以下命令依次为：

1. 运行指定镜像生成一个容器
2. 列出所有容器
3. 启动已存在的指定容器
4. 停止已存在的指定容器
5. 重启已存在的指定容器
6. 进入指定容器的指定终端中

```bash
# Container
docker run -itd image_name /bin/sh
docker ps -a
docker start container_name
docker stop container_name
docker restart container_name
docker exec -it container_name /bin/sh
```

## System

以下命令依次为：

1. 删除所有未使用的镜像、容器和数据卷
2. 查看 docker 的性能占用情况

```bash
docker system prune -a
docker stats
```
