const { Pool } = require('pg');

const PG_URI = process.env.POSTGRESQL_APT_DB;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

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

//   CREATE TABLE apartment (
//             _id SERIAL PRIMARY KEY,
//             date DATE NOT NULL DEFAULT CURRENT_DATE,
//             name VARCHAR NOT NULL,
//             unit INT NOT NULL,
//             rent INT NOT NULL,
//             deposit INT NOT NULL,
//             lease INT NOT NULL,
//             bed INT NOT NULL,
//             bath INT NOT NULL,
//             sqft INT NOT NULL,
//             movein DATE NOT NULL,
//             pet BOOLEAN NOT NULL,
//             contact VARCHAR NOT NULL,
//             url VARCHAR NOT NULL,
//             features_id INTEGER REFERENCES features (_id),
//             location_id INTEGER REFERENCES location (_id));

/* 
create table author (name varchar primary key, place varchar);

create table bookstore (book_name varchar primary key, author varchar, price decimal
, CONSTRAINT fk_author_bookstore
      FOREIGN KEY(author) 
      REFERENCES author(name));
*/
