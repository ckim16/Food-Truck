import React from 'react';

export default (props) => {
  return (
    <div className="list-box">
      <i className="fa fa-truck" aria-hidden="true"></i>: {props.applicant}<br/>
      <i className="fa fa-address-book" aria-hidden="true"></i>: {props.address}<br/>
      <i className="fa fa-info" aria-hidden="true"></i>: {props.facilitytype}
    </div>
  );
}