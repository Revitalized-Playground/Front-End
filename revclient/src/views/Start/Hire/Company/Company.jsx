import React from 'react';

const Company = props => {
	return (
		<div className="companyContainer" style={{ backgroundImage: `url(${props.info.image})` }}>
			<div className="logoContainer">
				<img className="logo" src={props.info.logo} alt="logo" />
				<img src={props.info.paintbrush} alt="paintbrush" />
			</div>
		</div>
	);
};

export default Company;
