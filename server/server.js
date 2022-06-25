const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Access to Frontend
app.use(express.static(path.resolve('client')));

// Acces to Database
// db = process.env.postgresURI


// Local Error Handler


// Global Error Handler


app.listen(PORT, () => (`Listening on port: ${PORT}`));

module.exports = app;
