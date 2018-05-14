'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _addonInfo = require('@storybook/addon-info');

var _storybookReactRouter = require('storybook-react-router');

var _storybookReactRouter2 = _interopRequireDefault(_storybookReactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Link', module).addDecorator((0, _storybookReactRouter2.default)()).add('Link', (0, _addonInfo.withInfo)('\n      \n      \n      ~~~js\n      <Link />\n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Link2.default,
      { to: '/Boom' },
      'React Router link'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Link2.default,
      { to: 'http://coston.io' },
      'Regular link, opens new tab'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Link2.default,
      { to: '305-205-4353' },
      'Children not rendered'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Link2.default,
      { to: 'hello@ua.edu' },
      'Children not rendered'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Link2.default,
      { to: '33.2084338,-87.5472800' },
      'Map to East Annex'
    ),
    _react2.default.createElement('br', null)
  );
}));