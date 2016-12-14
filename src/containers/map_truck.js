import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFoodTruck } from '../actions/index';
import GoogleMap from '../components/google_map';

class MapTruck extends Component {
  constructor(props) {
    super(props);
    console.log('maptruck', props);

  }

  render() {
    const data = this.props.fetchFoodTruck();
    console.log(data);
    return (
      <GoogleMap lon={this.data.lon} lat={this.data.lat} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchFoodTruck}, dispatch);
}

export default connect(null, mapDispatchToProps)(MapTruck);