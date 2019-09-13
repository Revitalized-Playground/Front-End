import React from 'react';
import FeaturedProjects from './FeaturedProjects'

const ProjectsHome = () => {
    
    const featuredTrades = [
        {
            image: "",
            trade: "Electronics"
        },
        {
            image: "",
            trade: "Construction"
        },
        {
            image: "",
            trade: "Mechanics"
        },
        {
            image: "",
            trade: "Welding"
        }
    ]

    return (
		<div className="projects-home">
			<section className="top">
				<div className="cta-container">
					<div className="cta">
						<h2 className="cta-title">See All of The Trades That We have to Offer!</h2>
						<p>
							See the trades we have to offer from many different industries. You have the ability to view
							each trade and make a decision on a program that can change your life.
						</p>
					</div>
					<img src="../../static/assets/ProjectPage/top issue.png" />
				</div>
			</section>
			{/* featured trades */}
			<section className="ft-container">
				<h3 className="ft-title">Featured Trades</h3>
				<p>Learn next to master trade professionals that are available during the day and after hours.</p>
				<a href="">Show More Trades &rsaquo;</a>
				<div className="featured-trades">
                    {featuredTrades.map(trade => {
                        <div className="ft-box">
                            <img src={trade.image} alt="trade" />
                            <p>{trade.trade}</p>
                        </div>
                    })}
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
