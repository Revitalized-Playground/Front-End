import React from 'react';
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";


const Item = props => {
	
	console.log(props.item);
	if (props.item.tab === 'Activity Feed') {
		return (
			<>
				<div className="item activity" key={props.item.name + Date.now()}>

					<div className="item-activity-container">
						
						<div className="item-activity-category">{props.item.left}</div>
						
						<div className="item-activity-body">
							
							{props.item.image ? (
								<div className="item-activity-img-container">
									<img src={props.item.image} alt="" />
								</div>
							) : (
								<div className="display-none"></div>
							)}

							<div className="text">
								<h5>{props.item.name}</h5>
								<p className="description">{props.item.description}</p>
								<p className="comment">{props.item.comment}</p>
							</div>
						
							<div className="item-activity-date">
								<p>{props.item.right}</p>
							</div>						
						</div>

					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div className="item" key={props.item.name + Date.now()}>

				<div className="item-card-indicator left-bg" style={{ background: `${props.item.left}` }}></div>

				<div className="item-card-container">
					<div className="item-card-img-container" >
						<img src={props.item.image} alt="" />
					</div>
					<div className="item-card-text">
						<h5>{props.item.name}</h5>
						<p className="description">{props.item.description}</p>
						<p className="comment">{props.item.comment}</p>
					</div>
					<div className="item-card-icon-container">
						{props.item.right.map(x => (
							<>
								{x.img ? (
									<img src={x.img} alt={x.name} key={x.name + Date.now()} className="dashboard-picture-icons" />
								) : (
									<div className="no-picture"></div>
								)}
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
