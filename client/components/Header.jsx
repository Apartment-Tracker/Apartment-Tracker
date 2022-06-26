import React from 'react';
import Button from "./Button.jsx";

const Header = props => {
  return(
    <div>å
      <div class="header">
        <Button btnname="Add Apartment" create='sendPOSTRequest'/>
      </div>
      
      <div id="aptRow">
        <div className="colH apartment toLeft">Apartment Name</div>
        <div className="colH location toLeft">Location</div>
        <div className="colH rent">Rent</div>
        <div className="colH bedbath">Bed / Bath</div>
        <div className="colH movein">Move-In</div>
        <div className="colH pet">Pet</div>
        <div className="colH sqft sqftH">Sq ft</div>
        <div className="colH details dH">Details</div>
      </div>
    </div>
  );
};

export default Header;