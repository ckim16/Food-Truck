import React, { Component } from 'react';

class TruckList extends Component {
  constructor(props) {
    super(props);

    this.onHover = this.onHover.bind(this);
  }

  onHover(t) {
    console.log(t.target.getAttribute('data-applicant'));
    const hoveredTruck = {applicant: t.target.getAttribute('data-applicant'), 
                          latitude: t.target.getAttribute('data-latitude'), 
                          longitude: t.target.getAttribute('data-longitude'),
                          key: t.target.getAttribute('data-key'),
                          item: t.target.getAttribute('data-item')
                        };

    this.props.hover(hoveredTruck);
  }

  renderList() {
    if (this.props.filteredList.length === 0) {
      return this.props.list.map((truck) => {
        return (
          <div key={truck.objectid} onMouseOver={this.onHover} data-address={truck.address} data-key={truck.objectid} data-item={truck.fooditems} data-applicant={truck.applicant} data-latitude={truck.latitude} data-longitude={truck.longitude} className="list-box">
            Applicant: {truck.applicant}<br />
            Address: {truck.address}<br />
            Type: {truck.facilitytype}
          </div>
        );
      });
    } else {
      return this.props.filteredList.map((filteredTruck) => {
        return (
          <div key={filteredTruck.objectid} onMouseOver={this.onHover} data-address={filteredTruck.address} data-key={filteredTruck.objectid} data-item={filteredTruck.fooditems} data-applicant={filteredTruck.applicant} data-latitude={filteredTruck.latitude} data-longitude={filteredTruck.longitude} className="list-box">
            Applicant: {filteredTruck.applicant}<br/>
            Address: {filteredTruck.address}<br />
            Type: {filteredTruck.facilitytype}
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