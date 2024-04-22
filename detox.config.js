module.exports = {
    configurations: {
      ios: {
        device: {
          type: 'ios.simulator',
        },
        app: {
          binaryPath: './ios_binary/pokeStore.app',
        },
        build: {
          // Update build command as needed
          command: 'xcodebuild -workspace pokeStore.xcworkspace -scheme pokeStore -configuration Debug -sdk iphonesimulator',
        },
      },
      android: {
        device: {
          type: 'android.emulator',
        },
        app: {
          binaryPath: './adroid/app/release/app.apk',
        },
        build: {
          // Update build command as needed
          command: './gradlew assembleDebug',
          // command: './gradlew assembleRelease',
        },
      },
    },
  };