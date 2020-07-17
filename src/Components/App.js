import React from 'react';
import  {MyHeader}  from './MyHeader';
import {ContestPreview} from './ContestPreview';
import data from '../testData.json'
import axios from 'axios'

class App  extends React.Component {
    state = {
         test :37,
         contests : this.props.initialContests
        }
    componentDidMount(){
       axios.get('/api/contests').then( resp => {
           console.log(resp)
           this.setState({
                contests: resp.data.contests
            }) 
        }).catch(console.error)
       
    }
    render(){
        return (
            <div>
                <MyHeader prop= {this.state.test}/>
                <div>
                    {this.state.contests.map(contest =><ContestPreview key={contest.id} contest= {contest}/>)};
                </div>
            </div>
               
        );
    }  
};

export default App;