import React from 'react';
import { Link } from "react-router-dom";


const Top = () => {
    return (
        <div className="topContainer">
            <h2 className="title">
                <div>What are your interests?</div>
            </h2>
            <div className="interests">
                <div className="interests-left">
                    <Link to="/all-projects" className="interest one">
                        <div className="inner-interest">
                            Electrical 
                        </div>
                    </Link>
                    <div className="interest two">
                        Carpentry
                    </div>
                    <div className="interest three">
                        Interior Design
                    </div>
                </div>
                <div className="interests-right">
                    <div className="interest four">
                        HVAC
                    </div>
                    <div className="interest five">
                        Plumbing
                    </div>
                    <div className="interest six">
                        Masonry
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Top;