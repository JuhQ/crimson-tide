'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _chimeIn = require('./chime-in.svg');

var _chimeIn2 = _interopRequireDefault(_chimeIn);

var _gdgd = require('./gdgd.svg');

var _gdgd2 = _interopRequireDefault(_gdgd);

var _oiraLogo = require('./oira-logo.svg');

var _oiraLogo2 = _interopRequireDefault(_oiraLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BG = { backgroundImage: 'linear-gradient(to right, #7474bf, #348ac7)' };

(0, _react3.storiesOf)('Logos', module).add('ChimeIn', (0, _addonInfo.withInfo)('\n      \n      ~~~js\n      {ChimeIn}\n      ~~~\n    \n    ')(function () {
    return _react2.default.createElement('img', { style: BG, src: _chimeIn2.default });
}));

(0, _react3.storiesOf)('Logos', module).add('Good Data, Good Decisions', (0, _addonInfo.withInfo)('\n      \n      ~~~js\n      {GDGD}\n      ~~~\n    \n    ')(function () {
    return _react2.default.createElement('img', { style: BG, src: _gdgd2.default });
}));

(0, _react3.storiesOf)('Logos', module).add('OIRA Logo', (0, _addonInfo.withInfo)('\n      \n      ~~~js\n      {OIRALogo}\n      ~~~\n    \n    ')(function () {
    return _react2.default.createElement('img', { style: BG, src: _oiraLogo2.default });
}));