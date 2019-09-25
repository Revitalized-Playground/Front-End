import React from 'react';

import robot from '../../../assets/StartPage/robot.svg';

const Banner = () => {
    return (
        <div className="bannerContainer">
            <img src={robot} alt="woman with robot" />
            <div className="textContainer">
                <h2>Check Out <br />Your Feed</h2>
                <p>Discover projects, stories, and trends happening near you.</p>
            </div>
        </div>
    );
};

export default Banner;