// routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Route to create a new team member
router.post('/', teamController.createTeamMember);

// Route to get all team members
router.get('/', teamController.getAllTeamMembers);

// Route to update a team member by ID
router.put('/:id', teamController.updateTeamMember);

// Route to delete a team member by ID
router.delete('/:id', teamController.deleteTeamMember);

module.exports = router;
