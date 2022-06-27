import React, { Component } from 'react';
import Apartment from "./Apartment.jsx";

class Apartments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: false,
    };
  };

  render() {
    const { aptIds, apartments } = this.props;
    if (!aptIds) return null;

    const apartmentList = aptIds.map(id => {
      const apt = apartments[id];
      return (
        <Apartment key={id} aptInfo={apt} />
      );
    })

    return(
      <div>
        {apartmentList}
      </div>
    )
  };
};

export default Apartments;