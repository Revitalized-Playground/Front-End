import React from 'react';

import ProjectsCarousel from '../Projects/ProjectsCarousel/ProjectsCarousel';

const NearYou = () => {
    
    const nearList = [
        {
            id: 1,
            name: "uno"
        },
        {
            id: 2,
            name: "dos"
        },
        {
            id: 3,
            name: "tres"
        },
        {
            id: 4,
            name: "cuatro"
        },
        {
            id: 5,
            name: "cinco"
        },
    ]
    
    return (
        <div className="nearContainer">
            <p>Local Projects</p>
            <div className="nearList">
                <ProjectsCarousel list={nearList} />
            </div>
        </div>
    );
};

export default NearYou;