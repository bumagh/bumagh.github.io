#!/bin/bash
set -e  # 遇到错误立即退出

LOCAL_DIR="./docs/.vitepress/dist/"
REMOTE_DIR="/www/wwwroot/tutlab.tech/test/"
SERVER="root@tutlab.tech"

echo "开始部署文件到服务器..."

# 检查本地目录是否存在
if [ ! -d "$LOCAL_DIR" ]; then
    echo "错误: 本地目录 $LOCAL_DIR 不存在"
    exit 1
fi

# 执行部署
scp -r  "$LOCAL_DIR"* "$SERVER:$REMOTE_DIR"

echo "部署完成!"