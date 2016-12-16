import React, { Component } from 'react';

const TruckList = (props) => {
  const truckList = props.list.map((truck) => {
    return (
      <div className="truckDescription" key={truck.objectid}>
        applicant: {truck.applicant}<br/>
        location: {truck.locationdescription}
      </div>
    );
  });
  
  return(
    <ul className="col-md-4 list-group">
      {truckList}
    </ul>
  );
}

export default TruckList;