// routes
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');
//Require controller/middleware

//GET request to display all rows
router.get('/', (req, res) => {
  res.status(200).json({});
});

//POST request to create a new row
router.post('/', apiController.addApt, (req, res) => {
  res.status(200).json({});
});

//PATCH request to update an existing row
router.put('/:id', apiController.updateApt, (req, res) => {
  console.log('UPDATED');
  res.status(200).json({});
});

//DELETE request to delete a row
router.delete('/', (req, res) => {
  res.status(200).json({});
});

module.exports = router;
