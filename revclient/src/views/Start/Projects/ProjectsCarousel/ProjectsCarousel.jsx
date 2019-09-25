import React from 'react';

import Project from '../Project/Project';

const ProjectsCarousel = (props, list, Card) => {
    return (
        <div>
            {props.list.map(p => {
                return <Project key={p.id} info={p} />
            })}
        </div>
    );
};

export default ProjectsCarousel;