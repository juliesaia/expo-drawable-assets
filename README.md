# expo-drawable-assets

Config plugin for copying Android drawable assets into a React Native project.

Useful for Android [Expo Router native tabs](https://docs.expo.dev/router/advanced/native-tabs/)

# Installation in managed Expo projects

Add the plugin to your Expo app config:

```
"plugins": [
  [
    "expo-drawable-assets",
    "./assets/drawables"
  ]
]
```

Any assets in the specified path will be copied to the `app/src/main/res/drawable` directory.

# Installation in bare React Native projects

If you're on bare React Native you should probably just copy the assets manually...

### Add the package to your npm dependencies

```
bun i -d expo-drawable-assets
```
