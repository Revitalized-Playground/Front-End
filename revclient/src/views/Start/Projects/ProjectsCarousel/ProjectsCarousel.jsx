import React from 'react';
import { formatMoney } from "../../../../helpers/formatMoney";
// import Project from '../Project/Project';


// const ProjectsCarousel = ( props ) => (
//     console.log(props)
// )

const ProjectsCarousel = ( {card, style} ) => {

    if(!card.featuredImage) { 
        card.featuredImage = "https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz"
    }
    console.log(card, style)
    return (
        <section className="carousel-card-inner">
            <div className="carousel-card-image">
                <img src={card.featuredImage} alt={card.name} />
            </div>
            <div className="carousel-card-body">
                <i>{card.city}, {card.state}</i>
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <p><b>${formatMoney(card.amountFunded)}</b> out of ${formatMoney(card.goalAmount)}</p>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
