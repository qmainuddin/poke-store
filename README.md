# poke-store
This is a mobile application for the Pokemon enthusiasts where the user can explore, select and purchase Pokemon in an intuitive way.

## Getting started
Please follow the steps to properly run the project.

### Requirements
  - npm: '10.2.3',
  - node: '20.10.0',

#### Step 1
Clone the project.

#### Step 2
First go to the project folder by

```bash
  cd poke-store
```

#### Step 4
Run the following command:
```bash
  npm install
```

#### Follow instruction for iOS

RUN this command:
```bash
  cd ios/ && pod install && cd ..
```

Open the pokeStore.xcodeproj file in Xcode as project

Run the project from Xcode.

To do E2E, build the project from terminal:

```bash
    xcodebuild -workspace pokeStore.xcworkspace -scheme pokeStore -configuration Debug -sdk iphonesimulator
```

Replace: 
```bash
    binaryPath: './ios_binary/pokeStore.app',
```
with your binary file location in detox.config.js file.

#### Follow instruction for Android

1. Load the project into Android Studio
2. Connect to emulator or your device
3. run the following command to start metro server
```bash
  npm start
```
4. Run the command if you are using real device to connect 
```bash
  adb reverse tcp:8081 tcp:8081
```
5. Run the project from Android Studio

#### Detailed documentation
Please follow the [Google Doc link](https://docs.google.com/document/d/1rZYuXrRnPHuePlCBTSgxPfxFxislYWD3szMWNZLFaqU/edit?usp=sharing) for more details about the project.
