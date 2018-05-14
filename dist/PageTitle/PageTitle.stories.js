'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _PageTitle = require('./PageTitle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('PageTitle', module).add('PageTitle', (0, _addonInfo.withInfo)('\n      \n      \n      ~~~js\n      <PageTitle \n        name="Contact"\n        description="foo"\n        keywords="bar"\n        image="baz"\n        site="OIRA"\n      /> \n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(_PageTitle.PageTitle, {
    name: 'Title, h1, hr, & meta',
    description: 'foo',
    keywords: 'bar',
    image: 'baz',
    site: 'OIRA'
  });
}));