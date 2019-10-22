import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaAngleRight } from 'react-icons/fa';
import Truncate from 'react-truncate';
import Skeleton from 'react-loading-skeleton';

import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { formatMoney } from '../../../helpers/formatMoney';
import { addUpDonations } from '../../../helpers/helpers';

const CarouselCard = props => {
	const { card, view } = props;
	// console.log("card: ", card);

	const toggleLiked = () => {
		props.setLiked(!props.liked)
	}

	// console.log("card.likes: ", card.likes);
	// card.likes.forEach(l => console.log("l: ", l))
	// card.likes.map(l => {
	// 	l.id === props.profileId
	// 	? console.log("it's working!")
	// 	: console.log("aww");
		
	// })
	// if(card.likes.includes(props.profileId)) {
	// 	console.log("it's working!");
	// } else {
	// 	console.log("awww");
	// }

	if (!card && view === 'recommended') {
		return (
			<section className="carousel-card-inner __recommended">
				<Skeleton count={1} height={360} width={240} />
			</section>
		);
	}

	if (!card.images) {
		card.images = [
			'https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg',
		];
	}

	if (!card.featuredImage) {
		card.featuredImage =
			'https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg';
	}

	if (view === 'recommended') {
		return (
			<section className="carousel-card-inner __recommended">
				<div className="carousel-card-image">
					{props.liked 
						?
						<FaHeart fill="#d2405b" onClick={toggleLiked}/>
						:
						<FaRegHeart onClick={toggleLiked}/>
					}
					<img src={card.featuredImage} alt={card.name} />
					<div className="after"></div>
				</div>
				<div className="carousel-card-body">
					<div className="carousel-card-body-descript">
						<i>
							{card.city}, {card.state}
						</i>
						<Link to={`/project/${card.slug}`}>
							<h5>{card.name}</h5>
						</Link>
						<Truncate lines={3} ellipsis={`...`}>
							{card.description}
						</Truncate>
					</div>
					<div className="carousel-card-body-money">
						<ProgressBar startingPoint={card.goalAmount} progress={addUpDonations(card.donations)} />
						<p>
							<b>${addUpDonations(card.donations)}</b> out of ${formatMoney(card.goalAmount)}
						</p>
					</div>
				</div>
			</section>
		);
	}
	if (view === 'nearYou') {
		return (
			<section className="carousel-card-inner __near-you">
				<div className="carousel-card-image">
					<i className="carousel-card-location">
						{card.city}, {card.state}
					</i>
					<img src={card.featuredImage} alt={card.name} />
					<div className="after"></div>
				</div>
				<div className="carousel-card-body">
					<div className="carousel-card-body-descript">
						<Link to={`/project/${card.slug}`}>
							<h5>{card.name}</h5>
						</Link>
						<Truncate lines={3} ellipsis={`...`}>
							{card.description}
						</Truncate>
					</div>
					<Link to={`/project/${card.slug}`}>
						Learn more <FaAngleRight />
					</Link>
				</div>
			</section>
		);
	}
	if (view === 'noteworthy') {
		return (
			<section className="carousel-card-inner __noteworthy">
				<div className="carousel-card-image">
					<div className="carousel-card-location">
						{card.city}, {card.state}
					</div>
					<img src={card.featuredImage} alt={card.name} />
				</div>

				<div className="carousel-card-body">
					<div className="carousel-card-body-descript">
						<h4>{card.name}</h4>
						<p>{card.description}</p>
					</div>
					<Link to={`/project/${card.slug}`}>
						Learn more <FaAngleRight />
					</Link>
				</div>
			</section>
		);
	}
};

export default CarouselCard;
