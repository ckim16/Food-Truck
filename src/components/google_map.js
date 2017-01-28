import React from 'react';
import ReactDOM from 'react-dom';

const latLng = {lat: 37.742972, lng: -122.431297};

export default (props) => {
  const options = {
          zoom: 13,
          center: latLng
        }
  const map = new google.maps.Map(ReactDOM.findDOMNode(this), options);

  return (
    <div className="map"></div>
  );
}