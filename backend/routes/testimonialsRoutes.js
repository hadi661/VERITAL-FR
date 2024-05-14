// routes/testimonialsRoutes.js
const express = require('express');
const router = express.Router();
const testimonialsController = require('../controllers/testimonialsController');

// Route to create a new testimonial
router.post('/', testimonialsController.createTestimonial);

// Route to get all testimonials
router.get('/', testimonialsController.getAllTestimonials);

// Route to update a testimonial by ID
router.put('/:id', testimonialsController.updateTestimonial);

// Route to delete a testimonial by ID
router.delete('/:id', testimonialsController.deleteTestimonial);

module.exports = router;
