import React, { Component } from 'react';

class TruckList extends Component {
  renderList() {
    if (this.props.filteredList.length === 0) {
      return this.props.list.map((truck) => {
        return (
          <div key={truck.objectid} onMouseOver={this.props.onMouseOver} className="list-box">
            Applicant: {truck.applicant}<br />
            Address: {truck.address}<br />
            Type: {truck.facilitytype}
          </div>
        );
      });
    } else {
      return this.props.filteredList.map((filteredTruck) => {
        return (
          <div key={filteredTruck.objectid} onMouseOver={this.props.onMouseOver} className="list-box">
            Applicant: {filteredTruck.applicant}<br/>
            Address: {filteredTruck.address}<br />
            Type: {truck.facilitytype}
          </div>
        );
      });
    }
  }
  
  render() { 
    return(
      <div className="truckDescription">
        {this.renderList()}
      </div>
    );
  }
}

export default TruckList;