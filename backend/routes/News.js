// routes/news.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

// Route to create a new piece of news
router.post('/', newsController.createNews);

// Route to get all news
router.get('/', newsController.getAllNews);

// Route to get a single piece of news by ID
router.get('/:id', newsController.getNewsById);

// Route to update a piece of news by ID
router.put('/:id', newsController.updateNews);

// Route to delete a piece of news by ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;
