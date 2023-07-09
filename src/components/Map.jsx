import React from 'react'
import GoogleMapReact from 'google-map-react'

const location = {
    lat: 50.46,
    lng: 30.54,
};

const zoomLevel = 10;

const Map = () => (
    <div className="map">
        <h2>Map</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAGnSHgNzsJMY0maXDqg9YHGPmTmsWqqbU'}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >

            </GoogleMapReact>
        </div>
    </div>
);
export default Map
