import React from 'react';
import  {MyHeader}  from './MyHeader';

class App  extends React.Component {
    state = { test :37}
    componentDidMount(){
        console.log('did work');
        debugger;
    }
    componentWillMount(){
        console.log('Will mount');
        debugger;
    }
    render(){
        return (
                <MyHeader prop= {this.state.test}/>
        );
    }  
};

export default App;