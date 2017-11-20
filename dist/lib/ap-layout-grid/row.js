'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defaultTheme = require('./default-theme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$grid = _ref.grid,
      grid = _ref$grid === undefined ? {} : _ref$grid,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'grid']);

  var g = (0, _deepmerge2.default)(_defaultTheme2.default, grid);
  return React.createElement(
    'div',
    props,
    children,
    React.createElement(
      'style',
      { jsx: true },
      '\n\n        /* phone */\n        div {\n          display: flex;\n          flex-flow: row wrap;\n          align-items: stretch;\n          margin: ' + g.phone.margin / 2 * -1 + 'px;\n        }\n\n        /* tablet */\n        @media (min-width: ' + g.tablet.breakpoints + 'px) and (max-width: ' + (g.desktop.breakpoints - 1) + 'px) {\n          div {\n            margin: ' + g.tablet.margin / 2 * -1 + 'px;\n          }\n        }\n\n        /* desktop */\n        @media (min-width: ' + g.desktop.breakpoints + 'px) {\n          div {\n            margin: ' + g.desktop.margin / 2 * -1 + 'px;\n          }\n        }\n\n        @supports(display: grid) {\n          div {\n            display: grid;\n            margin: 0;\n            grid-gap: ' + g.phone.gutter + 'px;\n            grid-template-columns: repeat(' + g.phone.columns + ', minmax(0, 1fr));\n          }\n\n          /* tablet */\n          @media (min-width: ' + g.tablet.breakpoints + 'px) and (max-width: ' + (g.desktop.breakpoints - 1) + 'px) {\n            div {\n              grid-gap: ' + g.tablet.gutter + 'px;\n              grid-template-columns: repeat(' + g.tablet.columns + ', minmax(0, 1fr));\n            }\n          }\n\n          /* desktop */\n          @media (min-width: ' + g.desktop.breakpoints + 'px) {\n            div {\n              grid-gap: ' + g.desktop.gutter + 'px;\n              grid-template-columns: repeat(' + g.desktop.columns + ', minmax(0, 1fr));\n            }\n          }\n        }\n\n      '
    )
  );
};