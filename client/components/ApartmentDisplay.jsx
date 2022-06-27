import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

const ApartmentDisplay = props => {
  const { content } = props;

  return(
    <div className="aptTable row">
      <div className="apartment toLeft">
        {content.apartment_name}
      </div>
      <div className="location toLeft">
        {content.location_city.concat(", " + content.location_state)}
      </div>
      <div className="rent">
        {content.apartment_rent}
      </div>
      <div className="bedbath">
        {content.apartment_bed.concat(" / " + content.apartment_bath)}
      </div>
      <div className="movein">
        {content.apartment_movein}
      </div>
      <div className="pet">
        {content.apartment_pet ? <i className="fa-solid fa-o"></i> : <i className="fa-solid fa-x"></i>}
      </div>
      <div className="sqft sqftH">
        {content.apartment_sqft}
      </div>
      <div className="details dH">
        <i className="showDetails fa-solid fa-caret-down"></i>
      </div>
    </div>
  )
};

export default ApartmentDisplay;