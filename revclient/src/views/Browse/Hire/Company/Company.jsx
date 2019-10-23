import React from 'react';

const Company = props => {
	const { image, paintbrush, logo, link } = props.info;
	return (
		<a className="companyContainer" style={{ backgroundImage: `url(${image})` }} href={link}>
			<div className="logoContainer">
				<img className="logo" src={logo} alt="logo" />
				<img src={paintbrush} alt="paintbrush" />
			</div>
		</a>
	);
};

export default Company;
