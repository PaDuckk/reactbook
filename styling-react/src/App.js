import React, { Component } from 'react';
import styles from'./App.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
console.log(cx);
class App extends Component {
  render() {
    const isBlue = false;
    return (
      <div className={cx('box',{
        blue: isBlue
      })}>
      </div>
    );
  }
}

export default App;
