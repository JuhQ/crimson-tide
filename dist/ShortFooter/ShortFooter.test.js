'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SmFooter = require('../src/SmFooter');

var _SmFooter2 = _interopRequireDefault(_SmFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Render SmFooter', function () {
  var wrapper = shallow(_react2.default.createElement(_SmFooter2.default, null));
  expect(wrapper).toMatchSnapshot();
});