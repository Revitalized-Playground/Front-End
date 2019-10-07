import React from 'react';
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";



const List = props => {

	if (props.list.tab === 'Activity Feed') {
		return (
			<>
				<div className="list activity" key={props.list.name + Date.now()}>

					<div className="list-activity-container">
						
						<div className="list-activity-category">{props.list.left}</div>
						
						<div className="list-activity-body">
							
							{props.list.image ? (
								<div className="list-activity-img-container">
									<img src={props.list.image} alt="" />
								</div>
							) : (
								<div className="display-none"></div>
							)}

							<div className="text">
								<h5>{props.list.name}</h5>
								<p className="description">{props.list.description}</p>
								<p className="comment">{props.list.comment}</p>
							</div>
						
							<div className="list-activity-date">
								<p>{props.list.right}</p>
							</div>						
						</div>

					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div className="list" key={props.list.name + Date.now()}>

				<div className="list-card-indicator left-bg" style={{ background: `${props.list.left}` }}></div>

				<div className="list-card-container">
					<div className="list-card-img-container" >
						<img src={props.list.image} alt="" />
					</div>
					<div className="list-card-text">
						<h5>{props.list.name}</h5>
						<p className="description">{props.list.description}</p>
						<p className="comment">{props.list.comment}</p>
					</div>
					<div className="list-card-icon-container">
						{props.list.right.map(x => (
							<>
								{x.img ? (
									<img src={x.img} alt={x.name} key={x.img + Date.now()} className="user-dashboard-picture-icons" />
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

export default List;
