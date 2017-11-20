'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _defaultTheme = require('./default-theme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_Component) {
  (0, _inherits3.default)(Container, _Component);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$children = _props.children,
          children = _props$children === undefined ? {} : _props$children,
          _props$grid = _props.grid,
          grid = _props$grid === undefined ? {} : _props$grid,
          _props$maxWidth = _props.maxWidth,
          maxWidth = _props$maxWidth === undefined ? null : _props$maxWidth,
          _props$align = _props.align,
          align = _props$align === undefined ? null : _props$align,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'grid', 'maxWidth', 'align']);

      var g = (0, _deepmerge2.default)(_defaultTheme2.default, grid);
      var maxWidthString = maxWidth !== null ? 'max-width: ' + maxWidth + ';' : '';
      var alignString = void 0;
      switch (align) {
        case 'left':
          alignString = 'margin: 0 auto 0 0;';
          break;
        case 'right':
          alignString = 'margin: 0 0 0 auto;';
          break;
        default:
          alignString = 'margin: 0 auto;';
      }
      return _react2.default.createElement(
        'div',
        props,
        children,
        _react2.default.createElement(
          'style',
          { global: true, jsx: true },
          '\n          body {\n            margin: 0;\n          }\n        '
        ),
        _react2.default.createElement(
          'style',
          { jsx: true },
          '\n\n          div { /* phone */\n            margin: 0;\n            padding: ' + g.phone.margin + 'px;\n            ' + maxWidthString + '\n            ' + alignString + '\n          }\n\n          /* tablet */\n          @media (min-width: ' + g.tablet.breakpoints + 'px) and (max-width: ' + (g.desktop.breakpoints - 1) + 'px) { /* desktop */\n            div {\n              padding: ' + g.tablet.margin + 'px;\n            }\n          }\n\n          @media (min-width: ' + g.desktop.breakpoints + 'px) { /* desktop */\n            div {\n              padding: ' + g.desktop.margin + 'px;\n            }\n          }\n        '
        )
      );
    }
  }]);
  return Container;
}(_react.Component);

exports.default = Container;