import React from 'react';
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";



const Task = props => {

	let indicatorColorClassname = "color-colress"
	if(props.task.priority === "LOW") indicatorColorClassname = "color-papier-mache"
	if(props.task.priority === "MEDIUM") indicatorColorClassname = "color-chillFi-purple"
	if(props.task.priority === "HIGH") indicatorColorClassname = "color-ruby-enchantment"

	return (
		<>
			<div className="item" key={props.task.id + Date.now()}>

				<div className={`item-card-indicator left-bg ${indicatorColorClassname}`} ></div>

				<div className="item-card-container" >
					<div className="item-card-img-container" >
						<img src={props.task.image} alt="" />
					</div>
					<div className="item-card-text">
						<h5>{props.task.priority}</h5>
						<p className="description">{props.task.description}</p>
						{/* <p className="comment">{props.task.comment}</p> */}
					</div>
					<div className="item-card-icon-container">
						<div className="no-picture"></div>
						{/* {props.task.right.map(user => (
							<>
								{user.img ? (
									<img src={user.img} alt={user.name} key={user.name + Date.now()} className="dashboard-picture-icons" />
								) : (
									<div className="no-picture"></div>
								)}
							</>
						))} */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Task;
