'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _storybookReactRouter = require('storybook-react-router');

var _storybookReactRouter2 = _interopRequireDefault(_storybookReactRouter);

var _LightNav = require('./LightNav');

var _LightNav2 = _interopRequireDefault(_LightNav);

var _LightLink = require('./LightLink');

var _LightLink2 = _interopRequireDefault(_LightLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LightLinks = [{ title: 'Planning Group', path: '/planning-group' }, { title: 'Steering Committee', path: '/steering-committee' }, { title: 'FAQ', path: '/faq' }, { title: 'Resources', path: '/resources' }];

(0, _react3.storiesOf)('Navigation', module).addDecorator((0, _storybookReactRouter2.default)()).add('LightNav', (0, _addonInfo.withInfo)('\n      - A basic navbar. \n      - Great for quick site spin-up. \n      - Add nav links via array of objects to the links attribute.\n      \n      ## Usage\n      \n      ~~~js\n      import { Nav, ChimeIn } from \'crimson-tide\'\n\n\n      <Nav image={ChimeIn}/>\n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(
    _LightNav2.default,
    null,
    _react2.default.createElement(
      _LightLink2.default,
      { to: '/mission/' },
      'Mission'
    ),
    ' | ',
    _react2.default.createElement(
      _LightLink2.default,
      { to: '/reports/' },
      'Reports'
    ),
    ' | ',
    _react2.default.createElement(
      _LightLink2.default,
      { to: 'http://oira.ua.edu/factbook' },
      'Factbook'
    ),
    ' | ',
    _react2.default.createElement(
      _LightLink2.default,
      { to: '/requests/' },
      'Requests'
    ),
    ' | ',
    _react2.default.createElement(
      _LightLink2.default,
      { to: '/staff/' },
      'Staff'
    ),
    ' | ',
    _react2.default.createElement(
      _LightLink2.default,
      { to: '/resources/' },
      'Resources'
    )
  );
}));