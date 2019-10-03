import React, { useState } from 'react'
import MapGL, { GeolocateControl } from 'react-map-gl'

const TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

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

    const [viewport, setViewPort] = useState({
        width: 850,
        height: 550,
        latitude: 36.230099,
        longitude: -101.887639,
        zoom: 2
    })

    const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 1000 })

    return (
        <div style={{ margin: '0 auto' }}>

            <MapGL
                {...viewport}
                mapboxApiAccessToken={token}
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
    )
}

export default Map;
