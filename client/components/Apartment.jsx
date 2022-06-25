import React from 'react';
import ApartmentDisplay from "./ApartmentDisplay.jsx";
import ApartmentDetails from "./ApartmentDetails.jsx";

const Apartment = props => (
  <div>
    <ApartmentDisplay />
    <ApartmentDetails />
  </div>
);

export default Apartment;