// routes/contacts.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactController');

// Route to create a new contact
router.post('/', contactController.createContact);

// Route to get all contacts
router.get('/', contactController.getAllContacts);

// Route to get a single contact by ID
router.get('/:id', contactController.getContactById);

// Route to update a contact by ID
router.put('/:id', contactController.updateContact);

// Route to delete a contact by ID
router.delete('/:id', contactController.deleteContact);

module.exports = router;
