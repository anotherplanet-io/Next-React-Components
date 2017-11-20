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

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_Component) {
  (0, _inherits3.default)(Container, _Component);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call.apply(_ref, [this].concat(args))), _this), _this.createMarkup = function (src) {
      var code = _highlight2.default.highlightAuto(src);
      return { __html: code.value };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$src = _props.src,
          src = _props$src === undefined ? '' : _props$src,
          _props$language = _props.language,
          language = _props$language === undefined ? '' : _props$language,
          props = (0, _objectWithoutProperties3.default)(_props, ['src', 'language']);

      return _react2.default.createElement(
        'pre',
        props,
        _react2.default.createElement('code', { className: language, dangerouslySetInnerHTML: this.createMarkup(src) }),
        _react2.default.createElement(
          'style',
          { jsx: true },
          '\n\n          pre {\n            display: block;\n            overflow-x: auto;\n            padding: 0.5em;\n            color: #333;\n            background: #f8f8f8;\n          }\n\n          pre :global(.hljs-comment),\n          pre :global(.hljs-quote) {\n            color: #998;\n            font-style: italic;\n          }\n\n          pre :global(.hljs-keyword),\n          pre :global(.hljs-selector-tag),\n          pre :global(.hljs-subst) {\n            color: #333;\n            font-weight: bold;\n          }\n\n          pre :global(.hljs-number),\n          pre :global(.hljs-literal),\n          pre :global(.hljs-variable),\n          pre :global(.hljs-template-variable),\n          pre :global(.hljs-tag .hljs-attr) {\n            color: #008080;\n          }\n\n          pre :global(.hljs-string),\n          pre :global(.hljs-doctag) {\n            color: #d14;\n          }\n\n          pre :global(.hljs-title),\n          pre :global(.hljs-section),\n          pre :global(.hljs-selector-id) {\n            color: #900;\n            font-weight: bold;\n          }\n\n          pre :global(.hljs-subst) {\n            font-weight: normal;\n          }\n\n          pre :global(.hljs-type),\n          pre :global(.hljs-class .hljs-title) {\n            color: #458;\n            font-weight: bold;\n          }\n\n          pre :global(.hljs-tag),\n          pre :global(.hljs-name),\n          pre :global(.hljs-attribute) {\n            color: #000080;\n            font-weight: normal;\n          }\n\n          pre :global(.hljs-regexp),\n          pre :global(.hljs-link) {\n            color: #009926;\n          }\n\n          pre :global(.hljs-symbol),\n          pre :global(.hljs-bullet) {\n            color: #990073;\n          }\n\n          pre :global(.hljs-built_in),\n          pre :global(.hljs-builtin-name) {\n            color: #0086b3;\n          }\n\n          pre :global(.hljs-meta) {\n            color: #999;\n            font-weight: bold;\n          }\n\n          pre :global(.hljs-deletion) {\n            background: #fdd;\n          }\n\n          pre :global(.hljs-addition) {\n            background: #dfd;\n          }\n\n          pre :global(.hljs-emphasis) {\n            font-style: italic;\n          }\n\n          pre :global(.hljs-strong) {\n            font-weight: bold;\n          }\n\n        '
        )
      );
    }
  }]);
  return Container;
}(_react.Component);

exports.default = Container;