import React from 'react';
import Slider from "react-slick";

import CarouselCard from '../CarouselCard/CarouselCard';
import { NextArrow, PrevArrow } from "../CarouselCard/Arrows";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const NearYou = () => {
    
    const nearList = [
        {
            id: 1,

            name: "Railway Dreams",
            description: "The subway system in St Joseph needs help revamping the transit to meet expansion deadline.",
            state: "MI",
            city: "St. Joseph",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451131/start%20page/Railway_Dreams_zhwuff.svg",
            liked: false,
        },
        {
            id: 2,
            name: "Grey-Red Matter",
            description: "Reclaim is a non profit that partners with the city to mentor trade students.",
            state: "MI",
            city: "Grand Rapids",
            goalAmount: 0.00, 
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451120/start%20page/Red_Grey_Matter_zwdfbs.svg",
            liked: false,
        },
        {
            id: 3,
            name: "Iron Syde Shop",
            description: "Apprentices learn next to expert welders on how to sharpen blades for industrial machines.  ",
            state: "MI",
            city: "Ann Arbor",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451126/start%20page/Iron_Syde_Shop_ickfun.svg",
            liked: false,
        },
        {
            id: 4,
            name: "Mission Zero",
            description: "Javontay investigates the construction rubble of a collapsed building after tornado strikes.",
            state: "MI",
            city: "Flint",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451129/start%20page/Mission_Zero_image_xs2wtv.svg",
            liked: false,
        },
        {
            id: 5,
            name: "Team Rubicon",
            description: "Restoring ancient warehouse to careers training high school in the heart of Detroit.",
            state: "MI",
            city: "Detroit",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Team_Rubicon_xlxh6r.svg",
            liked: false,
        },
        {
            id: 6,
            name: "Camp Crystal Lake",
            description: "Park Rangers mentor and explain nature’s complexities regarding its interactions with humans.",
            state: "MI",
            city: "Grand Haven",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.svg",
            liked: false,
        },
        {
            id: 7,
            name: "Rustic Road Brewery",
            description: "Apprentices learn behind the scenes of the process of making one of finest chilled drink of Kalamazoo.",
            state: "MI",
            city: "Kalamazoo",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451133/start%20page/Rustic_Road_Brewery_tulxbq.svg",
            liked: false,
        },
        {
            id: 8,
            name: "Velvet Thread",
            description: "Amber continues to teach the family tradition of sewing handmade garments with a modern twist.",
            state: "MI",
            city: "Royal Oak",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Velvet_Thread_e2e8u3.svg",
            liked: false
        },
        {
            id: 9,
            name: "Cup of Joe’s Cafe",
            description: "Implement blueprint including working with construction manager, interior design and final inspection.",
            state: "MI",
            city: "Detroit",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569516054/start%20page/Cup_of_Joe_s_Cafe_gbkrft.png",
            liked: false
        }
    ]

    const settings = {
        // arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        swipeToSlide: true,
        centerPadding: "400px",
        lazyLoad: "progressive",
        className: "carousel-card",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="near-you-section">
            <h4>Local Projects</h4>
            <div className="slider">
                <Slider {...settings}>
                    {nearList ? nearList.map((item, index) => (
                        <CarouselCard key={item.id} card={item} view="nearYou" index={index} name='Near List' />
                    )) : null}
                </Slider>
            </div>
        </section>
    );
};

export default NearYou;