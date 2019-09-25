import React from 'react';
import Slider from "react-slick";


import ProjectsCarousel from '../Projects/ProjectsCarousel/ProjectsCarousel';


class RecommendedProjects extends React.Component {


    render() {
        const recommendedArray = [
            {
                id: 1,
                name: "Team RBC 2",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "NJ",
                city: "Jersey City",
                goalAmount: 350000.00,
                amountFunded: 50000.00
            },
            {
                id: 2,
                name: "Green Acres",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "WA",
                city: "Yakiama",
                goalAmount: 100000.00,
                amountFunded: 50000.00

            },
            {
                id: 3,
                name: "Sage Frances",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "PR",
                city: "San Juan",
                goalAmount: 5000.00,
                amountFunded: 1000.00
            },
            {
                id: 4,
                name: "SpaceLine Project",
                description: "Students from different academics (Engineering and Mechanics) present Nasa   on tools for the new space station.",
                state: "DC",
                city: "Washington",
                goalAmount: 8000000.00,
                amountFunded: 15000000.00
            },
            {
                id: 5,
                name: "Grandline Central Revival",
                description: "Surveyors share best practices with apprentices on how to transform a field of rubble to constructing a learning center.",
                state: "SD",
                city: "Sioux Falls",
                goalAmount: 30000.00,
                amountFunded: 2000.00
            },
            {
                id: 6,
                name: "Green Acres",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "WA",
                city: "Yakiama",
                goalAmount: 100000.00,
                amountFunded: 50000.00

            },
            {
                id: 7,
                name: "Sage Frances",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "PR",
                city: "San Juan",
                goalAmount: 5000.00,
                amountFunded: 1000.00
            },
            {
                id: 8,
                name: "SpaceLine Project",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "DC",
                city: "Washington",
                goalAmount: 8000000.00,
                amountFunded: 15000000.00
            },
            {
                id: 9,
                name: "Grandline Central Revival",
                description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
                state: "SD",
                city: "Sioux Falls",
                goalAmount: 30000.00,
                amountFunded: 2000.00
            }
        ]

        const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    {recommendedArray ? recommendedArray.map(recommendedItem => (
                            <ProjectsCarousel key={recommendedItem.id} card={recommendedItem} />
                    )) : null}
                </Slider>
            </div>
        );
    }
}
    

export default RecommendedProjects;

//     return (
//         <div className="recContainer">
//             <p>Recommended Projects</p>
//             <div className="recList">
//                 <ProjectsCarousel list={recList} />
//             </div>
//         </div>
//     );

