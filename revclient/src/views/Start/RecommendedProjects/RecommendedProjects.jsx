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
                amountFunded: 50000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451141/start%20page/Team_RB2_jqinhz.svg",
                liked: true
            },
            {
                id: 2,
                name: "Green Acres",
                description: "Apprentices learn from local herbalists best practices for homeopathic remedies and making tonics.",
                state: "WA",
                city: "Yakiama",
                goalAmount: 100000.00,
                amountFunded: 50000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451120/start%20page/Green_Acres_acp00j.svg",
                liked: true

            },
            {
                id: 3,
                name: "Sage Francis",

                description: "Reclaim, a nonprofit works with local relief organizations to rebuild Puerto Rico after the impact of Hurrican Dorian.",

                state: "PR",
                city: "San Juan",
                goalAmount: 5000.00,
                amountFunded: 1000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451122/start%20page/Sage_Francis_vmxmqm.svg",
                liked: false
            },
            {
                id: 4,
                name: "SpaceLine Project",
                description: "Students from different academics (Engineering and Mechanics) present Nasa   on tools for the new space station.",
                state: "DC",
                city: "Washington",
                goalAmount: 8000000.00,
                amountFunded: 15000000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451125/start%20page/SpaceLine_Project_jwcjug.svg",
                liked: false
            },
            {
                id: 5,
                name: "Grandline Central Revival",
                description: "Surveyors share best practices with apprentices on how to transform a field of rubble to constructing a learning center.",
                state: "SD",
                city: "Sioux Falls",
                goalAmount: 30000.00,
                amountFunded: 2000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451118/start%20page/Grand_central_revival_e18kbi.svg",
                liked: false
            },
            {
                id: 6,
                name: "Newton Infrastructure Upgrade",
                description: "Neigboring cities unite to honor and rennovate a well loved museum of arts and science. Local businesses partner with...",
                state: "AR",
                city: "Little Rock",
                goalAmount: 500000.00,
                amountFunded: 50000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451130/start%20page/Newton_Infrastructure_Upgrade_1_y12ht6.svg",
                liked: false 

            },
            {
                id: 7,
                name: "Wireline Project",
                description: "Apprentices under industry experts receive hands on training in rennovating the interior of a classic office building.",
                state: "NE",
                city: "Omaha",
                goalAmount: 100000.00,
                amountFunded: 50000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569453294/start%20page/Rectangle_jnwuh9.png",
                liked: false 
            },
            {
                id: 8,
                name: "Murals of Hope",
                description: "Atlanta gets a mural upgrade with apprentice artists showcasing their skills and process.",
                state: "GA",
                city: "Atlanta",
                goalAmount: 1000.00,
                amountFunded: 5000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451132/start%20page/Murals_of_Hope_pam8nr.svg",
                liked: false 
            },
            {
                id: 9,
                name: "Lightning Sparks",
                description: "Revitalize and state officials partner to revamp electrical grids to expand electricitity to rural towns.",
                state: "WV",
                city: "Charleston",
                goalAmount: 5000000.00,
                amountFunded: 500000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451134/start%20page/Lightning_Sparks_ppgmkx.svg",
                liked: false   
            },
            {
                id: 10,
                name: "Heavy Metal Queen",
                description: "Cassandra and her team of mechanics are building the next trendy sports bike in time for Raceplace. ",
                state: "CA",
                city: "Long Beach",
                goalAmount: 10000.00,
                amountFunded: 8000.00,
                images: ["https://","https://"],
                featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451121/start%20page/Heavy_metal_queen_image_ppdqnn.svg",
                liked: false   
            }
        ]

        const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerPadding: "400px",
            lazyLoad: "progressive",
            className: "carousel-card"
        };
        return (
            <section className="recommened-projects-section">
                <h4>Recommened Projects</h4>
                <div className="slider">
                    <Slider {...settings}>
                        {recommendedArray ? recommendedArray.map(recommendedItem => (
                            <ProjectsCarousel key={recommendedItem.id} card={recommendedItem} />
                        )) : null}
                    </Slider>
                </div>
            </section>
        );
    }
}
    

export default RecommendedProjects;
