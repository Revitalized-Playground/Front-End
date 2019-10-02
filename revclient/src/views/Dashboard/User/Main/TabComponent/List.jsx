import React from 'react';

const List = props => {
	return (
		<>
			{props.list.tab === 'Activity Feed' ? (
				<div className="list column" key={props.list.name + Date.now()}>
					
					<div className="left">{props.list.left}</div>

					<div className="container">
						<img src={props.list.image} alt="" />
						<div className="text">
							<h2>{props.list.name}</h2>
							<p className="description">{props.list.description}</p>
							<p className="comment">{props.list.comment}</p>
						</div>
					
						<div className="right">
							<p>{props.list.right}</p>
						</div>						
					</div>
				</div>
			) : (
				<div className="list" key={props.list.name + Date.now()}>
					<div className="left left-bg" style={{ background: `${props.list.left}` }}></div>
					<div className="container">
						<img src={props.list.image} alt="" />
						<div className="text">
							<h2>{props.list.name}</h2>
							<p className="description">{props.list.description}</p>
							<p className="comment">{props.list.comment}</p>
						</div>
						<div className="right">
							{props.list.right.map(x => (
								<img src={x.img} alt={x.name} key={x.img + Date.now()} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default List;
