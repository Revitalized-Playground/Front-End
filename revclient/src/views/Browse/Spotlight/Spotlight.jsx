import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import building from '../../../assets/BrowsePage/SpotlightBuilding.png';
import heart from '../../../assets/BrowsePage/HeartVector.png';

const Spotlight = () => {
    
    const [spotlight, 
        // setSpotlight
    ] = useState({
        description: "Milwaukee's Red Cypress building was home to iron manufacturing and now the ancient building is transforming to a coworking space.",
        image: `${building}`,
        link: "/project"
    })

    return (
        <div className="spotlightContainer">
            <div
                className="spotlightImage"
                style={{backgroundImage: `url(${spotlight.image})`}}
            ></div>
            <div className="window"></div>
            <div className="text">
                <h3>SPOTLIGHT</h3>
                <p>{spotlight.description}</p>
                <Link to={spotlight.link}>Learn more &gt;</Link>
            </div>
            <img src={heart} alt="heart" className="heart" />
        </div>
    );
};

export default Spotlight;
