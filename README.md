# Gauges

## Prereqs

You need a mac.
Install xcode from the App Store.
Install command line tools `xcode-select --install`.
Install cocoapods `sudo gem install cocoapods`.
Install `npm` and run `npm i`. Use the Node version in `.nvmrc` (`nvm use`).
Run `npm run build`.

For Android you also need Android Studio (for the SDK and an emulator) and JDK 21
— Capacitor 8 will not build on 17 or 24. `brew install openjdk@21`, then point
gradle at it with `JAVA_HOME=/opt/homebrew/opt/openjdk@21`.

Angular 11 runs on webpack 4, which needs `--openssl-legacy-provider` on modern
Node. `npm run build` already sets it; note that the flag is *rejected* by Node
16 and older, so the Node version and that flag have to move together.

### Development

Run `npm run build` before anything else.

#### iOS

##### App icon
An iOS app needs many icon images in different sizes. Use [appiconmaker](https://appiconmaker.co) to generate all sizes from a 1024x1024 PNG. 216x216 won't be generated, use another tool to resize it.

## Build

### iOS

For a dev build, run `npm run ios` and the product will connect to your IP address. For a production build run `npm run build` which will build the angular/ionic app and copy it into XCode. Navigate into `ios/App` and run `pod install`. Run XCode and click run.

#### Distribution

Bump the project version in the `General` tab, `Build` field. Use the format `YYYYMMDD000001` where 1 is the build number for the day (i.e. if you need to build more than once a day, bump this too).

Hit `Cmd + B` or go to `Product > Build`. Run `Product > Archive`. Open `Window > Organizer`. Select the correct version and validate it with `Validate App`. Once this is done, click `Distribute App`.

Head to [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/). Click on `Apps`, then `Gauges: Manage recurring tasks`, then `Activity`. Your build will be in `Processing` status.

### Android

Run `npm run build` first — it builds the Angular app into `www` and copies it
into `android/app/src/main/assets/public`. The native project reads from there,
so skipping it means you ship whatever web assets were copied last time.

```bash
npm run build && cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew bundleRelease
```

The bundle lands in `android/app/build/outputs/bundle/release/app-release.aab`.

#### Versioning

`versionName` is read from `package.json` at build time, so bump the version
there — not in the gradle file. `versionCode` is a separate monotonic integer in
`android/app/build.gradle` and must be incremented by hand on **every** upload;
Play rejects a bundle whose `versionCode` it has already seen. It does not have
to relate to `versionName`.

Both are committed. Do not bump them only in Android Studio — that is how the
native project silently drifted out of sync with this repo for years.

#### Signing

The upload keystore is **not** in this repo and must never be committed. Copy
`android/keystore.properties.example` to `android/keystore.properties` (which is
gitignored) and fill it in from Bitwarden, where the `.jks` lives as a file
attachment alongside the passwords. Point `storeFile` at a copy of the `.jks`
kept outside the repo.

Without `keystore.properties` the release build still succeeds but is unsigned,
so fresh clones and CI keep working. Play will reject an unsigned bundle.

#### Distribution

Upload the `.aab` at [Play Console](https://play.google.com/console) under
`Test and release`. Push to internal testing first, then promote to production.

Google requires the target API level to stay within one year of the latest
Android release, so `targetSdkVersion` in `android/variables.gradle` needs
bumping roughly annually. Raising it can change runtime behaviour — Android 16
(API 36) forced edge-to-edge with no opt-out, for instance — so always check the
app on an emulator of the new API level rather than only checking that it builds.

## Troubleshooting

If the command line tools give problems, try this: `sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer`
