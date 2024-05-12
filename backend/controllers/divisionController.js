// controllers/divisionController.js

const Division = require('../models/Division');

// Controller function to create a new division
exports.createDivision = async (req, res) => {
  try {
    const division = new Division(req.body);
    const savedDivision = await division.save();
    res.status(201).json(savedDivision);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all divisions
exports.getAllDivisions = async (req, res) => {
  try {
    const divisions = await Division.find();
    res.json(divisions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a division by ID
exports.getDivisionById = async (req, res) => {
  try {
    const division = await Division.findById(req.params.id);
    if (!division) {
      return res.status(404).json({ error: 'Division not found' });
    }
    res.json(division);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a division by ID
exports.updateDivision = async (req, res) => {
  try {
    const division = await Division.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!division) {
      return res.status(404).json({ error: 'Division not found' });
    }
    res.json(division);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to delete a division by ID
exports.deleteDivision = async (req, res) => {
  try {
    const division = await Division.findByIdAndDelete(req.params.id);
    if (!division) {
      return res.status(404).json({ error: 'Division not found' });
    }
    res.json({ message: 'Division deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
