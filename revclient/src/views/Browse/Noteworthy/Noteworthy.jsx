import React from 'react';
import Slider from "react-slick";

import CarouselCard from '../CarouselCard/CarouselCard';



const Noteworthy = () => {
    
    const noteworthyData = [
        {
            id: 1,
            name: "Camp Crystal Lake",
            description: "NU Energy team is Revitalize’s upcoming project focused on renewable and sustainable energy. Experts in the wind energy industry share their knowledge and best practices with future wind turbine technicians.",
            state: "IA",
            city: "Urbandale",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451140/start%20page/Windmill_jvynbk.svg",
            liked: false,
        },
        {
            id: 2,
            name: "Camp Crystal Lake",
            description: "Alger Theatre is one of Detroit’s well loved and iconic theatre. Multiple prospects compete to decide the future of Alger Theatre. Residents of the city hold the fate of Alger Theatre. What will the residents decide?",
            state: "MI",
            city: "Detroit",
            goalAmount: 0.00,
            amountFunded: 0.00,
            images: ["https://","https://"],
            featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451143/start%20page/Alger_theater_Dark_Mode_Pic_inlldb.svg",
            liked: false,
        }
    ]

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 0,
        // swipeToSlide: true,
        centerPadding: "400px",
        lazyLoad: "progressive",
        className: "carousel-card",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="noteworthy-section">
            <h4>New & Noteworthy</h4>
            <div className="slider">
                <Slider {...settings}>
                    {noteworthyData ? noteworthyData.map(item => (
                        <CarouselCard key={item.id} card={item} view="noteworthy" />
                    )) : null}
                </Slider>
            </div>
        </section>
    );
};

export default Noteworthy;