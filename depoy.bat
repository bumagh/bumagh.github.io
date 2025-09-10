@echo off
echo ====================================
echo   开始构建和部署流程
echo ====================================

echo 步骤 1: 执行 npm run build...
call npm run docs:build

if %errorlevel% neq 0 (
    echo.
    echo 构建失败! 请检查错误信息。
    pause
    exit /b 1
)

echo.
echo 构建成功! 开始部署...
echo.

echo 步骤 2: 执行部署脚本...
powershell -ExecutionPolicy Bypass -File "pub.ps1"

if %errorlevel% neq 0 (
    echo.
    echo 部署失败! 请检查错误信息。
    pause
    exit /b 1
)

echo.
echo ====================================
echo   构建和部署完成!
echo ====================================
pause