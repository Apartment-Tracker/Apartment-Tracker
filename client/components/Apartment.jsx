import React, { Component } from 'react';
import ApartmentDisplay from "./ApartmentDisplay.jsx";
import ApartmentDetails from "./ApartmentDetails.jsx";

class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    let status = this.state.show;
    this.setState({ show: !status })
  }
  
  render() {
    const { aptInfo } = this.props;
    const details = this.state.show ? <ApartmentDetails aptInfo={aptInfo} /> : <></>;

    return (
      <div>
        <ApartmentDisplay aptInfo={aptInfo} showDetails={this.showDetails} />
        {/* <ApartmentDisplay aptInfo={aptInfo} /> */}
        {/* <ApartmentDetails aptInfo={aptInfo} /> */}
        {details}
      </div>
    )
  }
};

export default Apartment;