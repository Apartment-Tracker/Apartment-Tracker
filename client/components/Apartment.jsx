import React from 'react';
import ApartmentDisplay from "./ApartmentDisplay.jsx";
import ApartmentDetails from "./ApartmentDetails.jsx";

const Apartment = props => {
  const { data } = props; 

  return(
    <div>
      <ApartmentDisplay content={data}/>
      <ApartmentDetails data={data} status='false'/>
    </div>
  );
};

export default Apartment;