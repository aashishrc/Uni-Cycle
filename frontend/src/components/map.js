import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom }) => (
  <div style={{ height: '300px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBpFL-aLa0s_8y7oxfs6nsGEjLqxeTGjsI' }} // Replace 'YOUR_API_KEY' with your actual API key
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <AnyReactComponent
        lat={center.lat}
        lng={center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
);

export default Map;
