-- sql
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

INSERT INTO features ("floor") VALUES ('hardwood');
INSERT INTO locations ("city", "state", "zipcode", "address") VALUES ('LA', 'CA', '99999', '123 main st');
INSERT INTO apartment ("name", "unit", "rent", "deposit", "lease", "bed", "bath", "sqft", "movein", "pet", "contact", "url") VALUES ('Avalon', 10, 2500, 700, 3000, 2, 2, 980, '2022-12-12', 'FALSE', '702-444-3333', 'http://google.com');

