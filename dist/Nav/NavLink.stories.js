'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _storybookReactRouter = require('storybook-react-router');

var _storybookReactRouter2 = _interopRequireDefault(_storybookReactRouter);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLinks = [{ title: 'Planning Group', path: '/planning-group' }, { title: 'Steering Committee', path: '/steering-committee' }, { title: 'FAQ', path: '/faq' }, { title: 'Resources', path: '/resources' }];

(0, _react3.storiesOf)('Navigation', module).addDecorator((0, _storybookReactRouter2.default)()).add('NavLink', (0, _addonInfo.withInfo)('\n      \n      ~~~js\n      \n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(
    _NavLink2.default,
    {
      color: 'green',
      to: '/resources'
    },
    'Resources'
  );
}));