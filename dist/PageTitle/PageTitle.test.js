'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageTitle = require('../src/PageTitle');

var _PageTitle2 = _interopRequireDefault(_PageTitle);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PageTitle', function () {

  // test('renders the document title via Helmet', () => {
  //   const wrapper = shallow(
  //     <PageTitle name="Amazing Page" />
  //   );
  //   console.log(wrapper.find(Helmet))
  //   expect(wrapper.find(Helmet).length).toBe(1);
  //   expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  // });

  // test('renders the document title via Helmet', () => {
  //   const wrapper = shallow(
  //     <PageTitle name="Amazing Page" />
  //   );
  //   console.log(wrapper.find(Helmet))
  //   expect(wrapper.find(Helmet).length).toBe(1);
  //   expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  // });

  test('Render PageTitle with all props', function () {
    var wrapper = shallow(_react2.default.createElement(_PageTitle2.default, {
      name: 'Contact',
      description: 'foo',
      keywords: 'bar',
      image: 'baz',
      site: 'OIRA'
    }));
    expect(wrapper).toMatchSnapshot();
  });

  test('Render PageTitle with noHeader and no site prop', function () {
    var wrapper = shallow(_react2.default.createElement(_PageTitle2.default, {
      name: 'Contact',
      description: 'foo',
      keywords: 'bar',
      image: 'baz'
    }));
    expect(wrapper).toMatchSnapshot();
  });
});