import React from 'react';

const Company = props => {
	const { image, paintbrush, logo } = props.info;
	return (
		<div className="companyContainer" style={{ backgroundImage: `url(${image})` }}>
			<div className="logoContainer">
				<img className="logo" src={logo} alt="logo" />
				<img src={paintbrush} alt="paintbrush" />
			</div>
		</div>
	);
};

export default Company;
