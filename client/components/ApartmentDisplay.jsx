import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

const ApartmentDisplay = props => {
  const { aptInfo, showDetails } = props;
  
  // Match with DB column names
  const data = {
    aptName: aptInfo.apartment_name,
    aptCity: aptInfo.location_city,
    aptState: aptInfo.location_state,
    aptRent: aptInfo.apartment_rent,
    aptBed: aptInfo.apartment_bed,
    aptBath: aptInfo.apartment_bath,
    aptMovein: aptInfo.apartment_movein,
    aptPet: aptInfo.apartment_pet,
    aptSqft: aptInfo.apartment_sqft,
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
        {data.aptBed.concat(" / " + data.aptBath)}
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
      <div className="details dH" onClick={showDetails()}>
        <i className="showDetails fa-solid fa-caret-down"></i>
      </div>
    </div>
  )
};

export default ApartmentDisplay;