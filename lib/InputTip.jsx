import React from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import classNames from 'classnames';

class InputTip extends React.Component {

  constructor(props) {
    super(props);
  }

  getTooltip(style = 'form-tooltip-default', content = 'Defult Error', placement = 'bottom') {
    return (
      <Tooltip id={style} placement={placement} className="in">{content}</Tooltip>
    );
  }

  getValue() {
    return this.refs.input.getDOMNode().value;
  }

  render() {

    // bsStyle : default info err warn success
    let {
      isShow = true,
      bsStyle = 'default',
      tipMsg = '',
      tooltip = null,
      groupClass = classNames('form-control', 'from-input'),
      ...props
    } = this.props;

    switch(bsStyle) {
      case 'err':
        groupClass = classNames(groupClass, 'from-input-err');
        tooltip = this.getTooltip('form-tooltip-err', tipMsg);
        break;
      case 'warn':
        groupClass = classNames(groupClass, 'from-input-warn');
        tooltip = this.getTooltip('form-tooltip-warn', tipMsg);
        break;
      case 'info':
        groupClass = classNames(groupClass, 'from-input-info');
        tooltip = this.getTooltip('form-tooltip-info', tipMsg);
        break;
      case 'success':
        groupClass = classNames(groupClass, 'from-input-success');
        tooltip = this.getTooltip('form-tooltip-success', tipMsg);
        break;
      default:
        groupClass = groupClass;
        tooltip = null;
        break;
    }

    if (isShow) {
      return (
        <div className={groupClass}>
          <input ref="input" {...props} />
          {tooltip}
        </div>
      )
    }

    return null;
  }
}

InputTip.propTypes = {
  isShow: React.PropTypes.bool,
  bsStyle: React.PropTypes.string,
  groupClass: React.PropTypes.string,
  tipMsg: React.PropTypes.string,
  tooltip: React.PropTypes.element,
  getValue: React.PropTypes.func
};

InputTip.defaultProps = {
  isShow: true,
  bsStyle: 'default',
  groupClass: 'form-control',
  tipMsg: '',
  tooltip: null,
  getValue: () => ''
};

export default InputTip;
