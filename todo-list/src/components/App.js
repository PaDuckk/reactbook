import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoListContainer from '../containers/TodoListContainer';
import TodoInputContainer from '../containers/TodoInputContainer';

class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInputContainer/>
                <TodoListContainer/>
            </PageTemplate>
        );
    }
}

export default App;