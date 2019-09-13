import React from 'react';
import FeaturedProjects from './FeaturedProjects'

const ProjectsHome = () => {
    return (
        <div className='projects-home'>
            {/* top */}
            <section className="top">

            </section>
            {/* featured trades */}
            <section className="ft-container">
                <h3 className="ft-title">Featured Trades</h3>
                <p>Learn next to master trade professionals that are available during the day and after hours.</p>
                <p href="">Show More Trades &rsaquo;</p>
                <div className="featured-trades">
                    <div className="ft-box">
                        <img src="" />
                        <p>Electronics</p>
                    </div>
                    <div className="ft-box">
                        <img src="" />
                        <p>Construction</p>
                    </div>
                    <div className="ft-box">
                        <img src="" />
                        <p>Mechanics</p>
                    </div>
                    <div className="ft-box">
                        <img src="" />
                        <p>Welding</p>
                    </div>
                </div>
            </section>
            {/* curvy part/thing */}
            {/* featured projects */}
            <FeaturedProjects />
            {/* top trending trades */}
            {/* featured trades */}
            {/* recommended projects */}
        </div>
    );
};

export default ProjectsHome;