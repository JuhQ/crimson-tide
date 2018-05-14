'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _storybookReactRouter = require('storybook-react-router');

var _storybookReactRouter2 = _interopRequireDefault(_storybookReactRouter);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _chimeIn = require('../logos/chime-in.svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLinks = [{ title: 'Planning Group', path: '/planning-group' }, { title: 'Steering Committee', path: '/steering-committee' }, { title: 'FAQ', path: '/faq' }, { title: 'Resources', path: '/resources' }];

(0, _react3.storiesOf)('Navigation', module).addDecorator((0, _storybookReactRouter2.default)()).add('Nav', (0, _addonInfo.withInfo)('\n      - A basic navbar. \n      - Great for quick site spin-up. \n      \n      ## Usage\n      \n      ~~~js\n      import { Nav, ChimeIn, NavLink } from \'../../src/index\'\n\n      <Nav background="rebeccapurple" image={ChimeIn}>\n        <NavLink color="rebeccapurple" to="/LINK1">\n          LINK1\n        </NavLink>\n        <NavLink color="rebeccapurple" to="/LINK2">\n          LINK2\n        </NavLink>\n        <NavLink color="rebeccapurple" to="/LINK3">\n          LINK3\n        </NavLink>\n      </Nav>\n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(
    _Nav2.default,
    { background: 'rebeccapurple', image: _chimeIn.ChimeIn },
    _react2.default.createElement(
      _NavLink2.default,
      { color: 'rebeccapurple', to: '/LINK1' },
      'LINK1'
    ),
    _react2.default.createElement(
      _NavLink2.default,
      { color: 'rebeccapurple', to: '/LINK2' },
      'LINK2'
    ),
    _react2.default.createElement(
      _NavLink2.default,
      { color: 'rebeccapurple', to: '/LINK3' },
      'LINK3'
    )
  );
}));