// controllers/testimonialsController.js
const Testimonial = require('../models/Testimonial');

// Controller function to handle creating a new testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle getting all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle updating a testimonial
exports.updateTestimonial = async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle deleting a testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deletedTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
