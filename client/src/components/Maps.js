import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
    width: '54.14%',
    height: '70%',
    margin: 40
  };

class Maps extends Component {

    onMarkerClick = (props, marker, e) =>
    this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    }
    };
    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
        userLocation: {lat: 40.794, lng: -77.8607}, 
        loading: true
    };

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;

        return(
            <Map
            google={google}
            zoom={15}
            style={mapStyles}
            initialCenter={userLocation}
            >
                <Marker
                onClick={this.onMarkerClick}
                name={'Here is where the information goes'}
                />
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1DX65BO6j049cTq_jCaw4w5wxotzwz5U'
  })(Maps);