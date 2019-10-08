import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";


const Spotlight = () => {
    
    const [spotlight, 
        // setSpotlight
    ] = useState({
        description: "Milwaukee's Red Cypress building was home to iron manufacturing and now the ancient building is transforming to a coworking space.",
        image: "https://res.cloudinary.com/revitalize/image/upload/c_scale,q_32,w_1400/v1570416497/browse-page/SpotlightBuilding_hyddaa.png",
        link: "/project"
    })

    return (
        <div className="spotlight-container">
            <div className="spotlight-card" style={{backgroundImage: `url(${spotlight.image})`}}>
                <h2>SPOTLIGHT</h2>
                <p>{spotlight.description}</p>
                <Link to={spotlight.link}>Learn more <FaAngleRight /></Link>
            </div>
        </div>
    );
};

export default Spotlight;
