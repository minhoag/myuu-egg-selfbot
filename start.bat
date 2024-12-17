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

:: Check if Git is installed
git --version >nul 2>&1

:: If Git is not installed, install it
if %errorlevel% neq 0 (
    echo Git is not installed. Installing Git...
    :: Download and install Git (using the latest version)
    powershell -Command "Invoke-WebRequest -Uri https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.1/Git-2.42.0-64-bit.exe -OutFile git-installer.exe"
    start /wait git-installer.exe /VERYSILENT /NORESTART
    echo Git has been installed.
) else (
    for /f "delims=" %%i in ('git --version') do set git_version=%%i
    echo Git is already installed. Version: %git_version%
)

:: Clean up the installer
if exist git-installer.exe del git-installer.exe

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

:: Check if .env exists
if exist .env (
    echo .env file already exists. Skipping copy.
) else (
    :: Check if .env.example exists and copy it to .env
    if exist .env.example (
        echo .env.example file found. Copying it to .env...
        copy .env.example .env

        :: Ask the user to fill in the .env file
        echo Please fill in the .env file with your TOKEN and CHANNEL_ID.
        pause
    )
)

:: Ask if the user has filled in the .env file
echo Have you filled in the .env file with your TOKEN and CHANNEL_ID? (y/n)
set /p user_input=Your choice:

if /i "%user_input%" NEQ "y" (
    echo Please add your TOKEN and CHANNEL_ID into .env file before proceeding.
    pause
    exit /b
)

:: Check if the current directory is a git repository
git rev-parse --is-inside-work-tree >nul 2>&1

:: If not a git repository, initialize a new git repository
if %errorlevel% neq 0 (
    echo Initializing a new git repository...
    git init
    git remote add origin https://github.com/minhoag/myuu-egg-selfbot.git
)

:: Fetch the latest changes from the public repository
echo Fetching the latest version of the software...
git fetch origin main
git reset --hard FETCH_HEAD

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