import React from 'react';

const TruckList = (props) => {
  const truckList = props.list.map((truck) => {
    return (
      <div key={truck.objectid} className="list-box">
        applicant: {truck.applicant}<br/>
        location: {truck.locationdescription}
      </div>
    );
  });
  
  return(
    <div className="truckDescription">
      {truckList}
    </div>
  );
}

export default TruckList;