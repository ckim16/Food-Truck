import React, { Component } from 'react';

class TruckList extends Component {
  renderList() {
    if (this.props.filteredList.length === 0) {
      return this.props.list.map((truck) => {
        return (
          <div key={truck.objectid} className="list-box">
            Applicant: {truck.applicant}<br />
            Location: {truck.locationdescription}
          </div>
        );
      });
    } else {
      return this.props.filteredList.map((filteredTruck) => {
        return (
          <div key={filteredTruck.objectid} className="list-box">
            Applicant: {filteredTruck.applicant}<br/>
            Location: {filteredTruck.locationdescription}
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