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
            <div id="formGrid">
              <div>
                <h3>Apartment Information</h3>
                <div className="aptInfo">
                  <label>Name</label><br/>
                  <input type="text" name="name" className="nameBox inputbox" />
                </div>

                <div>
                  <div className ="horizontalBlock">
                    <label> Move-in Date</label><br/>
                    <input type = "text" name = "move-in" className="movinBox inputbox"/>
                  </div>
                  <div className ="horizontalBlock">
                    <div className="space">
                      <label> Unit #</label><br/>
                      <input type = "text" name = "unit" className="unitBox inputbox"/>
                    </div>
                  </div>
                </div>

                <div className="horizontalBlock">
                  <label> Rent Price</label><br/>
                  <input type = "text" name = "price" className="rentBox inputbox"/>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label> Deposit</label><br/>
                    <input type = "text" name = "deposit" className="depositBox inputbox"/>
                  </div>
                </div>
                
                <div>
                  <div className="horizontalBlock">
                    <label> Bed</label><br/>
                    <input type = "text" name = "bed" className="smallBox inputbox"/>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Bath</label><br/>
                      <input type = "text" name = "bath" className="smallBox inputbox"/>
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Sq Ft</label><br/>
                      <input type = "text" name = "sqft" className="sqftBox inputbox"/>
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Lease Term</label><br/>
                      <input type = "text" name = "lease" className="leaseBox inputbox"/>
                    </div>
                  </div>
                </div>

                <h3 className="location">Location</h3>
                <div className="locInfo">
                  <div className="horizontalBlock">
                    <label>City</label><br/>
                    <input type="text" name="name" className="cityBox inputbox" />
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label>State</label><br/>
                      <input type="text" name="state" className="smallBox inputbox" />
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label>Zipcode</label><br/>
                      <input type="text" name="zipcode" className="sqftBox inputbox" />
                    </div>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <label>Address</label><br/>
                  <input type="text" name="address" className="addressBox inputbox" />
                </div>
              </div>

              <div>
                <h3>More Details</h3>
                <div className="moreInfo">
                  <label>Floor Type</label><br/>
                  <select>
                  <option value = "1">Select</option>
                    <option value = "1">Wood</option>
                    <option value = "2">Carpet</option>
                  </select>
                </div>
                <div id="utilities">
                  <div>
                    <input type = "checkbox" id = "gym" name="gym"/>
                    <label htmlFor = "gym"> Gym</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "pet" name="pet"/>
                    <label htmlFor = "pet"> Pet</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "balcony" name="balcony"/>
                    <label htmlFor = "balcony"> Balcony</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "patio" name="patio"/>
                    <label htmlFor = "patio"> Patio</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "fan" name="fan"/>
                    <label htmlFor = "fan"> Fan</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "dishwasher" name="dishwasher"/>
                    <label htmlFor = "dishwasher"> Dishwasher</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "ceiling" name="ceiling"/>
                    <label htmlFor = "ceiling"> Ceiling Light</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "air" name="air"/>
                    <label htmlFor = "air"> Air Conditioning</label>
                  </div>
                </div>
                <div className="contact">
                  <div>
                    <label>Contact </label><br/>
                    <input type = "text" name = "contact" id="contactBox inputbox"/>
                  </div>
                  <div className="link">
                    <label>Link </label><br/>
                    <input type = "text" name = "link" id="contactBox inputbox"/>
                  </div>
                </div>
              </div>
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