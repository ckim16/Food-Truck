import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchFoodTruck } from '../actions/index';

class TruckList extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  render() {
    return (
      <ul>
        
      </ul>
    );
  }
}

function mapStateToProps({ truck }) {
  return { truck };
}

export default connect(mapStateToProps)(TruckList);