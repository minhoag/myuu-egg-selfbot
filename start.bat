@echo off
:: Check if Node.js is installed
node -v >nul 2>&1

:: Check if Node.js is installed and capture the version
for /f "delims=" %%i in ('node -v') do set node_version=%%i

:: If Node.js is not installed, install it
if %errorlevel% neq 0 (
    echo Node.js is not installed. Installing Node.js...
    :: Download and install Node.js (using the latest LTS version)
    powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi -OutFile nodejs-installer.msi"
    msiexec /i nodejs-installer.msi /quiet /norestart
    echo Node.js has been installed.
) else (
    echo Node.js is already installed. Version: %node_version%
)

:: Clean up the installer
if exist nodejs-installer.msi del nodejs-installer.msi

:: Check if node_modules directory exists
if exist node_modules (
    echo node_modules folder already exists. Skipping npm install.
) else (
    :: Run npm install if node_modules does not exist
    echo Running npm install...
    npm install

    :: Check if npm install was successful
    if %errorlevel% == 0 (
        echo npm install completed successfully!
    ) else (
        echo There was an error running npm install.
        pause
        exit /b
    )
)

:: Ask if the user has filled in the .env file
echo Have you filled in the .env file with the necessary configurations? (y/n)
set /p user_input=Your choice: 

if /i "%user_input%" NEQ "y" (
    echo Please fill in the .env file before proceeding.
    pause
    exit /b
)

:: Ask the user if they want to start the application
echo Do you want to start the application now? (y/n)
set /p start_choice=Your choice: 

if /i "%start_choice%" == "y" (
    echo Starting the application...
    node index.js
) else (
    echo Application will not start. Exiting...
)

:: Keep the command window open
pause
