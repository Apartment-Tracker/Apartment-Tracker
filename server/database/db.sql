-- sql

-- CREATE TABLE customers(
--    customer_id INT GENERATED ALWAYS AS IDENTITY,
--    customer_name VARCHAR(255) NOT NULL,
--    PRIMARY KEY(customer_id)
-- );

-- CREATE TABLE contacts(
--    contact_id INT GENERATED ALWAYS AS IDENTITY,
--    customer_id INT,
--    contact_name VARCHAR(255) NOT NULL,
--    phone VARCHAR(15),
--    email VARCHAR(100),
--    PRIMARY KEY(contact_id),
--    CONSTRAINT fk_customer
--       FOREIGN KEY(customer_id) 
-- 	  REFERENCES customers(customer_id)
-- );

-- features_id INT FOREIGN KEY REFERENCES features(_id)
-- locations_id INT FOREIGN KEY REFERENCES locations(_id)
-- "thedate" timestamptz NOT NULL DEFAULT (now())

 CREATE TABLE features (
    "_id" INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    "floor" VARCHAR,
    "dishwasher" BOOLEAN DEFAULT FALSE,
    "ac" BOOLEAN DEFAULT FALSE,
    "patio" BOOLEAN DEFAULT FALSE,    
    "balcony" BOOLEAN DEFAULT FALSE,
    "pool" BOOLEAN DEFAULT FALSE,
    "gym" BOOLEAN DEFAULT FALSE,
    "fan" BOOLEAN DEFAULT FALSE,
    "ceilinglight" BOOLEAN DEFAULT FALSE,
    PRIMARY KEY("_id")
    ) WITH (
        OIDS=FALSE
    );

 CREATE TABLE locations (
    "_id" INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL,
    "zipcode" INT,
    "address" VARCHAR,
    PRIMARY KEY("_id")
    ) WITH (
        OIDS=FALSE
    );


   CREATE TABLE apartment (
    "_id" INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR NOT NULL,
    "unit" INT NOT NULL,
    "rent" INT NOT NULL,
    "deposit" INT,
    "lease" INT,
    "bed" INT,
    "bath" INT,             
    "sqft" INT,
    "movein" DATE,
    "pet" BOOLEAN,
    "contact" VARCHAR,
    "url" VARCHAR,
    "features_id" INT GENERATED ALWAYS AS IDENTITY, 
    "locations_id" INT GENERATED ALWAYS AS IDENTITY,
    PRIMARY KEY("_id")
    ) WITH (
        OIDS=FALSE
    );

-- CONSTRAINT "apartment_features_fk" FOREIGN KEY("features_id") REFERENCES features ("_id"),
    -- CONSTRAINT "apartment_location_fk" FOREIGN KEY("locations_id") REFERENCES locations ("_id")
    -- CONSTRAINT "fk_features" FOREIGN KEY("features_id") REFERENCES features ("_id"),
    -- CONSTRAINT "fk_locations" FOREIGN KEY("locations_id") REFERENCES locations("_id")
    -- "features_id" INTEGER REFERENCES features ("_id"),
    -- "location_id" INTEGER REFERENCES location ("_id"));

-- CONSTRAINT "apartment_features_fk" FOREIGN KEY ("features_id") REFERENCES features ("_id"),
-- CONSTRAINT "apartment_location_fk" FOREIGN KEY ("location_id") REFERENCES location ("_id"),

-- ALTER TABLE apartment ADD CONSTRAINT "apartment_features_fk" FOREIGN KEY ("features_id") REFERENCES features ("_id");
-- ALTER TABLE apartment ADD CONSTRAINT "apartment_location_fk" FOREIGN KEY ("locations_id") REFERENCES locations ("_id");



INSERT INTO features ("floor") VALUES ('hardwood');
INSERT INTO locations ("city", "state", "zipcode", "address") VALUES ('LA', 'CA', '99999', '123 main st');
INSERT INTO apartment ("name", "unit", "rent", "deposit", "lease", "bed", "bath", "sqft", "movein", "pet", "contact", "url") VALUES ('Avalon', 10, 2500, 700, 3000, 2, 2, 980, '2022-12-12', 'FALSE', '702-444-3333', 'http://google.com');

