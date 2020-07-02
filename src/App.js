import React from 'react';
import  {MyHeader}  from './MyHeader';

class App  extends React.Component {
    state = { test :37}
    render(){
        return (
            
            <div>
                <MyHeader prop= {this.state.test}/>
                <div>...</div>
            </div>
        );
    }  
};

export default App;