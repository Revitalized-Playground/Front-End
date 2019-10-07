import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './Pin';

const TOKEN = 'your_token'; // Set your mapbox token here
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this)
  }renderPopup(){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.state.longitude}
        latitude={this.state.popupInfo.state.latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p>{YOUR POPUP INFO}</p>
      </Popup>
    )
  }render() {
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN} >
        {markers}
        {this.renderPopup()}
        <div className="nav" style={navStyle}>
          <NavigationControl/>
          <Marker longitude={} latitude={} offsetTop={} offsetLeft={}>
            <Pin onClick={() => this.setState({popupInfo: popupInfo})}/>
          </Marker>
          </div>
        </div>
      </MapGL>
    );
  }}