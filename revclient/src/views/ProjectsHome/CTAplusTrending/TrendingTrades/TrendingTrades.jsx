import React from 'react'
import Card from '../../../../components/Card/Card';
import wtt from "../../../../assets/ProjectPage/WTT.png"
import imm from "../../../../assets/ProjectPage/IMM.png"

const TrendingTrades = () => {
    const dummyTrades = [
        {
            img: imm,
            title: "Industrial Machinery Mechanic",
            description: " Learn next to master trade professionals that are available during the day and after hours."
        },
        {
            img: wtt,
            title: "Wind Turbine Technician",
            description: "Learn next to master trade professionals that are available during the day and after hours"
        }
    ]
    return (
        <div className="trending-trades">
            <h2>Top&nbsp;Trending&nbsp;Trades</h2>
            {dummyTrades.map(({ img, title, description }, i) =>
                <Card className="trade-card" img={img} title={title} description={description} key={i} />
            )}
        </div>
    );
};

export default TrendingTrades;