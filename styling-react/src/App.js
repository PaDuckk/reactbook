import React, { Component } from 'react';
import styles from'./App.scss';
import classNames from 'classnames/bind';
import Button from './components/Button'


const cx = classNames.bind(styles);
console.log(cx);
class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div>
        <Button>버튼</Button>
      </div>
    );
  }
}

export default App;
