import React from 'react';

import ProjectsCarousel from '../Projects/ProjectsCarousel/ProjectsCarousel';

const RecommendedProjects = () => {
    
    const recList = [
        {
            id: 1,
            name: "one"
        },
        {
            id: 2,
            name: "two"
        },
        {
            id: 3,
            name: "three"
        },
        {
            id: 4,
            name: "four"
        },
        {
            id: 5,
            name: "five"
        }
    ]

    return (
        <div className="recContainer">
            <p>Recommended Projects</p>
            <div className="recList">
                <ProjectsCarousel list={recList} />
            </div>
        </div>
    );
};

export default RecommendedProjects;