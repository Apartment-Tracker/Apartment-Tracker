import React from 'react';

const ApartmentDetails = props => {
  const { aptInfo } = props;
    
  // Match with DB column names
  const data = {
    aptName: aptInfo.apartment_name,
    aptUnit: aptInfo.apartment_unit,
    aptUrl: aptInfo.apartment_url,
    aptAddress: aptInfo.location_address,
    aptCity: aptInfo.location_city,
    aptState: aptInfo.location_state,
    aptZipcode: aptInfo.location_zipcode,
    aptContact: aptInfo.apartment_contact,
    aptRent: aptInfo.apartment_rent,
    aptDeposit: aptInfo.apartment_deposit,
    aptFloor: aptInfo.features_floor,
    aptBalcony: aptInfo.features_balcony,
    aptDishwasher: aptInfo.features_dishwasher,
    aptMovein: aptInfo.apartment_movein,
    aptLease: aptInfo.apartment_lease,
    aptGym: aptInfo.features_gym,
    aptPatio: aptInfo.features_patio,
    aptCeilinglight: aptInfo.features_ceilinglight,
    aptBed: aptInfo.apartment_bed,
    aptBath: aptInfo.apartment_bath,
    aptSqft: aptInfo.apartment_sqft,
    aptPet: aptInfo.apartment_pet,
    aptFan: aptInfo.features_fan,
    aptAc: aptInfo.features_ac,
  }

  return (
    <div className="fullDetail">
      <div className="editInfo">Edit</div>
      <div className="detailsHead">
        <h3>
          <a href={data.aptUrl} target="_blank">{data.aptName}</a> 
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
            <td className="categInfo">{data.aptMovein}</td>
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
        </table>
      </div>
    </div>
  )
}

export default ApartmentDetails;