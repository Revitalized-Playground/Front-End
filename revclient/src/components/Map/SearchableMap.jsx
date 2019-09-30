import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const token = "pk.eyJ1IjoicmV2aXRhbGl6ZXRlYW0iLCJhIjoiY2sxNm9wbng4MTgwbzNtbW9leXMzYTNpZSJ9.X4VRU_njmnvNxhnuhPZDHw"

class SearchableMap extends Component {
    state = {
        viewport: {
            latitude: 36.230099,
            longitude: -101.887639,
            zoom: 1
        },
        searchResultLayer: null
    }

    mapRef = React.createRef()

    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        })
    }
    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    handleOnResult = event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: "search-result",
                data: event.result.geometry,
                getFillColor: [255, 0, 0, 128],
                getRadius: 1000,
                pointRadiusMinPixels: 10,
                pointRadiusMaxPixels: 10
            })
        })
    }

    render() {
        const { viewport, searchResultLayer } = this.state
        return (
            <div style={{ height: '100vh' }}>
                <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Use the search bar to find a location or click <a href="/">here</a> to find your location</h1>
                <MapGL
                    ref={this.mapRef}
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    width="100%"
                    height="650px"
                    onViewportChange={this.handleViewportChange}
                    mapboxApiAccessToken={token}
                >
                    <Geocoder
                        mapRef={this.mapRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={token}
                        position='top-left'
                    />
                </MapGL>
                <DeckGL {...viewport} layers={[searchResultLayer]} />
            </div>
        )
    }
}

export default SearchableMap;