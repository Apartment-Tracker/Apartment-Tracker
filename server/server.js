const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api');

// Access to Frontend
app.use(express.static(path.resolve(__dirname, '../client')));
// app.use('./client/stylesheets', express.static(path.resolve(__dirname + './client/stylesheets')));
// app.use('./client/index.html', express.static(path.resolve(__dirname + './client/index.html')));

app.use(express.json());

app.use('/api', apiRouter);
// Local Error Handler
app.use((req, res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 400,
    message: { err: 'There is an error' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => `Listening on port: ${PORT}`);

module.exports = app;
