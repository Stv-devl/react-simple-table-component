"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var List = function List(_ref) {
  var legend = _ref.legend,
    datas = _ref.datas;
  return /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, legend.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: index
    }, item.label);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, datas.map(function (worker, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, legend.map(function (item, idx) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: idx
      }, worker[item.name]);
    }));
  })));
};
var _default = exports["default"] = List;
/*
  const datas = [
    {
      firstname: "Emma",
      lastname: "Wilson",
      birthday: "2000/12/02",
    },
    {
      firstname: "Oliver",
      lastname: "Martinez",
      birthday: "2000/12/02",
    },
  ];

  const legend = [
    {
      name: "firstname",
      label: "First name",
    },
    {
      name: "lastname",
      label: "Last Name",
    },
    {
      name: "birthday",
      label: "Date of birth",
    },
  ];*/