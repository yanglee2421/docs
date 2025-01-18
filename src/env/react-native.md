# React Native

only windows

## Installation

```powershell
# Install chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install JDK
choco install -y microsoft-openjdk17

# Add Env ANDROID_HOME %USERPROFILE%\android_sdk
# Add Path %ANDROID_HOME%\cmdline-tools\latest\bin
# Install Android SDK
sdkmanager "platform-tools" "build-tools;34.0.0"

# Install Emulator
sdkmanager "emulator" "platforms;android-34" "system-images;android-34;google_apis;x86_64"
avdmanager create avd -n emulatorName -k "system-images;android-34;google_apis;x86_64" -d "pixel"
```
