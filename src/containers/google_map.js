const latLng = {lat: 37.742972, lng: -122.431297}

export default function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
          center: latLng,
          zoom: 13
        });
}