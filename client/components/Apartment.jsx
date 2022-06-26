import React from 'react';
import ApartmentDisplay from "./ApartmentDisplay.jsx";
import ApartmentDetails from "./ApartmentDetails.jsx";

const Apartment = props => {
  const { data } = props; 

  return(
    <div>
      <ApartmentDisplay content={data}/>
      <ApartmentDetails />
    </div>
  );
};

export default Apartment;