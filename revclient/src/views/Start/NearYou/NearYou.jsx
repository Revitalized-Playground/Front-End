import React from 'react';
import Slider from "react-slick";

import ProjectsCarousel from '../Projects/ProjectsCarousel/ProjectsCarousel';


const NearYou = () => {
    
    const nearList = [
        {
            id: 1,
            name: "SpaceLine Project",
            description: "Surveyors share best practices with apprentices on how to transform a field of rubble to constructing a learning center.",
            state: "DC",
            city: "Washington",
            goalAmount: 8000000.00,
            amountFunded: 15000000.00,
            images: ["https://","https://"],
            featuredImage: "https://"
        },
        {
            id: 2,
            name: "Grandline Central Revival",
            description: "Javontay investigates the construction rubble of a collapsed building after tornado strikes.",
            state: "SD",
            city: "Sioux Falls",
            goalAmount: 30000.00,
            amountFunded: 2000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 3,
            name: "Green Acres",
            description: "Reclaim, a nonprofit works with local relief organizations to rebuild Puerto Rico after the impact of Hurrican Dorian.",
            state: "WA",
            city: "Yakiama",
            goalAmount: 100000.00,
            amountFunded: 50000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 4,
            name: "Sage Frances",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "PR",
            city: "San Juan",
            goalAmount: 5000.00,
            amountFunded: 1000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 5,
            name: "SpaceLine Project",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "DC",
            city: "Washington",
            goalAmount: 8000000.00,
            amountFunded: 15000000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 6,
            name: "Grandline Central Revival",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "SD",
            city: "Sioux Falls",
            goalAmount: 30000.00,
            amountFunded: 2000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 7,
            name: "Team RBC 2",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "NJ",
            city: "Jersey City",
            goalAmount: 350000.00,
            amountFunded: 50000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 8,
            name: "Green Acres",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "WA",
            city: "Yakiama",
            goalAmount: 100000.00,
            amountFunded: 50000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        },
        {
            id: 9,
            name: "Sage Frances",
            description: "Team Rubicon allies with Jersey City to restore an iconic building located in the waterfront.",
            state: "PR",
            city: "San Juan",
            goalAmount: 5000.00,
            amountFunded: 1000.00,
            images: ["https://","https://"],
            featuredImage: "https://",
        }
    ]

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div className="nearContainer">
            <p>Local Projects</p>
            <div className="slider">
                <Slider {...settings}>
                    {nearList ? nearList.map(item => (
                        <ProjectsCarousel key={item.id} card={item} />
                    )) : null}
                </Slider>
            </div>
        </div>
    );
};

export default NearYou;