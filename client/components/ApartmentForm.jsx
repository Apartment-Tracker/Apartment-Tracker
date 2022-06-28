import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "./Button.jsx";
import '../stylesheets/apartmentForm.scss'

const useInput = (initial) => {
  const [ value, setValue ] = useState(initial);
  const onChange = e => {
      setValue(e.target.value);
  }
  return [ value, onChange ];
};


const ApartmentForm = props => {

  const [ name, nameOnChange ] = useInput('');
  const [ unit, unitOnChange ] = useInput('');
  const [ rent, rentOnChange ] = useInput('');
  const [ deposit, depositOnChange ] = useInput('');
  const [ lease, leaseOnChange ] = useInput('');
  const [ bed, bedOnChange ] = useInput('');
  const [ bath, bathOnChange ] = useInput('');
  const [ sqft, sqftOnChange ] = useInput('');
  const [ movein, moveinOnChange ] = useInput('');
  const [ pet, petOnChange ] = useInput(false);
  const [ contact, contactOnChange ] = useInput('');
  const [ url, urlOnChange ] = useInput('');
  const [ floor, floorOnChange ] = useInput('');
  const [ dishwasher, dishwasherOnChange ] = useInput(false);
  const [ ac, acOnChange ] = useInput(false);
  const [ patio, patioOnChange ] = useInput(false);
  const [ balcony, balconyOnChange ] = useInput(false);
  const [ gym, gymOnChange ] = useInput(false);
  const [ fan, fanOnChange ] = useInput(false);
  const [ ceilinglight, ceilinglightOnChange ] = useInput(false);
  const [ city, cityOnChange ] = useInput('');
  const [ state, stateOnChange ] = useInput('');
  const [ zipcode, zipcodeOnChange ] = useInput('');
  const [ address, addressOnChange ] = useInput('');


  const cancel = () => {
    document.getElementById('apartmentForm').style.display='none';
  }

  
  const saveApt = () => {

    const body = {
    name,
    unit,
    rent,
    deposit,
    lease,
    bed,
    bath,
    sqft,
    movein,
    pet,
    contact,
    url,
    floor,
    dishwasher,
    ac,
    patio,
    balcony,
    gym,
    fan,
    ceilinglight,
    city,
    state,
    zipcode,
    address
    }    
    
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      cancel();
      window.location.reload();

    })
    .catch(err => {console.log('SaveApt fetch API ERROR: ', err)})
  }
  


  return (
    <div id="apartmentForm">
      <div>
        <form>
          <div id="formGrid">
            <div>
              <h3>Apartment Information</h3>
              <div className="aptInfo">
                <label>Name</label><br/>
                <input type="text" name="name" className="nameBox inputbox" onChange={nameOnChange} />
              </div>

              <div>
                <div className ="horizontalBlock">
                  <label> Move-in Date</label><br/>
                  <input type = "text" name = "move-in" className="movinBox inputbox" onChange={moveinOnChange}/>
                </div>
                <div className ="horizontalBlock">
                  <div className="space">
                    <label> Unit #</label><br/>
                    <input type = "text" name = "unit" className="unitBox inputbox" onChange={unitOnChange}/>
                  </div>
                </div>
              </div>

              <div className="horizontalBlock">
                <label> Rent Price</label><br/>
                <input type = "text" name = "price" className="rentBox inputbox" onChange={rentOnChange}/>
              </div>
              <div className="horizontalBlock">
                <div className="space">
                  <label> Deposit</label><br/>
                  <input type = "text" name = "deposit" className="depositBox inputbox" onChange={depositOnChange}/>
                </div>
              </div>
              
              <div>
                <div className="horizontalBlock">
                  <label> Bed</label><br/>
                  <input type = "text" name = "bed" className="smallBox inputbox" onChange={bedOnChange}/>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label> Bath</label><br/>
                    <input type = "text" name = "bath" className="smallBox inputbox" onChange={bathOnChange}/>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label> Sq Ft</label><br/>
                    <input type = "text" name = "sqft" className="sqftBox inputbox" onChange={sqftOnChange}/>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label> Lease Term</label><br/>
                    <input type = "text" name = "lease" className="leaseBox inputbox" onChange={leaseOnChange}/>
                  </div>
                </div>
              </div>

              <h3 className="location">Location</h3>
              <div className="locInfo">
                <div className="horizontalBlock">
                  <label>City</label><br/>
                  <input type="text" name="name" className="cityBox inputbox" onChange={cityOnChange}/>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label>State</label><br/>
                    <input type="text" name="state" className="smallBox inputbox" onChange={stateOnChange}/>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label>Zipcode</label><br/>
                    <input type="text" name="zipcode" className="sqftBox inputbox" onChange={zipcodeOnChange}/>
                  </div>
                </div>
              </div>
              <div className="horizontalBlock">
                <label>Address</label><br/>
                <input type="text" name="address" className="addressBox inputbox" onChange={addressOnChange}/>
              </div>
            </div>

            <div>
              <h3>More Details</h3>
              <div className="moreInfo">
                <label>Floor Type</label><br/>
                <select onChange={floorOnChange}>
                <option value = "0">Select</option>
                  <option value = "Wood">Wood</option>
                  <option value = "Carpet">Carpet</option>
                </select>
              </div>
              <div id="utilities">
                <div>
                  <input type = "checkbox" id = "gym" name="gym" onChange={gymOnChange}/>
                  <label htmlFor = "gym"> Gym</label>
                </div>
                <div>
                  <input type = "checkbox" id = "pet" name="pet" onChange={petOnChange}/>
                  <label htmlFor = "pet"> Pet</label>
                </div>
                <div>
                  <input type = "checkbox" id = "balcony" name="balcony" onChange={balconyOnChange}/>
                  <label htmlFor = "balcony"> Balcony</label>
                </div>
                <div>
                  <input type = "checkbox" id = "patio" name="patio" onChange={patioOnChange}/>
                  <label htmlFor = "patio"> Patio</label>
                </div>
                <div>
                  <input type = "checkbox" id = "fan" name="fan" onChange={fanOnChange}/>
                  <label htmlFor = "fan"> Fan</label>
                </div>
                <div>
                  <input type = "checkbox" id = "dishwasher" name="dishwasher" onChange={dishwasherOnChange}/>
                  <label htmlFor = "dishwasher"> Dishwasher</label>
                </div>
                <div>
                  <input type = "checkbox" id = "ceiling" name="ceiling" onChange={ceilinglightOnChange}/>
                  <label htmlFor = "ceiling"> Ceiling Light</label>
                </div>
                <div>
                  <input type = "checkbox" id = "air" name="air" onChange={acOnChange}/>
                  <label htmlFor = "air"> Air Conditioning</label>
                </div>
              </div>
              <div className="contact">
                <div>
                  <label>Contact </label><br/>
                  <input type = "text" name = "contact" id="contactBox inputbox" onChange={contactOnChange}/>
                </div>
                <div className="link">
                  <label>Link </label><br/>
                  <input type = "text" name = "link" id="contactBox inputbox" onChange={urlOnChange}/>
                </div>
              </div>
            </div>
          </div>
          
        </form>
      </div>
      <div className="btnbox">
        <Button btnname="Save" onClick={saveApt}/>
        <Button btnname="Cancel" onClick={cancel}/>
      </div>
    </div> 
  );

};

export default ApartmentForm;