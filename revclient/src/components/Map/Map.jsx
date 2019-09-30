import React, { useState } from 'react'
import MapGL, { GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = "pk.eyJ1IjoicmV2aXRhbGl6ZXRlYW0iLCJhIjoiY2sxNm9wbng4MTgwbzNtbW9leXMzYTNpZSJ9.X4VRU_njmnvNxhnuhPZDHw"

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

const Map = () => {

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
    )
}

export default Map;