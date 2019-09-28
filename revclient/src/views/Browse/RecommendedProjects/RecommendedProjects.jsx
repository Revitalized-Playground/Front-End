import React from 'react';
import Slider from "react-slick";

import RecommendedProjectsSkeleton from './RecommendedProjectsSkeleton';
import CarouselCard from '../CarouselCard/CarouselCard';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../../graphql/queries';


const RecommendedProjects = () => {
        const { loading, error, data } = useQuery(GET_PROJECTS);

        const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            // swipeToSlide: true,
            centerPadding: "400px",
            lazyLoad: "progressive",
            className: "carousel-card",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
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
        }

        if (loading) return <RecommendedProjectsSkeleton/>

        if (error) return console.log(error)

        return (
            <section className="recommened-projects-section">
                <h4>Recommended Projects</h4>
                <div className="slider">
                    <Slider {...settings}>
                        {data.projects ? data.projects.map(recommendedItem => (
                            <CarouselCard key={recommendedItem.id} card={recommendedItem} view="recommended" />
                        )) : null}
                    </Slider>
                </div>
            </section>
        );

}


export default RecommendedProjects;
