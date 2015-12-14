'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibTooltip = require('react-bootstrap/lib/Tooltip');

var _reactBootstrapLibTooltip2 = _interopRequireDefault(_reactBootstrapLibTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var InputTip = (function (_React$Component) {
  _inherits(InputTip, _React$Component);

  function InputTip(props) {
    _classCallCheck(this, InputTip);

    _get(Object.getPrototypeOf(InputTip.prototype), 'constructor', this).call(this, props);
  }

  _createClass(InputTip, [{
    key: 'getTooltip',
    value: function getTooltip() {
      var style = arguments.length <= 0 || arguments[0] === undefined ? 'form-tooltip-default' : arguments[0];
      var content = arguments.length <= 1 || arguments[1] === undefined ? 'Defult Error' : arguments[1];
      var placement = arguments.length <= 2 || arguments[2] === undefined ? 'bottom' : arguments[2];

      return _react2['default'].createElement(
        _reactBootstrapLibTooltip2['default'],
        { id: style, placement: placement, className: 'in' },
        content
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.input.getDOMNode().value;
    }
  }, {
    key: 'render',
    value: function render() {

      // bsStyle : default info err warn success
      var _props = this.props;
      var _props$isShow = _props.isShow;
      var isShow = _props$isShow === undefined ? true : _props$isShow;
      var _props$bsStyle = _props.bsStyle;
      var bsStyle = _props$bsStyle === undefined ? 'default' : _props$bsStyle;
      var _props$tipMsg = _props.tipMsg;
      var tipMsg = _props$tipMsg === undefined ? '' : _props$tipMsg;
      var _props$tooltip = _props.tooltip;
      var tooltip = _props$tooltip === undefined ? null : _props$tooltip;
      var _props$groupClass = _props.groupClass;
      var groupClass = _props$groupClass === undefined ? (0, _classnames2['default'])('form-control', 'from-input') : _props$groupClass;

      var props = _objectWithoutProperties(_props, ['isShow', 'bsStyle', 'tipMsg', 'tooltip', 'groupClass']);

      switch (bsStyle) {
        case 'err':
          groupClass = (0, _classnames2['default'])(groupClass, 'from-input-err');
          tooltip = this.getTooltip('form-tooltip-err', tipMsg);
          break;
        case 'warn':
          groupClass = (0, _classnames2['default'])(groupClass, 'from-input-warn');
          tooltip = this.getTooltip('form-tooltip-warn', tipMsg);
          break;
        case 'info':
          groupClass = (0, _classnames2['default'])(groupClass, 'from-input-info');
          tooltip = this.getTooltip('form-tooltip-info', tipMsg);
          break;
        case 'success':
          groupClass = (0, _classnames2['default'])(groupClass, 'from-input-success');
          tooltip = this.getTooltip('form-tooltip-success', tipMsg);
          break;
        default:
          groupClass = groupClass;
          tooltip = null;
          break;
      }

      if (isShow) {
        return _react2['default'].createElement(
          'div',
          { className: groupClass },
          _react2['default'].createElement('input', _extends({ ref: 'input' }, props)),
          tooltip
        );
      }

      return null;
    }
  }]);

  return InputTip;
})(_react2['default'].Component);

InputTip.propTypes = {
  isShow: _react2['default'].PropTypes.bool,
  bsStyle: _react2['default'].PropTypes.string,
  groupClass: _react2['default'].PropTypes.string,
  tipMsg: _react2['default'].PropTypes.string,
  tooltip: _react2['default'].PropTypes.element,
  getValue: _react2['default'].PropTypes.func
};

InputTip.defaultProps = {
  isShow: true,
  bsStyle: 'default',
  groupClass: 'form-control',
  tipMsg: '',
  tooltip: null,
  getValue: function getValue() {
    return '';
  }
};

exports['default'] = InputTip;
module.exports = exports['default'];

