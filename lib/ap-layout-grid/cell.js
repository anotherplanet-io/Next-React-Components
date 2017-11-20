'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _defaultTheme = require('./default-theme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === undefined ? {} : _ref$children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme,
      _ref$phone = _ref.phone,
      phone = _ref$phone === undefined ? null : _ref$phone,
      _ref$tablet = _ref.tablet,
      tablet = _ref$tablet === undefined ? null : _ref$tablet,
      _ref$desktop = _ref.desktop,
      desktop = _ref$desktop === undefined ? null : _ref$desktop,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'theme', 'phone', 'tablet', 'desktop']);

  var g = (0, _deepmerge2.default)(_defaultTheme2.default, theme);
  if (phone !== null) g.phone.span = phone;
  if (tablet !== null) g.tablet.span = tablet;
  if (desktop !== null) g.desktop.span = desktop;
  return _react2.default.createElement(
    'div',
    props,
    children,
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n\n        /* phone */\n        div {\n          width: calc(33.33333% - ' + g.phone.gutter + 'px);\n          margin: ' + g.phone.margin / 2 + 'px;\n          box-sizing: border-box;\n        }\n\n        @supports(display: grid) {\n\n          div {\n            margin: 0;\n            width: auto;\n            grid-column-end: span ' + g.phone.span + ';\n          }\n\n          /* tablet */\n          @media (min-width: ' + g.tablet.breakpoints + 'px) and (max-width: ' + (g.desktop.breakpoints - 1) + 'px) {\n            div {\n              grid-column-end: span ' + g.tablet.span + ';\n            }\n          }\n\n          /* desktop */\n          @media (min-width: ' + g.desktop.breakpoints + 'px) {\n            div {\n              grid-column-end: span ' + g.desktop.span + ';\n            }\n          }\n        }\n\n      '
    )
  );
};