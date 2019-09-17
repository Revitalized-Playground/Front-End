import React, { useState } from 'react';

import electronicsCard from "../../assets/ProjectPage/electronicsCard.png";
import construction from "../../assets/ProjectPage/Construction.png";
import plumbingCard from "../../assets/ProjectPage/plumbingCard.png";
import weldingCard from "../../assets/ProjectPage/weldingCard.png";


const featuredTrades = [
                {
                    image: electronicsCard,
                    trade: 'Electronics'
                },
                {
                    image: construction,
                    trade: 'Construction'
                },
                {
                    image: plumbingCard,
                    trade: 'Plumbing Card'
                },
                {
                    image: weldingCard,
                    trade: 'Welding'
                }
]
const FeaturedTrades = () => {

    const [trades] = useState(featuredTrades);

    return (
        <section className='ft-container'>
            <h3 className='ft-title'>Featured Trades</h3>
            <p>Learn next to master trade professionals that are available during the day and after hours.</p>
            <a href="./#">Show More Trades &rsaquo;</a>
            <div className='featured-trades'>
                {trades.map((trade, index) => (
                    <div className='ft-box' key={index} >
                        <img src={trade.image} alt={`${trade.trade} trade`} />
                        <p>{trade.trade}</p>
                    </div>
                ))}
            </div>
        </section>
    )
} 


export default FeaturedTrades;
