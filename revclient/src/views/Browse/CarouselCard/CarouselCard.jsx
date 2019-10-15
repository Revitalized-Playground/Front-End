import React from 'react';
import  { Link } from "react-router-dom";
import { FaHeart, FaAngleRight } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import Skeleton from 'react-loading-skeleton';

import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { formatMoney } from "../../../helpers/formatMoney";


const CarouselCard = props => {
    const { card, view } = props;
    
    
    if (!card && view === "recommended") {
        return (
            <section className="carousel-card-inner __recommended">
                <Skeleton count={1} height={360} width={240} />
            </section>
        )
    }

    if (!card.images) {
        card.images = ["https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg"]
    }

    if (!card.featuredImage) {
        card.featuredImage = "https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg"
    }




    if (view === "recommended") {
        return (
            <section className="carousel-card-inner __recommended">
                    <div className="carousel-card-image">
                        <FaHeart />
                        <img src={card.featuredImage} alt={card.name} />
                    </div>
                    <div className="carousel-card-body">
                        <div className="carousel-card-body-descript">
                            <i>{card.city}, {card.state}</i>
                            <Link to={`/project/${card.slug}`}>
                                <h5>{card.name}</h5>
                            </Link>
                            <ReadMoreReact
                                text={card.description}
                                min={40}
                                ideal={80}
                                max={150}
                                readMoreText="..."
                            />
                        </div>
                        <div className="carousel-card-body-money" >
                            <ProgressBar startingPoint={card.goalAmount} progress={card.amountFunded} />
                            <p><b>${formatMoney(card.amountFunded)}</b> out of ${formatMoney(card.goalAmount)}</p>
                        </div>
                    </div>
            </section>
        );
    }
    if (view === "nearYou") {
        return (
            <section className="carousel-card-inner __near-you">
                <div className="carousel-card-image">
                    <i className="carousel-card-location">{card.city}, {card.state}</i>
                    <img src={card.featuredImage} alt={card.name} />
                </div>
                <div className="carousel-card-body">
                    <div className="carousel-card-body-descript">
                        <Link to={`/project/${card.slug}`}>
                            <h5>{card.name}</h5>
                        </Link>
                        <ReadMoreReact
                            text={card.description}
                            min={60}
                            ideal={80}
                            max={150}
                            readMoreText="..."
                        />
                    </div>
                    <Link to={`/project/${card.slug}`}>Learn more <FaAngleRight /></Link>
                </div>
            </section>
        )
    }
    if (view === "noteworthy") {
        return (
            <section className="carousel-card-inner __noteworthy">
                <div className="carousel-card-image">
                    <div className="carousel-card-location">{card.city}, {card.state}</div>
                    <img src={card.images[0]} alt={card.name} />
                </div>
                <div className="carousel-card-body">
                    <div className="carousel-card-body-descript">
                        <h4>{card.name}</h4>
                        <p>{card.description}</p>
                    </div>
                    <Link to="">Learn more <FaAngleRight /></Link>
                </div>
            </section>
        )
    }
};

export default CarouselCard;
