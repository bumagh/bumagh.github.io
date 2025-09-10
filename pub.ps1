# deploy.ps1
# 增强版 PowerShell 部署脚本

param(
    [string]$LocalDir = ".\docs\.vitepress\dist\",
    [string]$RemoteDir = "/www/wwwroot/tutlab.tech/",
    [string]$Server = "root@tutlab.tech"
)

# 设置错误处理
$ErrorActionPreference = "Stop"

function Write-Info {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Green
}

function Write-Error {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Red
}

Write-Info "开始部署文件到服务器..."

# 检查本地目录是否存在
if (-not (Test-Path -Path $LocalDir -PathType Container)) {
    Write-Error "错误: 本地目录 $LocalDir 不存在"
    exit 1
}

# 检查目录是否为空
if ((Get-ChildItem -Path $LocalDir | Measure-Object).Count -eq 0) {
    Write-Error "错误: 本地目录 $LocalDir 为空"
    exit 1
}

try {
    Write-Info "正在上传文件..."
    # 执行部署
    scp -r "${LocalDir}*" "${Server}:${RemoteDir}"
    Write-Info "部署完成!"
}
catch {
    Write-Error "部署过程中出现错误: $($_.Exception.Message)"
    exit 1
}