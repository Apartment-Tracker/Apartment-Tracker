import React from 'react';

const ApartmentDetails = props => {
  const { data, display } = props;
    
  return (
    <div>
      <div className="detailsHead">
        <h3><a href="#">{data.apartment_name}</a> (Unit {data.apartment_unit})</h3>
        <p>
          {data.location_address}, {" "}
          {data.location_city}, {" "}
          {data.location_state}, {" "}
          {data.location_zipcode}
        </p>
        <p>{data.apartment_contact}</p>
      </div>
      <div className="detailsBody">
        <tables>
          <tr>
            <td className="category">Rent</td>
            <td className="categInfo">{data.apartment_rent}</td>
            <td className="category">Deposit</td>
            <td className="categInfo">{data.apartment_deposit}</td>
            <td className="category">Floor</td>
            <td className="categInfo">{data.features_floor}</td>
            <td className="category">Balcony</td>
            <td className="categInfo">{data.features_balcony ? 'Yes' : 'No'}</td>
            <td className="category">Dishwasher</td>
            <td className="categInfo">{data.features_dishwasher ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td className="category">Move-In</td>
            <td className="categInfo">{data.apartment_movein}</td>
            <td className="category">Lease</td>
            <td className="categInfo">{data.apartment_lease}</td>
            <td className="category">Gym</td>
            <td className="categInfo">{data.features_gym ? 'Yes' : 'No'}</td>
            <td className="category">Patio</td>
            <td className="categInfo">{data.features_patio? 'Yes' : 'No'}</td>
            <td className="category">Ceiling Light</td>
            <td className="categInfo">{data.features_ceilinglight ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td className="category">Bed/Bath</td>
            <td className="categInfo">{data.apartment_rent}</td>
            <td className="category">Sqft</td>
            <td className="categInfo">{data.apartment_sqft}</td>
            <td className="category">Pet</td>
            <td className="categInfo">{data.features_pet ? 'Yes' : 'No'}</td>
            <td className="category">Fan</td>
            <td className="categInfo">{data.features_fan ? 'Yes' : 'No'}</td>
            <td className="category">Air Conditioning</td>
            <td className="categInfo">{data.features_ac ? 'Yes' : 'No'}</td>
          </tr>
        </tables>
      </div>
    </div>
  )
}

export default ApartmentDetails;