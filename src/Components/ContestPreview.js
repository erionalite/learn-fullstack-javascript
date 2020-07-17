import React, { Component } from 'react'
class ContestPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.contest.id)
    }
    render(){
        return (
            <div className=" link ContestPreview" onClick={this.handleClick}>
                <div className="categoryName">
                      {this.props.contest.categoryName}
                </div>
                <div>
                      {this.props.contest.contestName}
                </div>
            </div>
    );
    }
}
export default ContestPreview;