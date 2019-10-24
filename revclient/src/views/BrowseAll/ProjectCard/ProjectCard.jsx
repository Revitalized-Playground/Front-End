import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart  } from 'react-icons/fa';
import Truncate from 'react-truncate';

import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { formatMoney } from '../../../helpers/formatMoney';
import { addUpDonations } from '../../../helpers/helpers';

const CarouselCard = props => {
	const { project } = props;

	// if (!card && view === 'recommended') {
	// 	return (
	// 		<section className="project-card-inner __recommended">
	// 			<Skeleton count={1} height={360} width={240} />
	// 		</section>
	// 	);
	// }


	if (!project.featuredImage) {
		project.featuredImage =
			'https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.jpg';
	}


	// console.log("ProjectCard props", props);

	return (
		<section className="project-card-container __browse-all">
			<div className="project-card-image">
				<FaRegHeart />
				<img src={project.featuredImage} alt={project.name} />
				<div className="after"></div>
			</div>
			<div className="project-card-body">
				<div className="project-card-body-descript">
					<i>
						{project.city}, {project.state}
					</i>
					<Link to={`/project/${project.slug}`}>
						<h5>{project.name}</h5>
					</Link>
					<Truncate lines={3} ellipsis={`...`}>
						{project.description}
					</Truncate>
				</div>
				<div className="project-card-body-money">
					<ProgressBar startingPoint={project.goalAmount} progress={addUpDonations(project.donations)} />
					<p>
						<b>${addUpDonations(project.donations)}</b> out of ${formatMoney(project.goalAmount)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default CarouselCard;
