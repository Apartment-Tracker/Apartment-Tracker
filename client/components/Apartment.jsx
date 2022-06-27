import React, { Component } from 'react';
import ApartmentDisplay from "./ApartmentDisplay.jsx";
import ApartmentDetails from "./ApartmentDetails.jsx";

class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    // this.showDetails = this.showDetails.bind(this);
  }

  // showDetails() {
  //   const show = this.state.show;
  //   show = show ? !show : show;
  //   this.setState({ show })
  // }
  
  render() {
    const { aptInfo } = this.props;
    // const details = this.state.stats ? <ApartmentDetails aptInfo={aptInfo} status={this.state.show} /> : <></>;

    return (
      <div>
        {/* <ApartmentDisplay aptInfo={aptInfo} showDetails={this.showDetails} /> */}
        <ApartmentDisplay aptInfo={aptInfo} />
        <ApartmentDetails aptInfo={aptInfo} />
        {/* {details} */}
      </div>
    )
  }
};

export default Apartment;