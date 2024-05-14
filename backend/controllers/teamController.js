// controllers/teamController.js
const Team = require('../models/Team');

// Controller function to handle creating a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = new Team(req.body);
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle getting all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle updating a team member
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedTeamMember = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeamMember) {
      return res.status(404).json({ error: 'Team member not found' });
    }
    res.json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle deleting a team member
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).json({ error: 'Team member not found' });
    }
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
