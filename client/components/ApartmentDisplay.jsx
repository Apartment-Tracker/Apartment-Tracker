import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

const ApartmentDisplay = props => {
  const { aptInfo, showDetails } = props;
  
  // Match with DB column names
  const data = {
    aptName: aptInfo.name,
    aptCity: aptInfo.city,
    aptState: aptInfo.state,
    aptRent: aptInfo.rent,
    aptBed: aptInfo.bed,
    aptBath: aptInfo.bath,
    aptMovein: aptInfo.movein,
    aptPet: aptInfo.pet,
    aptSqft: aptInfo.sqft,
  }

  return(
    <div className="aptTable row">
      <div className="apartment toLeft">
        {data.aptName}
      </div>
      <div className="location toLeft">
        {data.aptCity.concat(", " + data.aptState)}
      </div>
      <div className="rent">
        {data.aptRent}
      </div>
      <div className="bedbath">
        {data.aptBed} / {data.aptBath}
      </div>
      <div className="movein">
        {data.aptMovein ? data.aptMovein : 'null'}
      </div>
      <div className="pet">
        {data.aptPet ? <i className="fa-solid fa-o"></i> : <i className="fa-solid fa-x"></i>}
      </div>
      <div className="sqft sqftH">
        {data.aptSqft}
      </div>
      <div className="details dH" onClick={showDetails}>
        <i className="showDetails fa-solid fa-caret-down"></i>
      </div>
    </div>
  )
};

export default ApartmentDisplay;