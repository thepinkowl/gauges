package io.ionic.starter;

import android.content.res.Configuration;
import android.webkit.WebSettings;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    void setDarkMode() {
        // Android "fix" for enabling dark mode
        // @see: https://github.com/ionic-team/capacitor/discussions/1978
        int nightModeFlags = getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
        WebSettings webSettings = this.bridge.getWebView().getSettings();
        if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                // As of Android 10, you can simply force the dark mode
                webSettings.setForceDark(WebSettings.FORCE_DARK_ON);
            }
            // Before Android 10, we need to use a CSS class based fallback
            this.bridge.getWebView().evaluateJavascript("document.body.classList.toggle('dark', true);", null);
        } else {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                webSettings.setForceDark(WebSettings.FORCE_DARK_OFF);
            }
            this.bridge.getWebView().evaluateJavascript("document.body.classList.toggle('dark', false);", null);
        }
    }

    @Override
    public void onStart() {
        super.onStart();
        setDarkMode();
    }

    @Override
    public void onResume() {
        super.onResume();
        setDarkMode();
    }
}
