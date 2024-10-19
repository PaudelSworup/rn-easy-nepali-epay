"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeWebview = require("react-native-webview");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Webview = ({
  source,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, _extends({}, props, {
  source: source,
  domStorageEnabled: true,
  javaScriptEnabled: true,
  startInLoadingState: true,
  style: _styles.styles.webView,
  originWhitelist: ["*"],
  swipeDirection: ["up", "down"],
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
}));
var _default = exports.default = Webview;
//# sourceMappingURL=Webview.js.map