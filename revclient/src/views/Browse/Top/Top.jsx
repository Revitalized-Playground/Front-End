import React from 'react';
import { Link } from "react-router-dom";


const Top = props => {
    const { setShowMore, possibleInterest, showMore, 
        // setPossibleInterest, 
    } = props;


    return (
        <div className="topContainer">
            <h2 className="title">
                <div>What field are you interested in?</div>
            </h2>
            <div className="interests">
                <div className="interests-left">
                    <div className="interest one inner-interest" onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[0] })}  >
                        {possibleInterest[0]} 
                    </div>
                    <div className="interest two"  onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[1] })} >
                        {possibleInterest[1]} 
                    </div>
                    <div className="interest three"  onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[2] })} >
                        {possibleInterest[2]} 
                    </div>
                </div>
                <div className="interests-right">
                    <div className="interest four"  onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[3] })} >
                        {possibleInterest[3]} 
                    </div>
                    <div className="interest five"  onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[4] })} >
                        {possibleInterest[4]} 
                    </div>
                    <div className="interest six"  onClick={() => setShowMore({ allProjects:  !showMore.allProjects, interest: possibleInterest[5] })} >
                        {possibleInterest[5]} 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Top;