import React from 'react'
export const  ContestPreview = ({contest}) => {
    return (
            <div className="ContestPreview">
                <div className="categoryName">
                      {contest.categoryName}
                </div>
                <div>
                      {contest.contestName}
                </div>
            </div>
    );
};
export default ContestPreview