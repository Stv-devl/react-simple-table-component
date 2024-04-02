"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Entries = _interopRequireDefault(require("./entries/Entries"));
var _List = _interopRequireDefault(require("./list/List"));
var _Paging = _interopRequireDefault(require("./paging/Paging"));
var _Search = _interopRequireDefault(require("./search/Search"));
var _ShowEntries = _interopRequireDefault(require("./showentries/ShowEntries"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Table = function Table(_ref) {
  var datas = _ref.datas,
    legend = _ref.legend;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Current Employees"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-header"
  }, /*#__PURE__*/_react["default"].createElement(_Entries["default"], null), /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    datas: datas,
    legend: legend
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-footer"
  }, /*#__PURE__*/_react["default"].createElement(_ShowEntries["default"], null), /*#__PURE__*/_react["default"].createElement(_Paging["default"], null)));
};
var _default = exports["default"] = Table;