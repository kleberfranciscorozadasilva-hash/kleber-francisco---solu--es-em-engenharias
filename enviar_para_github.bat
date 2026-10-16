@echo off
chcp 65001 >nul
echo ===================================================
echo   Enviando projeto para o GitHub
echo ===================================================
echo.

echo 1. Adicionando arquivos...
git add -A

echo.
echo 2. Criando commit com mensagem "primeiro envio"...
git commit -m "primeiro envio"

echo.
echo 3. Enviando para o repositorio remoto (push)...
git push -u origin main

echo.
echo Concluido!
pause
