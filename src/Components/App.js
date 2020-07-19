import React from 'react';
import  {MyHeader}  from './MyHeader';
import axios from 'axios'
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api'
const pushState = (obj,url) =>
window.history.pushState(obj,'',url);
class App  extends React.Component {
    state = this.props.initialData;
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
            console.log(contest);
            this.setState({pageHeader: contest.contestName,currentContestId: contestId,contests: {
                ...this.state.cotests,
                [contest.id]: contest
              }})
        })
    }
    pageHeader(){
      if(this.state.currentContestId){
         return this.currentContest().contestName; 
      }
      return 'Naming Contests'
    }
    currentContest(){
            return this.state.contests[this.state.currentContestId];
    }
    currentContent() {
        if(this.state.currentContestId){
            return <Contest {...this.currentContest()}/>
        }
        return <ContestList onContestClick={this.fetchContest} contests = {this.state.contests}/>
    }
    render(){
        return (
            <div className="App">
                <MyHeader prop= {this.pageHeader()}/>
                {this.currentContent()}
                
            </div>
               
        );
    }  
};

export default App;