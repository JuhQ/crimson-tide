'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _addonInfo = require('@storybook/addon-info');

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Main Wrapper', module).add('Main', (0, _addonInfo.withInfo)('\n      Main content wrapper.\n      ### Usage\n      ~~~js\n        import { Main } from \'crimson-tide\'\n\n        <Main>{children}</Main>\n      ~~~\n\n      ### Built In Styles\n      ~~~js\n        margin:  \'1em auto\',\n        maxWidth: 960,\n        minHeight: 500,\n        padding: \'0px 1.0875rem 1.45rem\',\n    \n    ')(function () {
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'A Wrapper'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wraps main contents in ',
      '<main>',
      ' tags and adds margin, max-width, min-height, and padding.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The content inside the ',
      '<main>',
      ' element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Note: There must not be more than one ',
      '<main>',
      ' element in a document. The ',
      '<main>',
      ' element must NOT be a descendant of an ',
      '<article>',
      ', ',
      '<aside>',
      ', ',
      '<footer>',
      ', ',
      '<header>',
      ', or ',
      '<nav>',
      ' element.'
    )
  );
}));