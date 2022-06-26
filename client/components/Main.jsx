import React from 'react';
import Header from "./Header.jsx";
import CreateApartment from "./CreateApartment.jsx";
import Apartment from "./Apartment.jsx";
import '../stylesheets/apartment.scss';

import sampleData from '../sampleData';

const Main = props => {

  // List of all apartment rows
  let apartmentList = [];
  apartmentList = [
    <Apartment data={sampleData} />, 
    <Apartment data={sampleData} />,
  ];

  return(
    <div>
      <Header />
      <CreateApartment />
      {apartmentList}
    </div>
  );
};

export default Main;