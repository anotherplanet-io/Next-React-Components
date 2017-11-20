'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithScrollReveal = undefined;

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

var _reactDom = require('react-dom');

var _scrollreveal = require('scrollreveal');

var _scrollreveal2 = _interopRequireDefault(_scrollreveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithScrollReveal = exports.WithScrollReveal = function WithScrollReveal(Original) {
  return function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

      _this.target = [];
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        (0, _scrollreveal2.default)().reveal(this.target, this.props.options, this.props.interval);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        (0, _scrollreveal2.default)().clean(this.childNodes);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var children = _react2.default.Children.map(this.props.children, function (child) {
          return _react2.default.cloneElement(child, {
            ref: function ref(c) {
              return _this2.target.push((0, _reactDom.findDOMNode)(c));
            }
          });
        });
        return _react2.default.createElement(
          Original,
          this.props,
          children
        );
      }
    }]);
    return _class;
  }(_react.Component);
};

exports.default = WithScrollReveal;