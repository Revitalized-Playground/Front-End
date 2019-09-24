import React, { useState } from 'react';

import building from '../../../assets/StartPage/SpotlightBuilding.png';

const Spotlight = () => {
    
    const [spotlight, setSpotlight] = useState({
        description: "Milwaukee's Red Cypress building was home to iron manufacturing and now the ancient building is transforming to a coworking space.",
        image: `${building}`,
        link: "#"
    })
    
    return (
        <div className="spotlightContainer">
            <div 
                className="spotlightImage" 
                style={{backgroundImage: `url(${spotlight.image})`}}
            ></div>
            <div className="text">
                <h3>SPOTLIGHT</h3>
                <p>{spotlight.description}</p>
                <a href={spotlight.link}>Learn more ></a>
            </div>
            <div className="heart"></div>
        </div>
    );
};

export default Spotlight;