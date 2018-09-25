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
  };

  static defaultProps = {
    type: '',
    style: {},
    className: '',
  };

  render() {
    const {
      type,
      style,
      className,
    } = this.props;

    return (
      <i
        className={classnames('eui-con icon iconfont', { [`icon-${type}`]: !!type }, { [className]: !!className })}
        style={style}
      />
    );
  }
}
