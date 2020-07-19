import React, { Component } from 'react'

class Contest extends Component{
 render(){
     return (
         <div className="Contest">
             {this.props.id}
             {this.props.description}
         </div>
     );
 }
}
export default Contest;
