import React from 'react';

const ApartmentRow = props => {
  return(
    <div id="aptRow" className="row">
      <div className="apartment toLeft">Emory Point</div>
      <div className="location toLeft">Atlanta, GA</div>
      <div className="rent">1800</div>
      <div className="bedbath"> 1 / 1</div>
      <div className="movein">July-25</div>
      <div className="pet">O</div>
      <div className="sqft">764</div>
      <div className="details">|</div>
    </div>
  )
};

export default ApartmentRow;