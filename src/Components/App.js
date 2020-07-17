import React from 'react';
import  {MyHeader}  from './MyHeader';
import axios from 'axios'
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api'
const pushState = (obj,url) =>
window.history.pushState(obj,'',url);
class App  extends React.Component {
    state = {
        pageHeader :37,
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
    fetchContest = (contestId) =>{
        console.log("got here");
        pushState({ currentContestId: contestId },`/contest/${contestId}`)
        api.fetchContest(contestId).then(contest => {
            this.setState({pageHeader: contest.contestName,currentContestId: contestId})
        })
    }
    currentContent() {
        if(this.state.currentContestId){
            return <Contest {...this.state.contests[this.state.currentContestId]}/>
        }
        return <ContestList onContestClick={this.fetchContest} contests = {this.state.contests}/>
    }
    render(){
        return (
            <div className="App">
                <MyHeader prop= {this.state.pageHeader}/>
                {this.currentContent()}
                
            </div>
               
        );
    }  
};

export default App;