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
// let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);




class SearchableMap extends Component {
	state = {
		viewport: {
			// SF default view
			latitude: 37.78846,
			longitude: -122.399754,
			zoom: 13.97, // 15.82 = big buildings
			pitch: 60,
			bearing: 11.1,
		},
		searchResultLayer: null,
		selectedProject: null,
		sampleGpsArray: gpsCoordinates,
		showPopup: false,
	};

	handleViewportChange = viewportObject => {
		// This keeps view port and geo location in sync?
		this.setState({
			viewport: {
				...this.state.viewport,
				...viewportObject,
			},
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
					className="react-map-gl-test"
					mapStyle={mapStyle}
					mapboxApiAccessToken={token}
					ref={this.mapRef}
					onViewportChange={viewport => this.setState({ viewport })}
					width="100%"
					height="100%"
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
}

export default SearchableMap;
