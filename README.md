# Gauges

## Prereqs

You need a mac.
Install xcode from the App Store.
Install command line tools `xcode-select --install`.
Install cocoapods `sudo gem install cocoapods`.
Install `npm` and run `npm i`.
Run `npm run build`.

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

## Troubleshooting

If the command line tools give problems, try this: `sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer`
