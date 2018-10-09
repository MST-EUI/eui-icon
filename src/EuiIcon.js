import React from 'react';
import classnames from 'classnames';

import './style/index.scss';

const { PropTypes } = React;

export default class EuiIcon extends React.Component {
  static displayName = 'eui-icon';

  static propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    type: '',
    style: {},
    className: '',
    prefixCls: 'eui-icon',
  };

  render() {
    const {
      type,
      style,
      className,
      prefixCls,
    } = this.props;

    return (
      <i
        className={classnames({ [`${prefixCls}`]: true }, 'icon iconfont', { [`icon-${type}`]: !!type }, { [className]: !!className })}
        style={style}
      />
    );
  }
}
