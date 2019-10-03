import React, { useState } from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const projects = [
	{
		title: 'Alger Theatre',
		description:
			'Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade',

		coordinates: [42.403611, -82.937222],
	},
	{
		title: 'Fox Theatre Building',
		description: 'Learn next to master trade professionals that are available during the day and after hours.',

		coordinates: [42.338333, -83.0525],
	},
	{
		title: 'Detroit Masonic Temple',
		description: 'Learn next to master trade professionals that are available during the day and after hours. ',
		coordinates: [42.341667, -83.060278],
	},
	{
		title: 'Detroit Opera House',
		description: 'Learn next to master trade professionals that are available during the day and after hours.',
		coordinates: [42.336389, -83.048611],
	},
	{
		title: 'Guidr Project',
		description: 'Learn next to master trade professionals that are available during the day and after hours.',
	},
	{
		title: 'Clover 4',
		description: 'Learn next to master trade professionals that are available during the day and after hours.',
	},
	{
		title: 'Project 7',
		description: 'description 7',
		img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg',
	},
	{
		title: 'Project 8',
		description: 'description 8',
		img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg',
	},
];

const geolocateStyle = {
	float: 'left',
	margin: '50px',
	padding: '10px',
};

const Map = () => {
	const [viewport, setViewPort] = useState({
		width: 850,
		height: 550,
		latitude: 36.230099,
		longitude: -101.887639,
		zoom: 2,
	});

	const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 50 });

	const [Project] = useState(projects);
	return (
		<div style={{ margin: '0 auto' }}>
			<MapGL
				{...viewport}
				mapboxApiAccessToken={TOKEN}
				mapStyle="mapbox://styles/mapbox/dark-v8"
				onViewportChange={_onViewportChange}
			>
				<GeolocateControl
					style={geolocateStyle}
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation={true}
				/>
			</MapGL>
		</div>
	);
};

export default Map;
