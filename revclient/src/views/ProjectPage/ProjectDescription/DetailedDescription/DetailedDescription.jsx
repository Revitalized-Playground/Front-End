import React from 'react';
// import BasicDetails from './BasicDescription/BasicDescription.jsx'
import email from '../../../../assets/SingleProjectPage/email.png';

const DetailedDescription = ({location, projDescription, isProjectCreator}) => {
	return (
		<div style={{marginTop: isProjectCreator ? '-250px' : '-550px'}} className="detailedDescriptionContainer">
			{projDescription.length > 1100 ? (
				<p className="detailedDescription">
					{' '}
					<span>{location.toUpperCase()}</span>
					{projDescription
						.split('')
						.map((each, index) => {
							if (index < 1101) {
								return each;
							} else {
								return null;
							}
						})
						.join('')}
					... <strong>{projDescription.length > 1100 && 'Read More'}</strong>
				</p>
			) : (
				<p className="detailedDescription">
					<span>{location.toUpperCase()}</span>
					{projDescription}
				</p>
			)}
		</div>
	);
};

export default DetailedDescription;
