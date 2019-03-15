import React, { Component } from 'react';
import StyledButton from './components/StyledButton';

class App extends Component {
  render() {
    return (
      <div>
        <StyledButton big={true}>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
