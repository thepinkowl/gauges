import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.unstaticlabs.gauges",
  appName: "Gauges",
  webDir: "www",
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      launchShowDuration: 0,
    },
  },
};

export default config;
