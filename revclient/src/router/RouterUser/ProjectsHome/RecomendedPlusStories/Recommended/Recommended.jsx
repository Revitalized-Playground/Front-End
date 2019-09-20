import React from 'react'
import Card from '../../../../components/Card/Card';
import MOB from "../../../../assets/ProjectPage/MOB.png"
import RTS from "../../../../assets/ProjectPage/RTS.png"

const Recommended = () => {
    const dummyProjects = [
        {
            img: RTS,
            title: "Rebirth Tabernacle School",
            description: " Learn next to master trade professionals that are available during the day and after hours."
        },
        {
            img: MOB,
            title: "Make it or Break it!",
            description: " Learn next to master trade professionals that are available during the day and after hours."
        }
    ]
    return (
        <div className="recommended-wrapper">
            <h2>Recommended&nbsp;Projects</h2>
            <div className="recommendations">
                {dummyProjects.map(({ img, title, description }, i) =>
                    <Card className="trade-card" img={img} title={title} description={description} key={i} />
                )}
            </div>
        </div>
    );
};

export default Recommended;