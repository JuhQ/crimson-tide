'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Main = require('../src/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Render Main', function () {
  var wrapper = shallow(_react2.default.createElement(
    _Main2.default,
    null,
    'Hello Jest!'
  ));
  expect(wrapper).toMatchSnapshot();
});