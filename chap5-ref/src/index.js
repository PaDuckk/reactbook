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

ReactDOM.render(<App/>, document.getElementById('root'));


