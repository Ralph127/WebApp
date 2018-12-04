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
                name={'Walmart: 814-333-8321'}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 40.79372546643397, lng: -77.86809114273639 }}
                name={'Hershey: 882-193-2314'}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 40.79372546643397, lng: -77.86809114273639 }}
                name={'IST: 814-237-8484'}
                />


                <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 40.79782660262963, lng: -77.86604260560127 }}
                name={'PepperRidge Farms: 231-231-3214'}
                />

                <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 40.79863095552876, lng: -77.86275384016336 }}
                name={'John Doe :814-321-2924'}
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