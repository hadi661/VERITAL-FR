// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Route to create a new contact
router.post('/', (req, res) => {
  const { name, address, phone, fax, email, website } = req.body;
  const newContact = new Contact({ name, address, phone, fax, email, website });
  newContact.save()
    .then(contact => {
      res.status(201).json(contact);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to get all contacts
router.get('/', (req, res) => {
  Contact.find()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to get a single contact by ID
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.json(contact);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to update a contact by ID
router.put('/:id', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(contact => {
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.json(contact);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to delete a contact by ID
router.delete('/:id', (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.json({ message: 'Contact deleted successfully' });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

module.exports = router;
