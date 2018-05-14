'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _Tabs = require('./Tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Tabs', module).add('Default', (0, _addonInfo.withInfo)('\n      A minimal white footer. Links open new tabs or maps, or obfuscated contact methods (i.e. email.)\n      ~~~js\n      <Tabs>\n          <Tab\n            title="Division/College/School"\n            render={() => (\n              <p>Wow</p>\n            )}\n          />\n\n          <Tab\n            title="Job Category"\n            render={() => (\n              <p>Neat</p>\n            )}\n          />\n        </Tabs>\n      ~~~\n    \n    ')(function () {
  return _react2.default.createElement(
    _Tabs.Tabs,
    null,
    _react2.default.createElement(_Tabs.Tab, {
      title: 'Tab One',
      render: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'First Tab'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Wow'
          )
        );
      }
    }),
    _react2.default.createElement(_Tabs.Tab, {
      title: 'Tab Two',
      render: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Second Tab'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Neat'
          )
        );
      }
    })
  );
}));