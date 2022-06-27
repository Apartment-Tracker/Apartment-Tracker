import React, { Component } from 'react';
import Button from "./Button.jsx";
import '../stylesheets/apartmentForm.scss'

class ApartmentForm extends Component {

  cancel = () => {
    document.getElementById('apartmentForm').style.display='none';
  }

  render() {
    return (
      <div id="apartmentForm">
        <div>
          <form>
            <h3>Apartment Information</h3>
            <div className="aptInfo">
              <label>Name<input type="text" name="name" /></label>
            </div>
            <h3>More Details</h3>
            <div className="moreInfo">
              <label>Floor Type<select/></label>
            </div>
            <h3>Location</h3>
            <div className="locInfo">
              <label>City<input type="text" name="name" /></label>
            </div>
            
          </form>
        </div>
        <div className="btnbox">
          <Button btnname="Save"/>
          <Button btnname="Cancel" onClick={this.cancel}/>
        </div>
      </div> 
    );
  };
};

export default ApartmentForm;