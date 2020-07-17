import React from  "react"
import ContestPreview from "./ContestPreview";

export const ContestList = ({contests,onContestClick}) => {
    return (
    <div className= "ContentList">
    {
     Object.keys(contests).map(id => <ContestPreview key={contests[id].id} contest= {contests[id]} onClick={onContestClick}/>)
    }
    </div>
);
}

export default ContestList;