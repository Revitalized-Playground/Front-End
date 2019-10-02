import React from 'react';
import  { Link } from "react-router-dom";
import { FaHeart, FaAngleRight } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
// import { Skeleton, SkeletonTheme } from "react-loading-skeleton";

import { formatMoney } from "../../../helpers/formatMoney";
import styled from "styled-components";


const CarouselCard = ( {card, view, index, name} ) => {

    const Box = styled.div`
        height: 12px;
        background: #0B096F;
        border-radius: 50px;

        @keyframes pulse {
            0% {
                width: 0;
                background: #0B096F;
                }
            100% {
                /* width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%; */
            }
        }
        width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%;
        animation: 1s ease-out pulse;
    `

    if(!card.images) {
        card.images = ["https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg"]
    }

    if (view === "recommended") {
        return (
            <section className="carousel-card-inner __recommended">
                    <div className="carousel-card-image">
                        <FaHeart />
                        <img src={card.images[0]} alt={card.name} />
                    </div>
                    <div className="carousel-card-body">
                        <div className="carousel-card-body-descript">
                            <i>{card.city}, {card.state}</i>
                            <Link to={`/project/${card.id}`}>
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
                            <Box />
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
                    <img src={card.images[0]} alt={card.name} />
                </div>
                <div className="carousel-card-body">
                    <div className="carousel-card-body-descript">
                        <h5>{card.name}</h5>
                        <p>{card.description}</p>
                    </div>
                    <Link to="">Learn more <FaAngleRight /></Link>
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
                        <h5>{card.name}</h5>
                        <p>{card.description}</p>
                    </div>
                    <Link to="">Learn more <FaAngleRight /></Link>
                </div>
            </section>
        )
    }
};

export default CarouselCard;
