@echo off
echo =====================================================
echo   Creando Base de Datos para ELECDATOS
echo =====================================================
echo.

REM Verificar si MySQL está corriendo
tasklist /FI "IMAGENAME eq mysqld.exe" 2>NUL | find /I /N "mysqld.exe">NUL
if "%ERRORLEVEL%"=="1" (
    echo [ERROR] MySQL no está corriendo.
    echo Por favor, inicia MySQL desde el Panel de XAMPP.
    pause
    exit /b 1
)

echo [OK] MySQL está corriendo.
echo.
echo Creando base de datos 'elecdatos_db'...
echo.

C:\xampp\mysql\bin\mysql.exe -u root --skip-password -e "CREATE DATABASE IF NOT EXISTS elecdatos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; SHOW DATABASES;"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [EXITO] Base de datos creada correctamente.
    echo.
) else (
    echo.
    echo [ERROR] No se pudo crear la base de datos.
    echo Intenta crearla manualmente desde phpMyAdmin:
    echo http://localhost/phpmyadmin
    echo.
)

pause
