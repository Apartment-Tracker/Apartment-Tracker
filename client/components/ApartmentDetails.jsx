import React from 'react';

const ApartmentDetails = props => {
  const { aptInfo } = props;
    
  // Match with DB column names
  const data = {
    aptName: aptInfo.name,
    aptUnit: aptInfo.unit,
    aptUrl: aptInfo.url,
    aptAddress: aptInfo.address,
    aptCity: aptInfo.city,
    aptState: aptInfo.state,
    aptZipcode: aptInfo.zipcode,
    aptContact: aptInfo.contact,
    aptRent: aptInfo.rent,
    aptDeposit: aptInfo.deposit,
    aptFloor: aptInfo.floor,
    aptBalcony: aptInfo.balcony,
    aptDishwasher: aptInfo.dishwasher,
    aptMovein: aptInfo.movein,
    aptLease: aptInfo.lease,
    aptGym: aptInfo.gym,
    aptPatio: aptInfo.patio,
    aptCeilinglight: aptInfo.ceilinglight,
    aptBed: aptInfo.bed,
    aptBath: aptInfo.bath,
    aptSqft: aptInfo.sqft,
    aptPet: aptInfo.pet,
    aptFan: aptInfo.fan,
    aptAc: aptInfo.ac,
  }

  let aptMovein = new Date(data.aptMovein);
  aptMovein = aptMovein.toLocaleDateString();

  return (
    <div className="fullDetail">
      <div className="editInfo">Edit</div>
      <div className="detailsHead">
        <h3>
          <a href={data.aptUrl} target="_blank">{data.aptName} </a> 
          (Unit {data.aptUnit})
        </h3>
        <p>
          {data.aptAddress}, {" "}
          {data.aptCity}, {" "}
          {data.aptState}, {" "}
          {data.aptZipcode}
        </p>
        <p>{data.aptContact}</p>
      </div>
      <div className="detailsBody">
        <table>
          <tbody>
            <tr>
              <td className="category">Rent</td>
              <td className="categInfo">{data.aptRent}</td>
              <td className="category">Deposit</td>
              <td className="categInfo">{data.aptDeposit}</td>
              <td className="category">Floor</td>
              <td className="categInfo">{data.aptFloor}</td>
              <td className="category">Balcony</td>
              <td className="categInfo">{data.aptBalcony ? 'Yes' : 'No'}</td>
              <td className="category">Dishwasher</td>
              <td className="categInfo">{data.aptDishwasher ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td className="category">Move-In</td>
              <td className="categInfo">{aptMovein}</td>
              <td className="category">Lease</td>
              <td className="categInfo">{data.aptLease}</td>
              <td className="category">Gym</td>
              <td className="categInfo">{data.aptGym ? 'Yes' : 'No'}</td>
              <td className="category">Patio</td>
              <td className="categInfo">{data.aptPatio ? 'Yes' : 'No'}</td>
              <td className="category">Ceiling Light</td>
              <td className="categInfo">{data.aptCeilinglight ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td className="category">Bed/Bath</td>
              <td className="categInfo">{data.aptBed}/{data.aptBath}</td>
              <td className="category">Sqft</td>
              <td className="categInfo">{data.aptSqft}</td>
              <td className="category">Pet</td>
              <td className="categInfo">{data.aptPet ? 'Yes' : 'No'}</td>
              <td className="category">Fan</td>
              <td className="categInfo">{data.aptFan ? 'Yes' : 'No'}</td>
              <td className="category">Air Conditioning</td>
              <td className="categInfo">{data.aptAc ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApartmentDetails;