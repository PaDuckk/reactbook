import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
                <button onClick={() => this.ScrollBox.scrollToBottom()}>
                    맨밑으로
                </button>
            </div>
        )
    }
}


class Todo extends React.Component {
    constructor(props) {
      super(props);
      console.log('constructor!');
      this.state = {value: 0};
    }
    
    static getDerivedStateFromProps(props, state) {
      // props에 의존적인 state를 업데이트
      console.log('getDerivedStateFromProps')
      console.log('props',props)
      console.log('state',state)
      if (state.value !== props.value) {
        return {
          mirroredProp: props.value
        }
       }
    // when null is returned no update is made to the state
      return null;
    }
    
    render() {
      return (
        <div>
          <h1>Hello</h1>
        </div>
      )
    }
    
    componentDidMount() {
      console.log(this.state);
      /*
        Usage: All the interaction directly with the browser DOM and integrate with third-party libraries like Highcharts or D3 should be done here. E.g This method is best to draw sound wave graphs of songs.
        
        Where should you make the API calls?
  The API calls should be made in componentDidMount method always.
      */
    }

    
  }
  
  
  ReactDOM.render(
    <Todo value={4}/>,
    document.getElementById('root')
  );
  



ReactDOM.render(<App/>, document.getElementById('root'));


