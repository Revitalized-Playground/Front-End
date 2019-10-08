import React, { Component } from 'react';
import { FaMapMarker } from 'react-icons/fa';

// Mapbox
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'; // This provides search results
import DeckGL, { GeoJsonLayer } from 'deck.gl'; // This provides the ability to go to search results
import { fromJS } from 'immutable';

// Data
import mapStyleJson from './3dpitch/style.json'; // Default style for all users. This can be changed by utilizing the mapStyle variable.
import { gpsCoordinates } from './sampleData'; // Sample data for testing

const token = process.env.REACT_APP_MAPBOX_TOKEN;
const mapStyle = fromJS(mapStyleJson); // This imports the default style of map, which we can configure and adjust starting point based on location

class SearchableMap extends Component {
<<<<<<< HEAD
    state = {
        viewport: {
            latitude: 36.230099,
            longitude: -101.887639,
            zoom: 3
        },
        searchResultLayer: null,
        selectedProject: null,
        gpsArray: [
            { lat: 27.192223, long: - 80.243057 },
            { lat: 31.442778, long: - 100.450279 },
            { lat: 40.560001, long: - 74.290001 },
            { lat: 42.586945, long: - 82.919998 },
            { lat: 33.193611, long: - 117.241112 },
            { lat: 41.676388, long: - 86.250275 },
            { lat: 41.543056, long: - 90.590836 },
            { lat: 39.554443, long: - 119.735558 },
            { lat: 44.513332, long: - 88.015831 },
            { lat: 37.554169, long: - 122.313057 },
            { lat: 32.349998, long: - 95.300003 },
            { lat: 29.499722, long: - 95.089722 },
            { lat: 33.038334, long: - 97.006111 },
            { lat: 43.614166, long: - 116.398888 },
            { lat: 41.556110, long: - 73.041389 },
            { lat: 34.000000, long: - 117.483330 },
            { lat: 26.709723, long: - 80.064163 },
            { lat: 38.005001, long: - 121.805832 },
            { lat: 35.970554, long: - 79.997498 },
            { lat: 25.942122, long: - 80.269920 },
            { lat: 33.569443, long: - 117.202499 },
            { lat: 39.799999, long: - 89.650002 },
            { lat: 34.073334, long: - 118.027496 },
            { lat: 40.606388, long: - 111.976112 },
            { lat: 30.601389, long: - 96.314445 },
            { lat: 38.257778, long: - 122.054169 },
            { lat: 37.977222, long: - 87.550552 },
            { lat: 42.373611, long: - 71.110558 },
            { lat: 32.965557, long: - 96.715836 },
            { lat: 37.871666, long: - 122.272781 },
            { lat: 38.951561, long: - 92.328636 },
            { lat: 33.950001, long: - 83.383331 },
            { lat: 30.216667, long: - 92.033333 },
            { lat: 42.580276, long: - 83.030281 },
            { lat: 36.316666, long: - 119.300003 },
            { lat: 37.034946, long: - 76.360123 },
            { lat: 40.689167, long: - 111.993889 },
            { lat: 33.630554, long: - 112.366669 },
            { lat: 39.903057, long: - 104.954445 },
            { lat: 25.978889, long: - 80.282501 },
            { lat: 35.846111, long: - 86.391945 },
            { lat: 34.156113, long: - 118.131943 },
            { lat: 41.186390, long: - 73.195557 },
            { lat: 40.914745, long: - 74.162827 },
            { lat: 42.259445, long: - 89.064445 },
            { lat: 41.520557, long: - 88.150558 },
            { lat: 33.124722, long: - 117.080833 },
            { lat: 39.106667, long: - 94.676392 },
            { lat: 42.101391, long: - 72.590279 }
        ]
    }

    // This will be the API URL for Geocoding but we will need to request them independently 10 at a time (time consuming to convert an array to Lat and Long)
    // `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryStringForGeocoding}.json?type=address&proximity=${usersGeoLocationCSVLatLong}&access_token=${TOKEN}`



    mapRef = React.createRef()

    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        })
    }
    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 50 };

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
            <div style={{ height: '100vh', width: "100%" }}>
                <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder', marginBottom: "25px" }}>Search For Apprenticeship Projects Near You!</h1>
                <MapGL
                    ref={this.mapRef}
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    width="inherit"
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
                    <GeolocateControl
                        style={{
                            float: 'left',
                            margin: '50px auto auto 10px',
                            padding: '10px'
                        }}
                        positionOptions={{ enableHighAccuracy: true }}
                        trackUserLocation={true}
                    />
                    <div style={{
                        position: 'absolute',
                        width: "50px",
                        bottom: 10,
                        right: 0,
                        padding: '10px'
                    }}>
                        <NavigationControl onViewportChange={this.handleGeocoderViewportChange} />
                    </div>

                    {this.state.gpsArray.map((gps, i) =>
                        <Marker key={i} latitude={gps.lat} longitude={gps.long} >
                            <img src="RevitalizeLogo.png" alt="Revitalize Logo" style={{ width: "35px" }} onClick={() => this.setState({ ...this.state, selectedProject: gps })} />
                        </Marker>
                    )}
                    {this.state.selectedProject &&
                        <Popup
                            latitude={this.state.selectedProject.lat}
                            longitude={this.state.selectedProject.long}
                            closeButton={true}
                            closeOnClick={false}
                            onClose={() => this.setState({ ...this.state, selectedProject: null })}
                            anchor="bottom"
                        >
                            <h2>Project Name</h2>
                            <p>Location</p>
                            <p>Short Description</p>
                        </Popup>
                    }
                </MapGL>
                <DeckGL {...viewport} layers={[searchResultLayer]} />
            </div>
        )
    }
=======
	state = {
		viewport: {
			// SF default view
			latitude: 37.78846,
			longitude: -122.399754,
			zoom: 13.97, // 15.82 = big buildings
			pitch: 60,
			bearing: 11.1,
			width: '100%',
			height: 440,
		},
		searchResultLayer: null,
		selectedProject: null,
		sampleGpsArray: gpsCoordinates,
		showPopup: false,
	};

	handleViewportChange = viewportObject => {
		// This keeps view port and geo location in sync?
		// console.log("State viewport:  ", this.state.viewport, "\n\n viewport object:  ", viewportObject);

		this.setState({
			viewport: { ...this.state.viewport, ...viewportObject },
		});
	};

	handleGeocoderViewportChange = viewport => {
		// Receives new viewport coord from geocode forward search
		return this.handleViewportChange({
			...viewport,
		});
	};

	handleOnResult = event => {
		// When this function receives a new object, it maps it and moves to it
		// console.log("geocode result ",
		//     "\n the coords: ", event.result.center,
		//     "\n the whole object: ", event.result ); // This is the object that we can handle to extract lat/long and much more from each query

		this.setState({
			searchResultLayer: new GeoJsonLayer({
				id: 'search-result',
				data: event.result.geometry,
				getFillColor: [255, 0, 0, 128],
				getRadius: 1000,
				pointRadiusMinPixels: 10,
				pointRadiusMaxPixels: 10,
			}),
			selectedProject: event.result,
			sampleGpsArray: [...this.state.sampleGpsArray, event.result],
		});
	};

	handleClickOnMarker = (event, gpsObject) => {
		// console.log("You Clicked the marker --->", gpsObject, );

		this.setState({
			...this.state,
			showPopup: true,
			selectedProject: gpsObject,
		});
	};

	mapRef = React.createRef(); // I suspect this ties into the geo locations + map

	render() {
		const { viewport, selectedProject, searchResultLayer, sampleGpsArray, showPopup } = this.state;

		return (
			<div className="searchable-map">
				<ReactMapGL
					{...viewport}
					mapStyle={mapStyle}
					mapboxApiAccessToken={token}
					ref={this.mapRef}
					onViewportChange={viewport => this.setState({ viewport })}
				>
					{sampleGpsArray.map((
						gpsObject,
						i, // Runs through hardcoded the array and drops a marker at each coord. Need to move this to data model
					) => {
						return (
							<Marker
								key={i}
								latitude={gpsObject.geometry.coordinates[1]}
								longitude={gpsObject.geometry.coordinates[0]}
							>
								<FaMapMarker
									className="searchable-map-marker"
									onClick={event => this.handleClickOnMarker(event, gpsObject)}
								/>
							</Marker>
						);
					})}

					{showPopup ? ( // Displays a popup
						<div className="searchable-map-popup">
							<Popup
								latitude={selectedProject.geometry.coordinates[1]}
								longitude={selectedProject.geometry.coordinates[0]}
								closeButton={true}
								closeOnClick={false}
								onClose={() =>
									this.setState({ ...this.state, showPopup: false, selectedProject: null })
								}
								anchor="top-left"
								offsetTop={30}
								offsetLeft={15}
							>
								<h5>{selectedProject.text}</h5>
								<p>
									{selectedProject.properties.address}
									<br />
									<i>{selectedProject.properties.category}</i>
								</p>
							</Popup>
						</div>
					) : null}

					<div className="searchable-map-navigation">
						<NavigationControl />
					</div>

					<div className="searchable-map-searchbar">
						<Geocoder
							mapRef={this.mapRef}
							onResult={this.handleOnResult}
							onViewportChange={this.handleGeocoderViewportChange}
							mapboxApiAccessToken={token}
							position="top-left"
						/>
					</div>

					<div className="searchable-map-geolocate">
						<GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={false} />
					</div>

					<DeckGL {...viewport} layers={[searchResultLayer]} />
				</ReactMapGL>
			</div>
		);
	}
>>>>>>> 86972199dff0439acefc0a796eb46976c170a591
}

export default SearchableMap;
