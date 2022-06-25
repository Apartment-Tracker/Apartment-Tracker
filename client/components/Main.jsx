import React from 'react';
import Header from "./Header.jsx";
import CreateApartment from "./CreateApartment.jsx";
import Apartment from "./Apartment.jsx";

const Main = props => {
  return(
    <div>
      <Header />
      <CreateApartment />
      <Apartment />
    </div>
  );
};

export default Main;