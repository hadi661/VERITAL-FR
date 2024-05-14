// routes/divisions.js
const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');

// Route to create a new division
router.post('/', divisionController.createDivision);

// Route to get all divisions
router.get('/', divisionController.getAllDivisions);

// Route to get a single division by ID
router.get('/:id', divisionController.getDivisionById);

// Route to update a division by ID
router.put('/:id', divisionController.updateDivision);

// Route to delete a division by ID
router.delete('/:id', divisionController.deleteDivision);

// Route for searching divisions
router.get('/search', divisionController.searchDivisions);

module.exports = router;
