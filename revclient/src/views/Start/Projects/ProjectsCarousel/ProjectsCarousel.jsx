import React from 'react';

// import Project from '../Project/Project';



const ProjectsCarousel = ( {card} ) => {

    
    return (
        <section className="carousel-card">
            <i> {card.city}, {card.state} </i>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
        </section>
    );
};

export default ProjectsCarousel;
