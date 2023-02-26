import React from 'react'
import GoogleMapReact from 'google-map-react'
// import {Marker} from "@react-google-maps/api";

const location = {
    lat: 50.462987931343974,
    lng: 30.543230185998695,
};

const zoomLevel = 5;

const Map = ({photos}) => (
    <div className="map">
        <h2>Map</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDPYqRVt1rhTBr5eYYy2BxfYetK14lymo4'}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >

            </GoogleMapReact>
        </div>
    </div>
);
export default Map
