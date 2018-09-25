import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src';
import './demo.scss';

class Demo extends React.Component {
  render() {
    const iconArr = [
      'info',
      'warning',
      'success',
      'arrow-right',
      'close',
      'error',
    ];
    return (
      <ul className="demo">
        {
          iconArr.map(item => (
            <li className="demo-li" key={item}>
              <Icon type={item} /><br />
              <span className="icon-name">{item}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
