import React, {useState} from 'react'

const featuredTrades = [
                {
                    image: '../static/assets/ProjectPage/electronicsCard.png',
                    trade: 'Electronics'
                },
                {
                    image: '../static/assets/ProjectPage/Construction.png',
                    trade: 'Construction'
                },
                {
                    image: '../static/assets/ProjectPage/plumbingCard.png',
                    trade: 'Mechanics'
                },
                {
                    image: '../static/assets/ProjectPage/weldingCard.png',
                    trade: 'Welding'
                }
]
const FeaturedTrades = () => {

    const [trades, setTrades] = useState(featuredTrades)

    return (
        <section className='ft-container'>
            <h3 className='ft-title'>Featured Trades</h3>
            <p>Learn next to master trade professionals that are available during the day and after hours.</p>
            <a href=''>Show More Trades &rsaquo;</a>
            <div className='featured-trades'>
                {trades.map(trade => (
                    <div className='ft-box'>
                        <img src={trade.image} alt='trade' />
                        <p>{trade.trade}</p>
                    </div>
                ))}
            </div>
        </section>
    )
} 


export default FeaturedTrades