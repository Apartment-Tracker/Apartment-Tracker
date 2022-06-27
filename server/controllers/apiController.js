// Controllers
const { cli } = require('webpack-dev-server');
const db = require('../database/apt_db.js');

const apiController = {};

apiController.getApt = async (req, res, next) => {
  try {
  } catch (err) {
    next({
      log: `apiController.getApt: ERROR ${err}`,
      message: { err: 'Error occurred in apiController.getApt' },
    });
  }
};

apiController.addApt = async (req, res, next) => {
  const {
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
    pool,
    gym,
    fan,
    ceilinglight,
    city,
    state,
    zipcode,
    address,
  } = req.body;

  try {
    const text1 = `INSERT into apartment (name, unit, rent, deposit, lease, bed, bath, sqft, movein, pet, contact, url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`;
    const text2 = `INSERT into features(floor, dishwasher, ac, patio, balcony, pool, gym, fan, ceilinglight)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *`;
    const text3 = `INSERT into locations (city, state, zipcode, address)
        VALUES ($1, $2, $3, $4)
        RETURNING *`;
    const params1 = [
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
    ];
    const params2 = [
      floor,
      dishwasher,
      ac,
      patio,
      balcony,
      pool,
      gym,
      fan,
      ceilinglight,
    ];
    const params3 = [city, state, zipcode, address];
    // const result = await db.query(text, params);
    const result1 = await db.query(text1, params1);

    const result2 = await db.query(text2, params2);

    const result3 = await db.query(text3, params3);

    // res.locals.aptDetails = result.rows[0];
    // console.log(res.locals.aptDetails);
    next();
  } catch (err) {
    next({
      log: `apiController.addApt: ERROR ${err}`,
      message: { err: 'Error occurred in apiController.addApt' },
    });
  }
};

apiController.updateApt = async (req, res, next) => {
  // May need to get id or name from client
  const { id } = req.params;
  const {
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
    pool,
    gym,
    fan,
    ceilinglight,
    city,
    state,
    zipcode,
    address,
  } = req.body;
  try {
    const queryApt = `UPDATE apartment 
    SET (name, unit, rent, deposit, lease, bed, bath, sqft, movein, pet, contact, url) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    WHERE _id = ${id}`;
    const paramsApt = [
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
    ];
    const queryFeatures = `UPDATE features 
SET (dishwasher, ac, patio, balcony, pool, gym, fan, ceilinglight) = ($1, $2, $3, $4, $5, $6, $7, $8)
WHERE _id = ${id}`;
    const paramsFeatures = [
      dishwasher,
      ac,
      patio,
      balcony,
      pool,
      gym,
      fan,
      ceilinglight,
    ];
    const queryLocations = `UPDATE locations 
SET (city, state, zipcode, address) = ($1, $2, $3, $4)
WHERE _id = ${id}`;
    const paramsLocations = [city, state, zipcode, address];
    const result1 = await db.query(queryApt, paramsApt);
    const result2 = await db.query(queryFeatures, paramsFeatures);
    const result3 = await db.query(queryLocations, paramsLocations);
    // console.log(result1);
    // console.log(result2);
    // console.log(result3);
    // res.locations.updatedDetails = result.rows[0];
    return next();
  } catch (err) {
    next({
      log: `apiController.updateApt: ERROR ${err}`,
      message: { err: 'Error occurred in apiController.updateApt' },
    });
  }
};

apiController.deleteApt = async (req, res, next) => {
  try {
  } catch (err) {
    next({
      log: `apiController.deleteApt: ERROR ${err}`,
      message: { err: 'Error occurred in apiController.deleteApt' },
    });
  }
};

//May need to do a WITH call
// const query = `WITH update_1 as (
//   UPDATE apartment
//   SET (name, unit, rent, deposit, lease, bed, bath, sqft, movein, pet, contact, url) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
//   WHERE _id = ${id}
//   ), update_2 as (
//     UPDATE features
//     SET (dishwasher, ac, patio, balcony, pool, gym, fan, ceilinglight) = ($13, $14, $15, $16, $17, $18, $19, $20, $21)
//     WHERE _id = ${id}
//   ), update_3 as (
//     UPDATE locations
//     SET (city, state, zipcode, address) = ($22, $23, $24, $25)
//     WHERE _id = ${id}
//   )`;
// const params = [
//   id,
//   name,
//   unit,
//   rent,
//   deposit,
//   lease,
//   bed,
//   bath,
//   sqft,
//   movein,
//   pet,
//   contact,
//   url,
//   floor,
//   dishwasher,
//   ac,
//   patio,
//   balcony,
//   pool,
//   gym,
//   fan,
//   ceilinglight,
//   city,
//   state,
//   zipcode,
//   address,
// ];

// const queryApt = `UPDATE apartment`;
// const paramsApt = [
//   name,
//   unit,
//   rent,
//   deposit,
//   lease,
//   bed,
//   bath,
//   sqft,
//   movein,
//   pet,
//   contact,
//   url,
// ];
// const queryFeatures = `UPDATE features`;
// const paramsFeatures = [
//   dishwasher,
//   ac,
//   patio,
//   balcony,
//   pool,
//   gym,
//   fan,
//   ceilinglight,
// ];
// const queryLocations = `UPDATE locations`;
// const paramsLocations = [city, state, zipcode, address];

module.exports = apiController;
