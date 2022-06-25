// Controllers
const db = require('../database/apt_db.js')

const apiController = {};

apiController.getApt = async (req, res, next) => {
    try{
        
    }
    catch(err){
        next()
    }
}


// CREATE TABLE features (
//     _id SERIAL PRIMARY KEY,
//     floor VARCHAR NOT NULL,
//     dishwasher BOOLEAN NOT NULL,
//     ac BOOLEAN NOT NULL,
//     patio BOOLEAN NOT NULL,
//     balcony BOOLEAN NOT NULL,
//     pool BOOLEAN NOT NULL,
//     gym BOOLEAN NOT NULL
// );


// CREATE TABLE location (
//     _id SERIAL PRIMARY KEY,
//     city VARCHAR NOT NULL,
//     state VARCHAR NOT NULL,
//     zipcode INT NOT NULL,
//     address VARCHAR NOT NULL
// );

apiController.addApt = async (req, res, next) => {
    try {
        const {
            date, 
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
            //features_id, 
            // location_id,
            floor,
            dishwasher,
            ac,
            patio,
            balcony,
            pool,
            gym,
            city,
            state,
            zipcode,
            address
        } = req.body;
        
        const text1 = `INSERT into apartment (date, name, unit, rent, deposit, lease, bed, bath, sqft, movein, pet, contact, url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *
        `;

        const text2 = `INSERT into features(floor, dishwasher, ac, patio, balcony, pool, gym)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `;

        const text3 = `INSERT into location (city, state, zipcode, address)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `;
        
        const params1 = [date, name, unit, rent, deposit, lease, bed, bath, sqft, movein, pet, contact, url];
        const params2 = [floor, dishwasher, ac, patio, balcony, pool, gym];
        const params3 = [city, state, zipcode, address];
        
        const result1 = await db.query(text1, params1);
        const result2 = await db.query(text2, params2);
        res.locals.aptDetails = result1.row[0], result2.row[0],
    }
    catch(err){
     next({})   
    }
}
/* 
 `SELECT p.*, pl.name as homeworld, s.name as species 
                   FROM people p 
                   INNER JOIN planets pl ON p.homeworld_id = pl._id 
                   INNER JOIN species s ON p.species_id = s._id;`;


    `INSERT INTO (name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id, films)
  VALUES(${name}, ${gender}, ${species} , ${birth_year}, ${eye_color}, ${skin_color}, ${hair_color}, ${mass}, ${height}, ${homeworld})`;



with new_user as (
  insert into user_account(name, email)
  values ('arthur', 'some@where.com')
  returning user_id
)
insert into other_table (user_id, some_column)
select user_id, 'some value'
from new_user;


insert into user_account(name, email)
values ('arthur', 'some@where.com');

insert into other_table (user_id, some_column)
values (lastval(), 'some value');
*/

apiController.updateApt = async (req, res, next) => {
    try{
        
    }
    catch(err){
        next()
    }
}



apiController.deleteApt = async (req, res, next) => {
    try{
        
    }
    catch(err){
        next()
    }
}

modules.exports = apiController;