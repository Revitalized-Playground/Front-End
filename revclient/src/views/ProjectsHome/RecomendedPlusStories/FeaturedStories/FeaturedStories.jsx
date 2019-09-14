import React from 'react'
import Card from '../../../../components/Card/Card';
import Odisee from "../../../../assets/ProjectPage/Odisee.png"
import RG from "../../../../assets/ProjectPage/RG.png"

const FeaturedStories = () => {
    const dummyTrades = [
        {
            img: RG,
            title: "Industrial Machinery Mechanic",
            description: " Learn next to master trade professionals that are available during the day and after hours."
        },
        {
            img: Odisee,
            title: "Wind Turbine Technician",
            description: "Learn next to master trade professionals that are available during the day and after hours"
        }
    ]
    return (
        <div className="stories-wrapper">
            <h2>Top&nbsp;Featured&nbsp;Stories</h2>
            <div className="featured-stories">
                {dummyTrades.map(({ img, title, description }, i) =>
                    <Card className="trade-card" img={img} title={title} description={description} key={i} />
                )}
            </div>
        </div>
    );
};

export default FeaturedStories;