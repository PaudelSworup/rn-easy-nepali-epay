function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { WebView } from "react-native-webview";
import { styles } from "./styles";
const Webview = ({
  source,
  ...props
}) => /*#__PURE__*/React.createElement(WebView, _extends({}, props, {
  source: source,
  domStorageEnabled: true,
  javaScriptEnabled: true,
  startInLoadingState: true,
  style: styles.webView,
  originWhitelist: ["*"],
  swipeDirection: ["up", "down"],
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
}));
export default Webview;
//# sourceMappingURL=Webview.js.map