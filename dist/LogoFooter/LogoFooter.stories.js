'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _storybookReactRouter = require('storybook-react-router');

var _storybookReactRouter2 = _interopRequireDefault(_storybookReactRouter);

var _LogoFooter = require('./LogoFooter');

var _LogoFooter2 = _interopRequireDefault(_LogoFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Footer', module).addDecorator((0, _storybookReactRouter2.default)()).add('LogoFooter', (0, _addonInfo.withInfo)('\n      A minimal white footer. Links open new tabs or maps, or obfuscated contact methods (i.e. email.)\n      \n      ~~~js\n      <LogoFooter />\n      ~~~\n    \n    ')(function () {
    return _react2.default.createElement(_LogoFooter2.default, null);
}));